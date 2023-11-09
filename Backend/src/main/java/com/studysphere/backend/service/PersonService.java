package com.studysphere.backend.service;

import com.studysphere.backend.model.people.Person;
import com.studysphere.backend.model.types.Role;
import com.studysphere.backend.repository.PersonRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.Arrays;
import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class PersonService {
    private final PersonRepository personRepository;

    public List<Person> getAll(){
        return personRepository.findAll();
    }

    public Optional<Person> findByEmail(String email){ return personRepository.findByEmail(email);};

    public void add(Person person){
            personRepository.save(person);
    }
    public void deleteById(Long id){
        personRepository.deleteById(id);
    }

    public List<Role> getAllAvailableRoles(){
        return Arrays.asList(Role.values());
    }

}