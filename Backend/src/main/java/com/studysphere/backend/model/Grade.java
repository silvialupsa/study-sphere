package com.studysphere.backend.model;

import com.fasterxml.jackson.annotation.JsonBackReference;
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

<<<<<<< Updated upstream
=======
   @JsonIgnore
>>>>>>> Stashed changes
    @ManyToOne
    @JoinColumn(name = "school.id")
    private School school;

    @OneToOne
    private Professor classMaster;

    @JsonBackReference("grade-students")
    @OneToMany
    private List<Student> studentList;

    @JsonBackReference("grade-professors")
    @OneToMany
    private List<Professor> professorList;
}
