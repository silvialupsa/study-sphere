package com.studysphere.backend.model;

import jakarta.persistence.*;
import lombok.NoArgsConstructor;
import lombok.RequiredArgsConstructor;

@Entity
@RequiredArgsConstructor
public class Message{
    @Id
    @GeneratedValue
    private Long id;
    @OneToOne
    private Person receiver;
    @OneToOne
    private Person sender;
    private String message;

}
