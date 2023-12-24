package com.gabrieljarufe.yarufzap.user.service.impl;

import com.gabrieljarufe.yarufzap.common.dto.ResponseDTO;
import com.gabrieljarufe.yarufzap.user.User;
import com.gabrieljarufe.yarufzap.user.dto.LoginUserDTO;
import com.gabrieljarufe.yarufzap.user.dto.NewUserDTO;
import com.gabrieljarufe.yarufzap.user.repository.UserRepository;
import com.gabrieljarufe.yarufzap.user.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class UserServiceImpl implements UserService {

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Autowired
    private UserRepository userRepository;

    @Override
    public ResponseDTO createUser(NewUserDTO user) {
        String password = passwordEncoder.encode(user.getPassword());
        User newUser = new User(user.getLoginName(), user.getNickName(), user.getEmail(),user.getStatus(),password);
        userRepository.save(newUser);
        return ResponseDTO.builder()
                .code(201)
                .message("created with success")
                .build();
    }

    @Override
    public ResponseDTO login(LoginUserDTO user) {
        User userStored = userRepository.findOneByLoginName(user.getLoginName());
        Boolean isPasswordCorred = passwordEncoder.matches(user.getPassword(),userStored.getUserPassword());
        if(Boolean.TRUE.equals(isPasswordCorred)){
            return ResponseDTO.builder()
                    .code(200)
                    .message("logged with success")
                    .build();
        }
        return null;
    }
}
