package ir.piana.business.prediction.module.auth.action;

import ir.piana.business.prediction.common.dev.sqlrest.AjaxController;
import ir.piana.business.prediction.common.util.CryptographyUtil;
import ir.piana.business.prediction.common.util.PKCS1ToSubjectPublicKeyInfo;
import ir.piana.business.prediction.module.auth.data.entity.UserEntity;
import ir.piana.business.prediction.module.auth.model.AppInfo;
import ir.piana.business.prediction.module.auth.model.RsaKeyContainer;
import ir.piana.business.prediction.module.auth.model.SiteInfo;
import ir.piana.business.prediction.module.auth.model.UserModel;
import org.apache.tomcat.util.codec.binary.Base64;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;
import sun.misc.BASE64Decoder;

import javax.annotation.PostConstruct;
import javax.crypto.Cipher;
import javax.crypto.NoSuchPaddingException;
import javax.servlet.http.HttpServletRequest;
import java.io.IOException;
import java.nio.charset.StandardCharsets;
import java.security.KeyPair;
import java.security.NoSuchAlgorithmException;
import java.security.NoSuchProviderException;
import java.security.interfaces.RSAPublicKey;
import java.security.spec.InvalidKeySpecException;
import java.util.*;
import java.util.function.BiFunction;

@Service("auth")
public class AuthAction extends AjaxController.Action {
    @Autowired
    private CryptographyUtil cryptographyUtil;

    private Cipher cipher;
    private int keyPairLength = 2;
    private Map<String, RsaKeyContainer> keyContainerMap = new LinkedHashMap<>();

    @PostConstruct
    public void init() throws NoSuchPaddingException, NoSuchAlgorithmException {
        cipher = Cipher.getInstance("RSA/ECB/PKCS1PADDING"); //or try with "RSA"

        try {
            for(int i = 0; i < keyPairLength; i++) {
                KeyPair keyPair = cryptographyUtil.generateKeyPair();
                RsaKeyContainer rsaKeyContainer = RsaKeyContainer.builder()
                        .keyPair(keyPair)
                        .base64PrivateKey(Base64.encodeBase64String(keyPair.getPrivate().getEncoded()))
                        .base64PublicKey(Base64.encodeBase64String(keyPair.getPublic().getEncoded()))
                        .build();
                keyContainerMap.put(String.valueOf(i), rsaKeyContainer);
            }
        } catch (NoSuchProviderException e) {
            e.printStackTrace();
        }
    }

    private RSAPublicKey createPublicKey(String pkcs1PublicKey) {
        String publicKeyString = pkcs1PublicKey.replace("-----END RSA PUBLIC KEY-----", "")
                .replace("-----BEGIN RSA PUBLIC KEY-----", "")
                .replaceAll("\n", "").replaceAll("\r", "").trim();
        BASE64Decoder b64 = new BASE64Decoder();
        RSAPublicKey rsaPublicKey = null;
        try {
            rsaPublicKey = PKCS1ToSubjectPublicKeyInfo.decodePKCS1PublicKey(b64.decodeBuffer(publicKeyString));
        } catch (NoSuchAlgorithmException e) {
            e.printStackTrace();
        } catch (InvalidKeySpecException e) {
            e.printStackTrace();
        } catch (IOException e) {
            e.printStackTrace();
        }
        return rsaPublicKey;
    }

    public String decrypt(RsaKeyContainer rsaKeyContainer, String encrypted) {
        try {
            byte[] decrypt = cryptographyUtil.decrypt(rsaKeyContainer.getKeyPair().getPrivate().getEncoded(), encrypted.getBytes());
            return new String(decrypt);
        } catch (Exception e) {
            e.printStackTrace();
        }
        return "";
    }

    public AppInfo getAppInfo(HttpServletRequest request, Map<String, Object> body) {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        // ToDo => appInfo setter
        String host = (String) request.getAttribute("host");
        String tenant = (String) request.getAttribute("tenant");

        RsaKeyContainer rsaKeyContainer = null;
        if(body != null && body.containsKey("public-key")) {
            try {
                if(request.getSession().getAttribute("key-pair") == null) {
                    rsaKeyContainer = keyContainerMap.get(String.valueOf(System.currentTimeMillis() % keyPairLength));
                    request.getSession().setAttribute("rsa-key-container", rsaKeyContainer);
                } else {
                    rsaKeyContainer = (RsaKeyContainer) request.getSession().getAttribute("rsa-key-container");
                }

                String rawPublicKey = (String) body.get("public-key");
                RSAPublicKey rsaPublicKey = createPublicKey(rawPublicKey);
                request.getSession().setAttribute("public-key", rsaPublicKey);
                cipher.init(Cipher.ENCRYPT_MODE, rsaPublicKey);
            } catch (Exception e) {
                e.printStackTrace();
            }
        }
        AppInfo appInfo = null;

        if(authentication.getPrincipal() instanceof UserModel) {
            UserEntity userEntity = ((UserModel) authentication.getPrincipal()).getUserEntity();
            appInfo = AppInfo.builder()
                    .isLoggedIn(true)
                    .isAdmin(authentication.getAuthorities().stream()
                            .filter(e -> e.getAuthority().equalsIgnoreCase("ROLE_ADMIN"))
                            .map(e -> true).findFirst().orElse(false))
//                    .isAdmin(userEntity.getUserRolesEntities().stream()
//                            .filter(e -> e.getRoleName().equalsIgnoreCase("ROLE_SITE_OWNER"))
//                            .map(e -> true).findFirst().orElse(false))
                    .isFormPassword(userEntity.getFormPassword() == null ? false : true)
                    .mobile(userEntity.getMobile())
                    .username(userEntity.getMobile())
                    .email(userEntity.getEmail())
                    .pictureUrl(userEntity.getPictureUrl())
                    .publicKey(rsaKeyContainer.getBase64PublicKey())
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
                    .build());
        } else {
            appInfo = AppInfo.builder()
                    .isLoggedIn(false)
                    .isAdmin(false)
                    .username(authentication.getName())
                    .publicKey(rsaKeyContainer.getBase64PublicKey())
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
                    .build());
        }

        return appInfo;
    }

    public BiFunction<HttpServletRequest, Map<String, Object>, ResponseEntity> appInfo = (request, body) -> {
        AppInfo appInfo = getAppInfo(request, body);
        return ResponseEntity.ok(appInfo);
//        try {
//            JsonNode jsonNode = mapper.readTree(request.getInputStream());
//            int size = jsonNode.size();
//        } catch (IOException e) {
//            e.printStackTrace();
//        }
//        HttpHeaders responseHeaders = new HttpHeaders();
//        return new ResponseEntity("Failed!", responseHeaders, HttpStatus.valueOf(200));
    };
}

