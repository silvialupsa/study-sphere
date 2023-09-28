package com.studysphere.backend.service;

import com.studysphere.backend.model.School;
import com.studysphere.backend.model.people.Person;
import com.studysphere.backend.model.people.Professor;
import com.studysphere.backend.repository.PersonRepository;
import com.studysphere.backend.repository.ProfessorRepository;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class ProfessorService {
    private final ProfessorRepository professorRepository;
    private final PersonRepository personRepository;

    public List<Professor> getAllProfessors(){
        return professorRepository.findAll();
    }

    @Transactional
    public void addProfessor(Professor professor){
        Person person= professor.getPerson();
        personRepository.save(person);
        professorRepository.save(professor);
    }
}
