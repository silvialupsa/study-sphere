package com.studysphere.backend.controller;


import com.studysphere.backend.model.School;
import com.studysphere.backend.service.SchoolService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.*;

@RestController
@RequestMapping("/schools")
@RequiredArgsConstructor
public class SchoolController {
    private final SchoolService schoolService;

    @GetMapping("/all")
    @CrossOrigin("*")
    public ResponseEntity<List<School>> getAllSchools() {
        return ResponseEntity.ok(schoolService.getAllSchools());
    }

    @PostMapping("/add")
    public void postSchool(@RequestBody School school) {
        schoolService.addSchool(school);
    }


}
