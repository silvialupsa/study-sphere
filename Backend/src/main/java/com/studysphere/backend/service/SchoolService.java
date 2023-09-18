package com.studysphere.backend.service;

import com.studysphere.backend.model.School;
import com.studysphere.backend.model.SchoolInspectorate;
import com.studysphere.backend.repository.InspectorateRepository;
import com.studysphere.backend.repository.SchoolRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.*;

@Service
@RequiredArgsConstructor
public class SchoolService {
    private final SchoolRepository schoolRepository;
    public List<School> getAllSchools(){
        return schoolRepository.findAll();
    }

    public List<School> addAllSchools(List<School> schools){
        return schoolRepository.saveAll(schools);
    }
    public void addSchool(School school){
        schoolRepository.save(school);
    }
}
