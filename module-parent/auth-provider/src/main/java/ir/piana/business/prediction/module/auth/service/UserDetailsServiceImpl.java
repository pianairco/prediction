package ir.piana.business.prediction.module.auth.service;

import ir.piana.business.prediction.module.auth.data.entity.UserEntity;
import ir.piana.business.prediction.module.auth.data.entity.UserRolesEntity;
import ir.piana.business.prediction.module.auth.data.repository.UserRepository;
import ir.piana.business.prediction.module.auth.data.repository.UserRolesRepository;
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
    private UserRepository userRepository;

    @Autowired
    private UserRolesRepository userRolesRepository;

    @Autowired
    BCryptPasswordEncoder passwordEncoder;

    @Override
    public UserDetails loadUserByUsername(String encodedUsername) throws UsernameNotFoundException {
        String mobile = null;
        boolean isForm = false;
        String[] split = null;
        if(encodedUsername.contains(":")) {
            split = encodedUsername.split(":");
            mobile = new String(Base64.getDecoder().decode(split[split.length - 2]));
            if(split[0].equalsIgnoreCase("form")) {
                isForm = true;
            } else {
//                ToDo
            }
        }

        UserEntity byMobile = userRepository.findByMobile(mobile);
        if (byMobile == null) {
            byMobile = UserEntity.builder()
                    .username(mobile)
                    .mobile(mobile)
                    .password(passwordEncoder.encode(split[split.length - 1]))
                    .formPassword(passwordEncoder.encode(split[split.length - 1])).build();
            userRepository.save(byMobile);
            userRolesRepository.save(UserRolesEntity.builder()
                    .userId(byMobile.getId())
                    .roleName("ROLE_USER")
                    .build());
            byMobile = userRepository.findByMobile(byMobile.getMobile());
        }
        List<GrantedAuthority> authorities = byMobile.getUserRolesEntities().stream()
                .map(e -> new SimpleGrantedAuthority(e.getRoleName())).collect(Collectors.toList());

//        authorities.add(new SimpleGrantedAuthority("ROLE_SITE_OWNER"));
        authorities.add(new SimpleGrantedAuthority("ROLE_AUTHENTICATED"));
        return new UserModel(byMobile.getMobile(),
                isForm ? byMobile.getFormPassword() : byMobile.getPassword(),
                authorities, byMobile);
    }
}
