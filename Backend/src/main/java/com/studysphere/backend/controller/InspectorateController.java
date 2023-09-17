package com.studysphere.backend.controller;

import com.studysphere.backend.model.SchoolInspectorate;
import com.studysphere.backend.service.InspectorateService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.*;

@RestController
@RequestMapping("/inspectorates")
@RequiredArgsConstructor
public class InspectorateController {
    private final InspectorateService inspectorateService;
    @GetMapping("/all")
    @CrossOrigin(origins = "*")
    public ResponseEntity<List<SchoolInspectorate>> getAllInspectorates() {
        return ResponseEntity.ok(inspectorateService.getAllInspectorates());
    }

    @PostMapping(value = "/add")
    public void postInspectorate(@RequestBody SchoolInspectorate inspectorate){
        inspectorateService.addInspectorate(inspectorate);
    }
}
