package com.studysphere.backend.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.RequiredArgsConstructor;

import java.time.LocalDate;
import java.util.List;

@Data
@Entity
@Table(name = "persons")
@AllArgsConstructor
@NoArgsConstructor
@Inheritance(strategy = InheritanceType.JOINED)
public  class Person {
    @Id
    @GeneratedValue
    private Long id;
    private String name;
    private LocalDate birthdate;

    @OneToMany
    private List<Message> messages;

}
