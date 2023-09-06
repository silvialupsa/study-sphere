package com.studysphere.backend.model;
import com.studysphere.backend.model.types.GradeClass;
import com.studysphere.backend.model.types.Subject;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.*;

//@Entity
//@Table(name="grades")
@Data
//@AllArgsConstructor
//@NoArgsConstructor
public class Grade {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    private GradeClass gradeClass;
    private String name;
    private Professor classMaster;
    private List<Student> studentList;
    private Map<Professor, List<Subject>> professorListMap;
    private Calendar calendar;
    private List<String> messagesGroup;
}
