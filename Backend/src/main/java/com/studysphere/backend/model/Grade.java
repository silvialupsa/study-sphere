package com.studysphere.backend.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.studysphere.backend.model.people.Professor;
import com.studysphere.backend.model.people.Student;
import com.studysphere.backend.model.types.GradeClass;
import jakarta.persistence.*;
import lombok.Data;

import java.util.Calendar;
import java.util.List;

@Entity
@Data
public class Grade {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    private GradeClass gradeClass;
    private String name;

    @ManyToOne
    @JoinColumn(name = "school.id")
    @JsonIgnore
    private School school;

//    @OneToOne
//    private Professor classMaster;

    @OneToMany
    private List<Student> studentList;

    @OneToMany
    private List<Professor> professorList;

    private Calendar calendar;

    @ManyToMany
    private List<Message> messagesGroup;
}
