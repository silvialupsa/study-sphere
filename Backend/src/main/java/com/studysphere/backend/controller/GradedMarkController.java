package com.studysphere.backend.controller;

import com.studysphere.backend.model.GradedMark;
import com.studysphere.backend.service.GradedMarkService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/gradedMark")
@RequiredArgsConstructor
@CrossOrigin("*")
public class GradedMarkController {

    private final GradedMarkService gradedMarkService;


    @GetMapping("/all")
    public ResponseEntity<List<GradedMark>> getAll() {
        return ResponseEntity.ok(gradedMarkService.getAll());
    }


    @PostMapping("/add")
    public ResponseEntity<GradedMark> addAttendance(@RequestBody GradedMark gradedMark) {
        return ResponseEntity.ok(gradedMarkService.add(gradedMark));
    }

    @GetMapping("/student/{id}")
    public ResponseEntity<List<GradedMark>> getByStudentId(@PathVariable Long id) {
        return ResponseEntity.ok(gradedMarkService.findByStudentId(id));
    }


    @GetMapping("/{id}")
    public ResponseEntity<GradedMark> getById(@PathVariable Long id) {
        return ResponseEntity.ok(gradedMarkService.findById(id));
    }


}
