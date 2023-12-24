package com.gabrieljarufe.yarufzap.user.repository;

import com.gabrieljarufe.yarufzap.user.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;


public interface UserRepository extends JpaRepository<User, Long> {

    @Query("SELECT u FROM User u where u.loginName = :name")
    public User findOneByLoginName(@Param("name") String loginName);

}
