package com.studysphere.backend.repository;

import com.studysphere.backend.model.people.Student;
import org.springframework.data.jpa.repository.JpaRepository;

public interface StudentRepository extends JpaRepository<Student, Long> {
}
