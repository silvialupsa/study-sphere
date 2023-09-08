package com.studysphere.backend.service;

import com.studysphere.backend.model.Grade;
import com.studysphere.backend.repository.GradeRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.*;

@Service
@RequiredArgsConstructor
public class GradeService {
    private GradeRepository gradeRepository;

    public List<Grade> getAllGrades(){
        return gradeRepository.findAll();
    }

    public void addGrade(Grade grade){
        gradeRepository.save(grade);
    }
}
