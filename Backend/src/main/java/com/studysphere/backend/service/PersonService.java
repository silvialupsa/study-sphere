package com.studysphere.backend.service;

import com.studysphere.backend.model.people.Person;
import com.studysphere.backend.repository.PersonRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class PersonService {
    private final PersonRepository personRepository;

    public List<Person> getAll(){
        return personRepository.findAll();
    }
    public void add(Person person){
        personRepository.save(person);
    }

    public void deleteById(Long id){
        personRepository.deleteById(id);
    }
}