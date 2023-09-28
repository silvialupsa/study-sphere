package com.studysphere.backend.controller;

import com.studysphere.backend.model.people.Person;
import com.studysphere.backend.security.auth.AuthenticationRequest;
import com.studysphere.backend.security.auth.AuthenticationResponse;
import com.studysphere.backend.security.auth.AuthenticationService;
import com.studysphere.backend.security.auth.PersonRegisterRequest;
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
    private final AuthenticationService service;

    @GetMapping("/all")
    @CrossOrigin("*")
        public ResponseEntity<List<Person>> getAll(){
        return ResponseEntity.ok(personService.getAll());
    }

    @PostMapping("/register")
    public ResponseEntity<AuthenticationResponse> register(
            @RequestBody PersonRegisterRequest request
    ) {
        return ResponseEntity.ok(service.personRegister(request));
    }

    @PostMapping("/authenticate")
    public ResponseEntity<AuthenticationResponse> register(
            @RequestBody AuthenticationRequest request
    ) {
        return ResponseEntity.ok(service.authenticate(request));
    }
}
