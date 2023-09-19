package com.studysphere.backend.repository;

import com.studysphere.backend.model.School;
import com.studysphere.backend.model.SchoolInspectorate;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.*;

public interface SchoolRepository extends JpaRepository<School, Long> {
    List<School> findSchoolsBySchoolInspectorate(SchoolInspectorate inspectorate);
}
