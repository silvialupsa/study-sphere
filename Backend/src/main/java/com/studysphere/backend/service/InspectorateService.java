package com.studysphere.backend.service;

import com.studysphere.backend.model.SchoolInspectorate;
import com.studysphere.backend.repository.InspectorateRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.*;

@Service
@RequiredArgsConstructor
public class InspectorateService {
    private final InspectorateRepository inspectorateRepository;

    public List<SchoolInspectorate> getAllInspectorates(){
       return inspectorateRepository.findAll();
    }

    public void addInspectorate(SchoolInspectorate inspectorate){
        inspectorateRepository.save(inspectorate);
    }
}
