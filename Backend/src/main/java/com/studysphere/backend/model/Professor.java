package com.studysphere.backend.model;

import java.time.LocalDate;
import java.util.List;

public class Professor extends Person{
    private Subject subject;
    private GradeClass gradeClass;
    public Professor(Long id, String name, LocalDate birthdate, List<String> messages, Subject subject, GradeClass gradeClass) {
        super(id, name, birthdate, messages);
        this.subject = subject;
        this.gradeClass= gradeClass;
    }
}
