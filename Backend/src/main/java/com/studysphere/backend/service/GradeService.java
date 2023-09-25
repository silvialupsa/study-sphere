package com.studysphere.backend.service;

import com.studysphere.backend.model.Grade;
import com.studysphere.backend.model.SchoolInspectorate;
import com.studysphere.backend.repository.GradeRepository;
import com.studysphere.backend.repository.InspectorateRepository;
import com.studysphere.backend.repository.SchoolRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.*;

@Service
@RequiredArgsConstructor
public class GradeService {
    private final GradeRepository gradeRepository;
    private final SchoolRepository schoolRepository;

    public List<Grade> getAllGrades(){
        return gradeRepository.findAll();
    }

    public List<Grade> findGradesBySchoolId(Long schoolId){
        return Objects.requireNonNull(schoolRepository.findById(schoolId).orElse(null)).getGradeList();
    }

    public void addGrade(Grade grade){
        gradeRepository.save(grade);
    }
}
