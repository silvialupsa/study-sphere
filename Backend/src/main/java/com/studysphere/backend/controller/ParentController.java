package com.studysphere.backend.controller;


import com.studysphere.backend.model.people.Parent;
import com.studysphere.backend.model.people.Person;
import com.studysphere.backend.service.ParentService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/parents")
@RequiredArgsConstructor
public class ParentController {
    private final ParentService parentService;

    @GetMapping("/all")
    @CrossOrigin("*")
    public ResponseEntity<List<Parent>> getAll(){
        return ResponseEntity.ok(parentService.getAll());
    }

    @PostMapping("/add")
    public void add(@RequestBody Parent parent){
      parentService.add(parent);
    }
}
