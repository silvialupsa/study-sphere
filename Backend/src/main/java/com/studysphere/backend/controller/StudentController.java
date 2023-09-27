package com.studysphere.backend.controller;

import com.studysphere.backend.model.people.Student;
import com.studysphere.backend.service.StudentService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
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

    @GetMapping("/{id}")
    @CrossOrigin("*")
    public ResponseEntity<Student> getById(@PathVariable Long id) {
        return ResponseEntity.ok(studentService.findById(id));
    }

    @PostMapping("/add")
    @CrossOrigin("*")
    public ResponseEntity<Student> add(@RequestBody Student student) {
        return ResponseEntity.ok(studentService.add(student));
    }

    @DeleteMapping("/delete/{id}")
    @CrossOrigin("*")
    public ResponseEntity<Long> deleteStudent(@PathVariable Long id){
        boolean isRemoved = studentService.removeById(id);
        if(isRemoved){
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<>(id, HttpStatus.OK);
    }
//    public ResponseEntity<Student> remove(@PathVariable Long id) {
//        studentService.removeById(id);
//        return ResponseEntity.ok().build();
//    }

    @PutMapping("/update/{id}")
    @CrossOrigin("*")
    public ResponseEntity<Student> update(@PathVariable Long id, @RequestBody Student updatedStudent) {
        Student existingStudent = studentService.findById(id);
        if (existingStudent == null) {
            return ResponseEntity.notFound().build();
        }

        // Update the existing student's information
        existingStudent.setGradeClass(updatedStudent.getGradeClass());
        existingStudent.setSchool(updatedStudent.getSchool());
        existingStudent.setPerson(updatedStudent.getPerson());

        // Add more fields to update as needed


        return ResponseEntity.ok(studentService.update(existingStudent));
    }
}
