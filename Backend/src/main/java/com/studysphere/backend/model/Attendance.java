package com.studysphere.backend.model;

import com.studysphere.backend.model.people.Student;
import jakarta.persistence.*;
import lombok.Data;

import java.time.LocalDateTime;

@Data
@Entity
public class Attendance {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    private LocalDateTime dateTime;
    private boolean isPresent;

    @ManyToOne
    @JoinColumn
    private Student student;
}
