package ir.piana.business.prediction.module.auth.service;

import ir.piana.business.prediction.module.auth.data.entity.UserEntity;
import ir.piana.business.prediction.module.auth.model.LoginInfo;
import ir.piana.business.prediction.module.auth.model.SubDomainInfo;

import javax.servlet.http.HttpServletRequest;

public interface CrossDomainAuthenticationService {
    String createInstance(HttpServletRequest request);
    SubDomainInfo getSubDomainInfo(String uuid);
    boolean addAccessToken(String uuid, String accessToken);
    boolean addLoginInfo(String uuid, LoginInfo loginInfo, Object captcha);
    boolean addPrincipal(String uuid, UserEntity googleUserEntity);
    SubDomainInfo removeSubDomainInfoString(String uuid);
}
