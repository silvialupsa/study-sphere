package com.studysphere.backend.model.people;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.studysphere.backend.model.Attendance;
import com.studysphere.backend.model.DailyGoals;
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

    @ElementCollection // Use ElementCollection to store a collection of strings
    @CollectionTable(name = "student_daily_goals", joinColumns = @JoinColumn(name = "student_id"))
    @Column(name = "goal")
    private List<String> dailyGoals;

    private GradeClass gradeClass;

    @OneToMany(mappedBy = "student")
    @JsonIgnore
    private List<Attendance> attendance;
//    private Calendar calendar;

    @ManyToMany
    @JoinTable(name = "parents_students")
    private List<Parent> parents;
}
