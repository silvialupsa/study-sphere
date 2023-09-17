package com.studysphere.backend.repository;

import com.studysphere.backend.model.SchoolInspectorate;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface InspectorateRepository extends JpaRepository <SchoolInspectorate, Long> {

}
