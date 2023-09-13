package com.studysphere.backend.repository;

import com.studysphere.backend.model.School;
import org.springframework.data.jpa.repository.JpaRepository;

public interface SchoolRepository extends JpaRepository<School, Long> {
}