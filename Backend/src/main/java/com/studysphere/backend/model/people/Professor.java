package com.studysphere.backend.model.people;

import com.studysphere.backend.model.people.Person;
import com.studysphere.backend.model.types.Subject;
import jakarta.persistence.*;
import lombok.Data;
import lombok.NoArgsConstructor;

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
