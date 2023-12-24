package com.gabrieljarufe.yarufzap.user.service;

import com.gabrieljarufe.yarufzap.common.dto.ResponseDTO;
import com.gabrieljarufe.yarufzap.user.dto.LoginUserDTO;
import com.gabrieljarufe.yarufzap.user.dto.NewUserDTO;

public interface UserService {

    ResponseDTO createUser(NewUserDTO user);

    ResponseDTO login(LoginUserDTO user);

}
