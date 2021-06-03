package ir.piana.business.prediction.module.auth.action;

import ir.piana.business.prediction.common.dev.sqlrest.AjaxController;
import ir.piana.business.prediction.module.auth.data.entity.UserEntity;
import ir.piana.business.prediction.module.auth.model.AppInfo;
import ir.piana.business.prediction.module.auth.model.SiteInfo;
import ir.piana.business.prediction.module.auth.model.UserModel;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

import javax.servlet.http.HttpServletRequest;
import java.util.Map;
import java.util.function.BiFunction;

@Service("auth")
public class AuthAction extends AjaxController.Action {
    public BiFunction<HttpServletRequest, Map<String, Object>, ResponseEntity> appInfo = (request, body) -> {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        // ToDo => appInfo setter
        String host = (String) request.getAttribute("host");
        String tenant = (String) request.getAttribute("tenant");

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
