package ir.piana.business.prediction.module.auth.rest;

import com.google.common.cache.CacheBuilder;
import com.google.common.cache.CacheLoader;
import com.google.common.cache.LoadingCache;
import com.kavenegar.sdk.KavenegarApi;
import ir.piana.business.prediction.common.model.ResponseModel;
import nl.captcha.Captcha;
import org.apache.commons.lang3.RandomStringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

import javax.annotation.PostConstruct;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;
import java.nio.charset.StandardCharsets;
import java.util.ArrayList;
import java.util.Base64;
import java.util.Map;
import java.util.concurrent.TimeUnit;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

@RestController
@RequestMapping("/api/modules/auth")
public class SigninRest {
    private LoadingCache<String, ResponseModel> cache;

    @Autowired
    private ResponseModel authenticationManagerContainer;
    private Pattern mobileMatcher;

//    @Autowired
//    TrippleDesUtility trippleDesUtility;

    private KavenegarApi api;

    @PostConstruct
    public void init() {
//        api = new KavenegarApi(trippleDesUtility.decrypt("mly8YjJXfOxicDi+lvk1vAX+fRx5zEnw1CibOCpSpetpmG9KR2KTRirMQUYKH7aEz1KsYLFvbBE="));

        CacheLoader<String, ResponseModel> loader;
        loader = new CacheLoader<String, ResponseModel>() {
            @Override
            public ResponseModel load(String key) {
                return ResponseModel.builder().code(0).data(RandomStringUtils.randomNumeric(4)).build();
            }
        };

        cache = CacheBuilder.newBuilder()
                .maximumSize(1000)
                .expireAfterWrite(2, TimeUnit.MINUTES)
                .build(loader);
        mobileMatcher = Pattern.compile("09[0-4]{1}[0-9]{8}");
    }

    @CrossOrigin
    @PostMapping(path = "activation-code",
            consumes = MediaType.APPLICATION_JSON_VALUE,
            produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<ResponseModel> getActivationCode(
            HttpServletRequest request,
            @RequestBody Map<String, String> body,
            HttpSession session) {

        String mobile = body.get("mobile");
        Matcher matcher = mobileMatcher.matcher(mobile);
        if(!matcher.find()) {
            return ResponseEntity.ok(ResponseModel.builder().code(1).build());
        }
        ResponseModel activatedCode = cache.getUnchecked(mobile);
        if(activatedCode.getCode() != 0) {
            return ResponseEntity.ok(ResponseModel.builder().code(2).build());
        } else {
            activatedCode.setCode(1);
        }

//        SendResult send = api.send("1000596446", mobile, String.format("یکبار رمز\n%s", activatedCode.getData()));
        return ResponseEntity.ok(ResponseModel.builder().code(0).build());
    }



    @CrossOrigin
    @PostMapping(path = "signin",
            consumes = MediaType.APPLICATION_JSON_VALUE,
            produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<ResponseModel> signIn(
            HttpServletRequest request,
            @RequestBody Map<String, String> body,
            HttpSession session) {
        String mobile = body.get("mobile");
        Matcher matcher = mobileMatcher.matcher(mobile);
        if(!matcher.find()) {
            return ResponseEntity.ok(ResponseModel.builder().code(1).build());
        }
        ResponseModel<String> storedActivationCode = cache.getUnchecked(mobile);
        if(storedActivationCode.getCode() == 0) {
            cache.invalidate(mobile);
            return ResponseEntity.ok(ResponseModel.builder().code(2).build());
        }
        String password = body.get("password");
        String passwordRepeat = body.get("passwordRepeat");
        String activationCode = body.get("activationCode");
        String captcha = body.get("captcha");
        Captcha sessionCaptcha = (Captcha)request.getSession().getAttribute("simpleCaptcha");

        if (captcha == null || captcha.isEmpty()) {
            return ResponseEntity.ok(ResponseModel.builder().code(3).build());
        } else if (captcha != null && sessionCaptcha != null && !sessionCaptcha.isCorrect(captcha)) {
            return ResponseEntity.ok(ResponseModel.builder().code(4).build());
        } else if (!storedActivationCode.getData().equalsIgnoreCase(activationCode)) {
            return ResponseEntity.ok(ResponseModel.builder().code(5).build());
        } else if (!password.equalsIgnoreCase(passwordRepeat)) {
            return ResponseEntity.ok(ResponseModel.builder().code(6).build());
        } else if (storedActivationCode != null && storedActivationCode.getData().equalsIgnoreCase(activationCode)) {
            cache.invalidate(mobile);
            AuthenticationManager authenticationManager = (AuthenticationManager) authenticationManagerContainer.getData();

            Authentication authentication = authenticationManager.authenticate(
                    new UsernamePasswordAuthenticationToken(
                            "form:" + "piana.ir" + ":" +
                                    new String(Base64.getEncoder().encode(mobile.getBytes(StandardCharsets.UTF_8)))
                                    + ":" + password,
                            password,
//                        "form:" + new String(Base64.getEncoder().encode(loginInfo.getPassword().getBytes(StandardCharsets.UTF_8))),
                            new ArrayList<>())
            );
            return ResponseEntity.ok(ResponseModel.builder().code(0).data(activationCode).build());
        } else {
            return ResponseEntity.ok(ResponseModel.builder().code(7).build());
        }
    }
}
