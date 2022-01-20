package com.danismartins19.dsmovie.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.danismartins19.dsmovie.entities.User;

public interface UserRepository extends JpaRepository<User, Long>{
	 User findByEmail(String email);
}
