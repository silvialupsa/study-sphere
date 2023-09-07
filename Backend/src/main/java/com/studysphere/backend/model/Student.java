package com.studysphere.backend.model;

import com.studysphere.backend.model.types.GradeClass;
import jakarta.persistence.*;
import lombok.*;
import org.hibernate.annotations.Proxy;

import java.time.LocalDate;
import java.util.*;

//@EqualsAndHashCode(callSuper = true)
@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "students")
public class Student extends Person{
    @Id
    @GeneratedValue
    private Long id;

//    private List<DailyGoals> dailyGoalsList;
//    private GradeClass gradeClass;
//    private Map<Date, Boolean> attendance;
//    private Calendar calendar;

//    @ManyToMany(mappedBy = "student")
//@ManyToOne
//@JoinColumn(name = "parent.id")
//    private List<Parent> parentList;
}
