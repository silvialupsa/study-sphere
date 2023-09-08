package com.studysphere.backend.controller;

import com.studysphere.backend.model.Grade;
import com.studysphere.backend.service.GradeService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/grades")
@RequiredArgsConstructor
public class GradeController {
    private final GradeService gradeService;

    @GetMapping("/all")
    @CrossOrigin("*")
    public ResponseEntity<List<Grade>> getAll(){
        return ResponseEntity.ok(gradeService.getAllGrades());
    }

    @PostMapping("/add")
    public void postGrade(@RequestBody Grade grade){
        gradeService.addGrade(grade);
    }
}
