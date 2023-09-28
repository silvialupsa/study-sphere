package com.studysphere.backend.controller;

import com.studysphere.backend.model.people.Person;
import com.studysphere.backend.model.types.Role;
import com.studysphere.backend.service.PersonService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/people")
@RequiredArgsConstructor
public class PersonController {
    private final PersonService personService;

    @GetMapping("/all")
    @CrossOrigin("*")
        public ResponseEntity<List<Person>> getAll(){
        return ResponseEntity.ok(personService.getAll());
    }

    @PostMapping("/add")
    public void add(@RequestBody Person person){
        personService.add(person);
    }


    @GetMapping("/availableRoles")
    public ResponseEntity<List<Role>> getAllEnumRole() {
        return ResponseEntity.ok(personService.getAllAvailableRoles());
    }
}
