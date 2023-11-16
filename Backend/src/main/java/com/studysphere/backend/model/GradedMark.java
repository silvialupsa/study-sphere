package com.studysphere.backend.model;

import com.studysphere.backend.model.people.Professor;
import com.studysphere.backend.model.people.Student;
import com.studysphere.backend.model.types.GradeMarkType;
import com.studysphere.backend.model.types.Subject;
import jakarta.persistence.*;
import lombok.Data;

import java.time.LocalDate;

@Entity
@Data

public class GradedMark {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    private LocalDate date;

    @ManyToOne
    @JoinColumn(name = "student_id")
    private Student student;

    @Column(name = "grade_mark")
    private int gradeMark;

    @Column(name = "subject")
    @Enumerated(EnumType.STRING)
    private Subject subject;

    @ManyToOne
    @JoinColumn(name = "professor_id")
    private Professor professor;
}
