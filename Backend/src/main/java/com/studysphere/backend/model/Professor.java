package com.studysphere.backend.model;

import java.time.LocalDate;
import java.util.List;

public class Professor extends Person{
    private List<Subject> subjectList;
    public Professor(Long id, String name, LocalDate birthdate, List<String> messages, List<Subject> subjectList) {
        super(id, name, birthdate, messages);
        this.subjectList = subjectList;
    }
}
