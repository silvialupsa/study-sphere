package com.studysphere.backend.service;

import com.studysphere.backend.model.people.Professor;
import com.studysphere.backend.repository.ProfessorRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class ProfessorService {
    private final ProfessorRepository professorRepository;

    public List<Professor> getAllProfessors(){
        return professorRepository.findAll();
    }

    public void addProfessor(Professor professor){
        professorRepository.save(professor);
    }
}
