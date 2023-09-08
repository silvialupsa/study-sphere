package com.studysphere.backend.controller;

import com.studysphere.backend.model.people.Professor;
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

    @GetMapping("/all")
    @CrossOrigin("*")
    public ResponseEntity<List<Professor>> getAll(){
        return ResponseEntity.ok(professorService.getAllProfessors());
    }

    @PostMapping("/add")
    public void add(@RequestBody Professor professor){
        professorService.addProfessor(professor);
    }
 }
