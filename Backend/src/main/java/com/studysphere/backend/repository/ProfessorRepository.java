package com.studysphere.backend.repository;

import com.studysphere.backend.model.people.Professor;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProfessorRepository extends JpaRepository<Professor, Long> {
}
