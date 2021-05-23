package ir.piana.business.multishop.module.auth.service;

import ir.piana.business.multishop.module.auth.data.entity.GoogleUserEntity;
import ir.piana.business.multishop.module.auth.model.LoginInfo;
import ir.piana.business.multishop.module.auth.model.SubDomainInfo;

import javax.servlet.http.HttpServletRequest;

public interface CrossDomainAuthenticationService {
    String createInstance(HttpServletRequest request);
    SubDomainInfo getSubDomainInfo(String uuid);
    boolean addAccessToken(String uuid, String accessToken);
    boolean addLoginInfo(String uuid, LoginInfo loginInfo, Object captcha);
    boolean addPrincipal(String uuid, GoogleUserEntity googleUserEntity);
    SubDomainInfo removeSubDomainInfoString(String uuid);
}
