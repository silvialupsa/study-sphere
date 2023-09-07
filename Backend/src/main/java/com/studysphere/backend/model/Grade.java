package com.studysphere.backend.model;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.studysphere.backend.model.types.GradeClass;
import com.studysphere.backend.model.types.Subject;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.*;

@Entity
@Data
public class Grade {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    private GradeClass gradeClass;
    private String name;

    @JsonIgnore
    @ManyToOne
    @JoinColumn(name = "schools.id", nullable = false)
    private School school;
//    private Professor classMaster;
//    private List<Student> studentList;
//    private List<Professor> professorList;
    private Calendar calendar;

    @ManyToMany
    private List<Message> messagesGroup;
}
