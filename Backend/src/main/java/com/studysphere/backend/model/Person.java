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

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public LocalDate getBirthdate() {
        return birthdate;
    }

    public void setBirthdate(LocalDate birthdate) {
        this.birthdate = birthdate;
    }

    public List<String> getMessages() {
        return messages;
    }

    public void setMessages(List<String> messages) {
        this.messages = messages;
    }
}
