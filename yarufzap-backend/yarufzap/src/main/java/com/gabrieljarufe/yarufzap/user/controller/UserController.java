package com.gabrieljarufe.yarufzap.user.controller;

import com.gabrieljarufe.yarufzap.common.dto.ResponseDTO;
import com.gabrieljarufe.yarufzap.user.dto.LoginUserDTO;
import com.gabrieljarufe.yarufzap.user.dto.NewUserDTO;
import com.gabrieljarufe.yarufzap.user.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("v1/user")
public class UserController {

    @Autowired
    UserService userService;

    @GetMapping("/verify-duplicate-email")
    public ResponseEntity<Boolean> verifyDuplicateEmail(@RequestBody(required = false) String email){
        return ResponseEntity.ok(false);
    }

    @PostMapping("/register")
    public ResponseEntity<ResponseDTO> createUser(@RequestBody(required = false) NewUserDTO user){
        return ResponseEntity.status(HttpStatus.CREATED).body(userService.createUser(user));
    }

    @GetMapping("/log-in")
    public ResponseEntity<ResponseDTO> login(@RequestBody(required = false) LoginUserDTO user){
        return ResponseEntity.status(HttpStatus.OK).body(userService.login(user));
    }

}
