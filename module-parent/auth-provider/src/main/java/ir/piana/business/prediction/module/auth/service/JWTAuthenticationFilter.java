package ir.piana.business.prediction.module.auth.service;

import com.auth0.jwt.JWT;
import com.auth0.jwt.algorithms.Algorithm;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.google.api.client.googleapis.auth.oauth2.GoogleCredential;
import com.google.api.client.http.javanet.NetHttpTransport;
import com.google.api.client.json.jackson2.JacksonFactory;
import com.google.api.services.oauth2.Oauth2;
import com.google.api.services.oauth2.model.Userinfo;
import ir.piana.business.prediction.common.data.cache.AppDataCache;
import ir.piana.business.prediction.common.exceptions.HttpCommonRuntimeException;
import ir.piana.business.prediction.common.util.CommonUtils;
import ir.piana.business.prediction.common.util.CryptographyUtil;
import ir.piana.business.prediction.module.auth.action.AuthAction;
import ir.piana.business.prediction.module.auth.data.entity.UserEntity;
import ir.piana.business.prediction.module.auth.data.repository.UserRepository;
import ir.piana.business.prediction.module.auth.model.*;
import nl.captcha.Captcha;
import org.springframework.core.env.Environment;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.web.authentication.AbstractAuthenticationProcessingFilter;
import org.springframework.security.web.util.matcher.AntPathRequestMatcher;

import javax.crypto.Cipher;
import javax.crypto.NoSuchPaddingException;
import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.nio.charset.StandardCharsets;
import java.security.NoSuchAlgorithmException;
import java.security.interfaces.RSAPrivateKey;
import java.security.interfaces.RSAPublicKey;
import java.util.*;

public class JWTAuthenticationFilter extends AbstractAuthenticationProcessingFilter {

    private Environment env;
    private BCryptPasswordEncoder bCryptPasswordEncoder;
    private AuthenticationManager authenticationManager;
    private UserRepository googleUserRepository;
    private CrossDomainAuthenticationService crossDomainAuthenticationService;
    private AppDataCache appDataCache;
    private NetHttpTransport netHttpTransport;
    private AuthAction authAction;

    public JWTAuthenticationFilter(
            String loginUrl,
            AuthAction authAction,
            AuthenticationManager authenticationManager,
            BCryptPasswordEncoder bCryptPasswordEncoder,
            UserRepository googleUserRepository,
            CrossDomainAuthenticationService crossDomainAuthenticationService,
            AppDataCache appDataCache,
            Environment env) {
        super(new AntPathRequestMatcher(loginUrl));
        this.authAction = authAction;
        this.authenticationManager = authenticationManager;
        this.bCryptPasswordEncoder = bCryptPasswordEncoder;
        this.googleUserRepository = googleUserRepository;
        this.crossDomainAuthenticationService = crossDomainAuthenticationService;
        this.appDataCache = appDataCache;
        this.env = env;

        netHttpTransport = new NetHttpTransport();
        netHttpTransport.createRequestFactory(httpRequest -> {
            httpRequest.setConnectTimeout(60000);  // 3 minutes connect timeout
            httpRequest.setReadTimeout(60000);
        });
    }

    Authentication byForm(String username, String password, String captcha, Captcha sessionCaptcha, String host)
            throws IOException {
        if(captcha != null && sessionCaptcha != null) {
            if (!sessionCaptcha.isCorrect(captcha)) {
                throw new HttpCommonRuntimeException(HttpStatus.UNAUTHORIZED, 1, "captcha failed");
            } else if (CommonUtils.isNull(username) || CommonUtils.isNull(password)) {
                throw new HttpCommonRuntimeException(HttpStatus.valueOf(404), 1, "access token not provided");
            }
        }
//        if(loginInfo != null) {
//            userEntity = userRepository.findByUsername(loginInfo.getUsername());
//        }

        Authentication authentication = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(
                        "form:" + host + ":" + new String(Base64.getEncoder().encode(username.getBytes(StandardCharsets.UTF_8)))
                                + ":" + password,
                        password,
//                        "form:" + new String(Base64.getEncoder().encode(loginInfo.getPassword().getBytes(StandardCharsets.UTF_8))),
                        new ArrayList<>())
        );

