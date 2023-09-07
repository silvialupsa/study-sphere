package com.studysphere.backend.model.people;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.studysphere.backend.model.Message;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.RequiredArgsConstructor;

import java.time.LocalDate;
import java.util.List;



@Data
@Entity
public class Person {
    @Id
    @GeneratedValue
    private Long id;
    private String name;
    private LocalDate birthdate;

    @JsonIgnore
    @OneToMany(mappedBy = "receiver")
    private List<Message> messagesReceived;

    @JsonIgnore
    @OneToMany(mappedBy = "sender")
    private List<Message> messagesSent;


}
