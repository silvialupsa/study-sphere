package com.studysphere.backend.repository;

import com.studysphere.backend.model.SchoolInspectorate;
import com.studysphere.backend.model.people.Person;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PersonRepository  extends JpaRepository<Person, Long> {
}