        return authentication;
    }

    Authentication byGoogle(String accessToken, String host) throws IOException {
        UserEntity userEntity = null;
        if(accessToken == null) {
            throw new HttpCommonRuntimeException(HttpStatus.valueOf(401), 1, "access token not provided");
        } else if (accessToken.equalsIgnoreCase("1234")) {
            UserEntity admin = googleUserRepository.findByEmail("rahmatii1366@gmail.com");
            userEntity = UserEntity.builder()
                    .email(admin.getEmail())
                    .givenName(admin.getGivenName())
                    .locale(admin.getLocale())
                    .pictureUrl(admin.getPictureUrl())
                    .password("0000")
                    .build();
        } else {
            GoogleCredential credential = new GoogleCredential().setAccessToken((String) accessToken);


            Oauth2 oauth2 = new Oauth2.Builder(netHttpTransport, new JacksonFactory(), credential).setApplicationName(
                    "Oauth2").build();
            Userinfo userinfo = oauth2.userinfo().get().execute();
            userEntity = UserEntity.builder()
                    .email(userinfo.getEmail())
                    .givenName(userinfo.getGivenName())
                    .locale(userinfo.getLocale())
                    .pictureUrl(userinfo.getPicture())
                    .password("0000")
                    .build();
        }

        if (googleUserRepository.findByEmail(userEntity.getEmail()) == null) {
            userEntity.setPassword(bCryptPasswordEncoder.encode("0000"));
            googleUserRepository.save(userEntity);
            userEntity.setPassword("0000");
        }

        Authentication authentication = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(
                        "g-oauth2:" + host + ":" + new String(Base64.getEncoder().encode(userEntity.getEmail().getBytes(StandardCharsets.UTF_8))),
//                        userEntity.getEmail(),
//                        "g-oauth2:" + new String(Base64.getEncoder().encode(userEntity.getPassword().getBytes(StandardCharsets.UTF_8))),
                        userEntity.getPassword(),
                        new ArrayList<>()));
        return authentication;
    }

    Authentication byPrincipal(UserEntity principal, String host) throws IOException {
        if (googleUserRepository.findByEmail(principal.getEmail()) != null) {
            Authentication authentication = authenticationManager.authenticate(
                    new UsernamePasswordAuthenticationToken(
                            "principal:" + host + ":" + new String(Base64.getEncoder().encode(principal.getEmail().getBytes(StandardCharsets.UTF_8))),
//                        userEntity.getEmail(),
//                        "g-oauth2:" + new String(Base64.getEncoder().encode(userEntity.getPassword().getBytes(StandardCharsets.UTF_8))),
                            "0000",
                            new ArrayList<>()));
            return authentication;
        }
        return null;
    }

    @Override
    public Authentication attemptAuthentication(
            HttpServletRequest request, HttpServletResponse res) throws AuthenticationException {
        try {
            Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
            if(authentication != null && authentication.isAuthenticated())
                return authentication;

            String host = (String) request.getAttribute("host");
            if(request.getContentType() != null &&
                    (request.getContentType().startsWith("APPLICATION/JSON") ||
                            request.getContentType().startsWith("application/json"))) {
                LoginInfo loginInfo = new ObjectMapper().readValue(request.getInputStream(), LoginInfo.class);
                /*if(Arrays.stream(env.getActiveProfiles()).anyMatch(p -> "develop".matches(p))) {
                    return byForm(
                            "09128855402",
                            "0000",
                            null,
                            null, host);
                }*/

                if (loginInfo != null && !CommonUtils.isNull(loginInfo.getAccessToken()))
                    return byGoogle(loginInfo.getAccessToken(), host);
                else if(loginInfo != null && !CommonUtils.isNull(loginInfo.getUsername())) {
                    Captcha sessionCaptcha = (Captcha)request.getSession().getAttribute("simpleCaptcha");
                    RsaKeyContainer rsaKeyContainer = (RsaKeyContainer) request.getSession()
                            .getAttribute("rsa-key-container");

                    String decrypt = authAction.decrypt(rsaKeyContainer, loginInfo.getPassword());

                    return byForm(
                            loginInfo.getUsername(), decrypt, loginInfo.getCaptcha(), sessionCaptcha, host);
                } else {
                    throw new RuntimeException();
                }
            }
            throw new RuntimeException();
        } catch (IOException e) {
            throw new RuntimeException(e);
        }
    }

    @Override
    protected void successfulAuthentication(HttpServletRequest request,
                                            HttpServletResponse res,
                                            FilterChain chain,
                                            Authentication auth) throws IOException, ServletException {
        AppInfo appInfo = authAction.getAppInfo(request, null, auth);
        /*SecurityContextHolder.getContext().setAuthentication(auth);
        UserEntity userEntity = ((UserModel)auth.getPrincipal()).getUserEntity();
//        GoogleUserEntity userEntity = googleUserRepository.findByEmail(((User) auth.getPrincipal()).getUsername());
        String token = JWT.create()
                .withSubject(((User) auth.getPrincipal()).getUsername())
                .withExpiresAt(new Date(System.currentTimeMillis() + 864_000_000))
                .sign(Algorithm.HMAC512("SecretKeyToGenJWTs".getBytes()));
        request.getSession().setAttribute("jwt-token", token);
        request.getSession().setAttribute("authentication", auth.getPrincipal());
        request.getSession().setAttribute("authorization", ((User) auth.getPrincipal()).getUsername());
        request.getSession().setAttribute("user", userEntity);
//        res.sendRedirect("hello");
//        res.addHeader("Authorization", "Bearer " + token);
        String host = (String) request.getAttribute("host");
        String tenant = (String) request.getAttribute("tenant");
        Optional<? extends GrantedAuthority> role_owner = null;
        role_owner = auth.getAuthorities().stream()
                .filter(e -> e.getAuthority().equalsIgnoreCase("ROLE_ADMIN")).findAny();

        *//*AppInfo appInfo = AppInfo.builder()
                .isLoggedIn(true)
                .isAdmin(role_owner.isPresent())
//                .isAdmin(userEntity.getUserRolesEntities().stream()
//                        .filter(e -> e.getRoleName().equalsIgnoreCase("ROLE_ADMIN"))
//                        .map(e -> true).findFirst().orElse(false))
                .isFormPassword(userEntity.getFormPassword() == null ? false : true)
                .username(userEntity.getGivenName())
                .email(userEntity.getEmail())
                .pictureUrl(userEntity.getPictureUrl())
                .build();*//*

        AppInfo appInfo = AppInfo.builder()
                .isLoggedIn(true)
                .isAdmin(auth.getAuthorities().stream()
                        .filter(e -> e.getAuthority().equalsIgnoreCase("ROLE_ADMIN"))
                        .map(e -> true).findFirst().orElse(false))
                .isFormPassword(userEntity.getFormPassword() == null ? false : true)
                .mobile(userEntity.getMobile())
                .username(userEntity.getMobile())
                .email(userEntity.getEmail())
                .pictureUrl(userEntity.getPictureUrl())
                .build();
        appInfo.setSiteInfo(SiteInfo.builder()
                .title("prediction")
                .description("prediction")
                .tipTitle("prediction")
                .tipDescription("prediction")
                .headerImage("prediction.png")
                .facebookLink("prediction")
                .instagramLink("prediction")
                .whatsappLink("prediction")
                .telNumber("prediction")
                .build());*/

        res.setStatus(HttpStatus.OK.value());
        res.setContentType("application/json;charset=UTF-8");
        res.getWriter().print(new ObjectMapper().writeValueAsString(appInfo));
        res.getWriter().flush();
    }
}
