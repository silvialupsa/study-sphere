package com.studysphere.backend.model;

import java.time.LocalDate;
import java.util.List;

public abstract class Person {
    private Long id;
    private String name;
    private LocalDate birthdate;
    private List<String> messages;

    public Person(Long id, String name, LocalDate birthdate, List<String> messages) {
        this.id = id;
        this.name = name;
        this.birthdate = birthdate;
        this.messages = messages;
    }
}
