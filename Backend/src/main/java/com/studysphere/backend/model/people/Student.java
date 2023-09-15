package com.studysphere.backend.model.people;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.studysphere.backend.model.Attendance;
import com.studysphere.backend.model.DailyGoals;
import com.studysphere.backend.model.School;
import com.studysphere.backend.model.people.Parent;
import com.studysphere.backend.model.people.Person;
import com.studysphere.backend.model.types.GradeClass;
import jakarta.persistence.*;
import lombok.*;

import java.util.*;


@Entity
@Data
public class Student {
    @Id
    @GeneratedValue
    private Long id;

    @OneToOne
    private Person person;

    @JsonIgnore
    @OneToMany(mappedBy = "student")
    private List<DailyGoals> dailyGoals;

    private GradeClass gradeClass;


    @JsonIgnore
    @OneToMany(mappedBy = "student")
    private List<Attendance> attendance;

    private Calendar calendar;
//
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
