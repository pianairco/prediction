package ir.piana.business.prediction.module.auth.action;

import ir.piana.business.prediction.common.dev.sqlrest.AjaxController;
import ir.piana.business.prediction.common.util.CryptographyUtil;
import ir.piana.business.prediction.common.util.PKCS1ToSubjectPublicKeyInfo;
import ir.piana.business.prediction.module.auth.data.entity.UserEntity;
import ir.piana.business.prediction.module.auth.model.AppInfo;
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
    private Map<String, KeyPair> keyPairList = new LinkedHashMap<>();

    @PostConstruct
    public void init() throws NoSuchPaddingException, NoSuchAlgorithmException {
        cipher = Cipher.getInstance("RSA/ECB/PKCS1PADDING"); //or try with "RSA"

        try {
            for(int i = 0; i < keyPairLength; i++) {
                KeyPair keyPair = cryptographyUtil.generateKeyPair();
                keyPairList.put(String.valueOf(i), keyPair);
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

    public AppInfo getAppInfo(HttpServletRequest request, Map<String, Object> body) {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        // ToDo => appInfo setter
        String host = (String) request.getAttribute("host");
        String tenant = (String) request.getAttribute("tenant");

        String encryptedPublicKey = null;
        KeyPair keyPair = null;
        if(body != null && body.containsKey("public-key")) {
            try {
                if(request.getSession().getAttribute("key-pair") == null) {
                    keyPair = keyPairList.get(String.valueOf(System.currentTimeMillis() % keyPairLength));
                    request.getSession().setAttribute("key-pair", keyPair);
                } else {
                    keyPair = (KeyPair) request.getSession().getAttribute("key-pair");
                }

                String rawPublicKey = (String) body.get("public-key");
                RSAPublicKey rsaPublicKey = createPublicKey(rawPublicKey);
                request.getSession().setAttribute("public-key", rsaPublicKey);
                /*String publicKeyString = rawPublicKey.replace("-----END RSA PUBLIC KEY-----", "")
                        .replace("-----BEGIN RSA PUBLIC KEY-----", "")
                        .replaceAll("\n", "").replaceAll("\r", "").trim();
                BASE64Decoder b64 = new BASE64Decoder();
                RSAPublicKey rsaPublicKey = PKCS1ToSubjectPublicKeyInfo.decodePKCS1PublicKey(b64.decodeBuffer(publicKeyString));*/

                cipher.init(Cipher.ENCRYPT_MODE, rsaPublicKey);
                byte[] encoded = keyPair.getPublic().getEncoded();
//                byte[] bytes1 = Arrays.copyOfRange(encoded, 0, 200);
//                byte[] bytes2 = Arrays.copyOfRange(encoded, 200, encoded.length - 200);
//                byte[] encryptedBytes1 = cipher.doFinal(bytes1);
                byte[] encryptedBytes = cipher.doFinal(encoded);
//                byte[] encryptedBytes2 = cipher.doFinal(bytes2);
                encryptedPublicKey = Base64.encodeBase64String(encryptedBytes);
//                encryptedPublicKey = Base64.encodeBase64String(encryptedBytes1) + ":" + Base64.encodeBase64String(encryptedBytes2);
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
                    .publicKey(encryptedPublicKey)
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
                    .publicKey(encryptedPublicKey)
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
