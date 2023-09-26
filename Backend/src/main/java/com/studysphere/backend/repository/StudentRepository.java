package com.studysphere.backend.repository;

import com.studysphere.backend.model.people.Student;
import org.springframework.data.domain.Example;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.FluentQuery;

import java.util.function.Function;

public interface StudentRepository extends JpaRepository<Student, Long> {
}
