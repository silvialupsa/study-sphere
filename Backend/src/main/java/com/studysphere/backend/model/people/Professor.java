package com.studysphere.backend.model.people;

import com.studysphere.backend.model.types.Subject;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.OneToOne;
import lombok.Data;

import java.util.List;


@Entity
@Data
public class Professor {
    @Id
    @GeneratedValue
    private Long id;

    @OneToOne
    private Person person;

    private List<Subject> subjectList;
}
