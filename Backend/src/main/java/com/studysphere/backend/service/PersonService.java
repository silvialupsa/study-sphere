package com.studysphere.backend.service;

import com.studysphere.backend.exceptions.EmailAlreadyExistsException;
import com.studysphere.backend.model.people.Person;
import com.studysphere.backend.model.types.Role;
import com.studysphere.backend.repository.PersonRepository;
import com.studysphere.backend.security.auth.AuthenticationResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.userdetails.User;
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
    public void add(Person person){
        Optional<Person> existingPerson = personRepository.findByEmail(person.getEmail());
        if (existingPerson.isPresent()) {
            throw new EmailAlreadyExistsException("Email already exists: " + person.getEmail());
        }
        personRepository.save(person);
    }
    //todo first check if person with email exists and throw "email already exists
    public void deleteById(Long id){
        personRepository.deleteById(id);
    }

    public List<Role> getAllAvailableRoles(){
        return Arrays.asList(Role.values());
    }

}