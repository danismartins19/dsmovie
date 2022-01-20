package com.danismartins19.dsmovie.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.danismartins19.dsmovie.entities.Score;
import com.danismartins19.dsmovie.entities.ScorePK;

public interface ScoreRepository extends JpaRepository<Score, ScorePK>{
	 
}
