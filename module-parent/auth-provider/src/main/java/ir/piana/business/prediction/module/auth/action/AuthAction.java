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

import javax.crypto.Cipher;
import javax.servlet.http.HttpServletRequest;
import java.security.interfaces.RSAPublicKey;
import java.util.Map;
import java.util.function.BiFunction;

@Service("auth")
public class AuthAction extends AjaxController.Action {
    @Autowired
    private CryptographyUtil cryptographyUtil;

    public BiFunction<HttpServletRequest, Map<String, Object>, ResponseEntity> appInfo = (request, body) -> {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        // ToDo => appInfo setter
        String host = (String) request.getAttribute("host");
        String tenant = (String) request.getAttribute("tenant");

        String encrypted = null;
        try {
            String rowPublicKey = (String) body.get("public-key");
            String publicKeyString = rowPublicKey.replace("-----END RSA PUBLIC KEY-----", "")
                    .replace("-----BEGIN RSA PUBLIC KEY-----", "")
                    .replaceAll("\n", "").replaceAll("\r", "").trim();
            BASE64Decoder b64 = new BASE64Decoder();
            RSAPublicKey rsaPublicKey = PKCS1ToSubjectPublicKeyInfo.decodePKCS1PublicKey(b64.decodeBuffer(publicKeyString));
            Cipher cipher = Cipher.getInstance("RSA/ECB/PKCS1PADDING"); //or try with "RSA"
            cipher.init(Cipher.ENCRYPT_MODE, rsaPublicKey);
            byte[] encryptedBytes = cipher.doFinal("hi this is Visruth here".getBytes());
            encrypted = Base64.encodeBase64String(encryptedBytes);
        } catch (Exception e) {
            e.printStackTrace();
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
                    .build();
                appInfo.setSiteInfo(SiteInfo.builder()
                        .title(encrypted)
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
                    .build();
            appInfo.setSiteInfo(SiteInfo.builder()
                    .title(encrypted)
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
