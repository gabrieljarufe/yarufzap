package com.gabrieljarufe.yarufzap.user;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "TB_USER")
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "login_name", length = 50, nullable = false)
    private String loginName;

    @Column(name = "nickname", length = 50, nullable = false)
    private String nickname;

    @Column(name = "email", length = 75, nullable = false)
    private String email;

    @Column(name = "user_status", length = 300, nullable = true, columnDefinition = "VARCHAR(300) DEFAULT 'hey there! I\\'m using yaruzap'")
    private String userStatus;

    @Column(name = "tag", length = 3, nullable = true, columnDefinition = "VARCHAR(3) DEFAULT 'BR1'")
    private String tag;

    @Column(name = "user_password", length = 100, nullable = false)
    private String userPassword;

    public User(String loginName, String nickname, String email, String userStatus, String userPassword) {
        this.loginName = loginName;
        this.nickname = nickname;
        this.email = email;
        this.userStatus = userStatus;
        this.userPassword = userPassword;
    }
}


