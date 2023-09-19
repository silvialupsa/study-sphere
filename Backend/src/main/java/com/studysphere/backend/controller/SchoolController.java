package com.studysphere.backend.controller;


import com.studysphere.backend.model.School;
import com.studysphere.backend.model.SchoolInspectorate;
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

    @PostMapping("/addAll")
    @CrossOrigin(origins = "*")
    public ResponseEntity<List<School>> adAllInspectorates(@RequestBody List<School> schools) {
        return ResponseEntity.ok(schoolService.addAllSchools(schools));
    }

    @PostMapping("/add")
    @CrossOrigin(origins = "*")
    public void postSchool(@RequestBody School school) {
        schoolService.addSchool(school);
    }

    @GetMapping("/inspectorate/{id}")
    @CrossOrigin("*")
    public ResponseEntity<List<School>> getByInspectorateId(@PathVariable Long id) {
        return ResponseEntity.ok(schoolService.findSchoolsBySchoolInspectorate(id));
    }

}
