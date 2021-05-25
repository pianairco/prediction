package ir.piana.business.prediction.module.auth.service;

import ir.piana.business.prediction.common.data.cache.AppDataCache;
import ir.piana.business.prediction.module.auth.data.entity.GoogleUserEntity;
import ir.piana.business.prediction.module.auth.data.repository.GoogleUserRepository;
import ir.piana.business.prediction.module.auth.model.UserModel;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Component;

import java.util.Base64;
import java.util.List;
import java.util.stream.Collectors;

@Component("userDetailsService")
public class UserDetailsServiceImpl implements UserDetailsService {
    @Autowired
    private GoogleUserRepository googleUserRepository;

    @Autowired
    BCryptPasswordEncoder passwordEncoder;

    @Autowired
    private AppDataCache appDataCache;

    @Override
    public UserDetails loadUserByUsername(String encodedUsername) throws UsernameNotFoundException {
        String mobile = null;
        boolean isForm = false;
        String[] split = null;
        if(encodedUsername.contains(":")) {
            split = encodedUsername.split(":");
            mobile = new String(Base64.getDecoder().decode(split[split.length - 1]));
            if(split[0].equalsIgnoreCase("form")) {
                isForm = true;
            } else {
//                ToDo
            }
        }

        GoogleUserEntity googleUserEntity = googleUserRepository.findByMobile(mobile);
        if (googleUserEntity == null) {
            throw new UsernameNotFoundException(encodedUsername);
        }
        List<GrantedAuthority> authorities = googleUserEntity.getUserRolesEntities().stream()
                .map(e -> new SimpleGrantedAuthority(e.getRoleName())).collect(Collectors.toList());

        authorities.add(new SimpleGrantedAuthority("ROLE_SITE_OWNER"));
        authorities.add(new SimpleGrantedAuthority("ROLE_AUTHENTICATED"));
        return new UserModel(googleUserEntity.getEmail(),
                isForm ? googleUserEntity.getFormPassword() : googleUserEntity.getPassword(),
                authorities, googleUserEntity);
    }
}
