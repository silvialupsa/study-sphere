package com.studysphere.backend.model;

import com.studysphere.backend.model.people.Person;
import jakarta.persistence.*;
import lombok.Data;
import lombok.RequiredArgsConstructor;

@Entity
@Data
public class Message{
    @Id
    @GeneratedValue
    private Long id;
    @ManyToOne
    @JoinColumn
    private Person receiver;
    @ManyToOne
    @JoinColumn
    private Person sender;
    private String message;

}
