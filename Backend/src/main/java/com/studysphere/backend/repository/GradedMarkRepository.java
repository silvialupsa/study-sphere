package com.studysphere.backend.repository;

import com.studysphere.backend.model.Attendance;
import com.studysphere.backend.model.Grade;
import com.studysphere.backend.model.GradedMark;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface GradedMarkRepository  extends JpaRepository<GradedMark, Long> {
    List<GradedMark> findGradedMarkByStudentId(Long id);
}
