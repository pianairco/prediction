package ir.piana.business.prediction.module.auth.model;

import ir.piana.business.prediction.module.auth.data.entity.UserEntity;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class SubDomainInfo {
    private String tenant;
    private String accessToken;
    private String loginType;
    private LoginInfo loginInfo;
    private UserEntity principal;
    private Object sessionCaptcha;
}
