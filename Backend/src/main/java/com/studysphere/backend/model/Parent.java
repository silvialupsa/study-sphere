package com.studysphere.backend.model;

import java.time.LocalDate;
import java.util.List;

public class Parent extends Person {
    private List<Student> children;

    public Parent(Long id, String name, LocalDate birthdate, List<String> messages, List<Student> children) {
        super(id, name, birthdate, messages);
        this.children = children;
    }
}
