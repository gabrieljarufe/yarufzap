package com.gabrieljarufe.yarufzap.user.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
public class NewUserDTO {

    private String loginName;

    private String nickName;

    private String email;

    private String status;

    private String password;

}
