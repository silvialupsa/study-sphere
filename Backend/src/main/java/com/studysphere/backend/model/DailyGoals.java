package com.studysphere.backend.model;

import com.studysphere.backend.model.people.Student;
import jakarta.persistence.*;
import lombok.Data;
import org.hibernate.sql.ast.tree.expression.SqlTuple;

import java.util.Date;
import java.util.List;

@Data
@Entity
public class DailyGoals {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    private Date date;

    @ManyToOne
    private Student student;


}
