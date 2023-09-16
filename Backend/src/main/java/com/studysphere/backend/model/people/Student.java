package com.studysphere.backend.model.people;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.studysphere.backend.model.Attendance;
//import com.studysphere.backend.model.DailyGoals;
import com.studysphere.backend.model.School;
import com.studysphere.backend.model.people.Parent;
import com.studysphere.backend.model.people.Person;
import com.studysphere.backend.model.types.GradeClass;
import jakarta.persistence.*;
import lombok.*;
import org.hibernate.annotations.Proxy;

import java.util.*;


@Entity
@Data
@Proxy(lazy = false)
public class Student {
    @Id
    @GeneratedValue
    private Long id;

    @OneToOne(cascade = CascadeType.ALL, fetch = FetchType.EAGER)
    private Person person;


    private GradeClass gradeClass;


    @JsonIgnore
    @OneToMany(mappedBy = "student", cascade = CascadeType.ALL, fetch = FetchType.EAGER)
    private List<Attendance> attendance;


//    @ManyToMany
//    @JoinTable(name = "parents_students")
//    @JsonBackReference
//    private List<Parent> parents;
//
    @JsonBackReference
    @ManyToOne
    @JoinColumn(name = "schools.id", nullable = false)
    private School school;
}
