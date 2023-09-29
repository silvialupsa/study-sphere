package com.studysphere.backend.controller;

import com.studysphere.backend.model.people.Professor;
import com.studysphere.backend.security.auth.*;
import com.studysphere.backend.model.types.Subject;
import com.studysphere.backend.service.ProfessorService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/professors")
@RequiredArgsConstructor
public class ProfessorController {
    private final ProfessorService professorService;
    private final AuthenticationService service;

    @GetMapping("/all")
    @CrossOrigin("*")
    public ResponseEntity<List<Professor>> getAll(){
        return ResponseEntity.ok(professorService.getAllProfessors());
    }

    @PostMapping("/add")
    public void add(@RequestBody Professor professor){
        professorService.addProfessor(professor);
    }

    @GetMapping("/availableSubjects")
    public ResponseEntity<List<Subject>> getAllEnumSubjects() {
        return ResponseEntity.ok(professorService.getAllAvailableSubjects());
    }

    @GetMapping("/{id}")
    public ResponseEntity<Professor> getProfById(@PathVariable Long id){
        return ResponseEntity.ok(professorService.findById(id));
    }

    @PutMapping("/update/{id}")
    @CrossOrigin("*")
    public ResponseEntity<Professor> update(@PathVariable Long id, @RequestBody Professor updatedProfessor){
        return ResponseEntity.ok(professorService.update(id, updatedProfessor));
    }


}

    @PostMapping("/register")
    public ResponseEntity<AuthenticationResponse> register(
            @RequestBody ProfessorRegisterRequest request
    ) {
        return ResponseEntity.ok(service.professorRegister(request));
    }

    @PostMapping("/authenticate")
    public ResponseEntity<AuthenticationResponse> register(
            @RequestBody AuthenticationRequest request
    ) {
        return ResponseEntity.ok(service.authenticate(request));
    }
}
