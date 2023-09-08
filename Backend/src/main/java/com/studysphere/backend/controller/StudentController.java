package com.studysphere.backend.controller;

import com.studysphere.backend.model.people.Person;
import com.studysphere.backend.model.people.Student;
import com.studysphere.backend.service.StudentService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/students")
@RequiredArgsConstructor
public class StudentController {
private final StudentService studentService;
    @GetMapping("/all")
    @CrossOrigin("*")
    public ResponseEntity<List<Student>> getAll(){
        return ResponseEntity.ok(studentService.getAll());
    }

    @PostMapping("/add")
    public void add(@RequestBody Student student){
        studentService.add(student);
    }
}
