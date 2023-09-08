package com.studysphere.backend.service;

import com.studysphere.backend.model.people.Parent;
import com.studysphere.backend.repository.ParentRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class ParentService {
    private final ParentRepository parentRepository;

        public List<Parent> getAll(){
        return parentRepository.findAll();
    }
    public void add(Parent parent){
        parentRepository.save(parent);
    }
}
