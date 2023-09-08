package com.studysphere.backend.repository;

import com.studysphere.backend.model.people.Parent;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ParentRepository extends JpaRepository<Parent, Long> {
}
