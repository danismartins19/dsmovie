package com.danismartins19.dsmovie.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.danismartins19.dsmovie.entities.Movie;

public interface MovieRepository extends JpaRepository<Movie, Long>{
	 
}
