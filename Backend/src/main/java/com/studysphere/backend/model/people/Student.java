package com.studysphere.backend.model.people;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.studysphere.backend.model.Attendance;
import com.studysphere.backend.model.people.Parent;
import com.studysphere.backend.model.people.Person;
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


//    private List<DailyGoals> dailyGoalsList;
//    private GradeClass gradeClass;
    @OneToMany(mappedBy = "student")
    @JsonIgnore
    private List<Attendance> attendance;
//    private Calendar calendar;

    @ManyToMany
    @JoinTable(name = "parents_students")
    private List<Parent> parents;
}
