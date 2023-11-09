package com.studysphere.backend.service;

import com.studysphere.backend.model.people.Person;
import com.studysphere.backend.model.people.Professor;
import com.studysphere.backend.model.types.Role;
import com.studysphere.backend.repository.PersonRepository;
import com.studysphere.backend.repository.ProfessorRepository;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.parameters.P;
import org.springframework.stereotype.Service;
import com.studysphere.backend.model.types.Subject;

import java.util.Arrays;
import java.util.List;
import java.util.Optional;

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
    public Optional<Person> findByEmail(String email){ return personRepository.findByEmail(email);};

    public List<Subject> getAllAvailableSubjects() {
        return Arrays.asList(Subject.values());
    }

    public Professor findById(Long id){
        return professorRepository.findById(id).orElse(null);
    }

    @Transactional
    public Professor update(Long id, Professor updatedProfessor) {
        Optional<Professor> optionalProfessor = professorRepository.findById(id);
        if (optionalProfessor.isPresent()) {
            Professor professor = optionalProfessor.get();
            professor.setPerson(updatedProfessor.getPerson());
            professor.setSubjectList(updatedProfessor.getSubjectList());
            return professorRepository.save(professor);
        }
        return null;
    }





}
