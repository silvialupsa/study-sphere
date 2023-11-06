package com.studysphere.backend.controller;

import com.studysphere.backend.model.people.Person;
import com.studysphere.backend.security.auth.AuthenticationRequest;
import com.studysphere.backend.security.auth.AuthenticationResponse;
import com.studysphere.backend.security.auth.AuthenticationService;
import com.studysphere.backend.security.auth.PersonRegisterRequest;
import com.studysphere.backend.model.types.Role;
import com.studysphere.backend.service.PersonService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
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


    @GetMapping("/availableRoles")
    public ResponseEntity<List<Role>> getAllEnumRole() {
        return ResponseEntity.ok(personService.getAllAvailableRoles());
    }

    @PostMapping("/token")
    public ResponseEntity<UserDetails> getUser(@RequestBody AuthenticationResponse response){
        return ResponseEntity.ok(service.getUser(response));
    }
}
