package com.studysphere.backend.controller;

import com.studysphere.backend.model.people.Person;
import com.studysphere.backend.security.auth.AuthenticationRequest;
import com.studysphere.backend.security.auth.AuthenticationResponse;
import com.studysphere.backend.security.auth.AuthenticationService;
import com.studysphere.backend.security.auth.PersonRegisterRequest;
import com.studysphere.backend.model.types.Role;
import com.studysphere.backend.service.PersonService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@CrossOrigin("*")
@RestController
@RequestMapping("/people")
@RequiredArgsConstructor
public class PersonController {
    private final PersonService personService;
    private final AuthenticationService service;

    @GetMapping("/all")
        public ResponseEntity<List<Person>> getAll(){
        return ResponseEntity.ok(personService.getAll());
    }

    @PostMapping("/register")
    public ResponseEntity<AuthenticationResponse> register(
            @RequestBody PersonRegisterRequest request
    ) {
        Optional<Person> existingPerson = personService.findByEmail(request.getEmail());
        if (existingPerson.isPresent()){
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(new AuthenticationResponse("Email already in use"));
        }
        return ResponseEntity.ok(service.personRegister(request));
    }

    @PostMapping("/authenticate")
    public ResponseEntity<AuthenticationResponse> register(
            @RequestBody AuthenticationRequest request
    ) {
        return ResponseEntity.ok(service.authenticate(request));
    }
//   @GetMapping("/{id}")
//    public ResponseEntity<Professor> getProfById(@PathVariable Long id){
//        return ResponseEntity.ok(professorService.findById(id));
//    }
    @GetMapping("/{id}")
    public ResponseEntity<Optional<Person>> getByID(@PathVariable Long id){
        return ResponseEntity.ok(personService.findById(id));
    }

    @GetMapping("/availableRoles")
    public ResponseEntity<List<Role>> getAllEnumRole() {
        return ResponseEntity.ok(personService.getAllAvailableRoles());
    }

    @GetMapping("/getUserWithToken")
    public ResponseEntity<UserDetails> getUser(@RequestHeader("Authorization") String authHeader){
        System.out.println("getUserWithToken");
        return ResponseEntity.ok(service.getUser(authHeader));
    }
}
