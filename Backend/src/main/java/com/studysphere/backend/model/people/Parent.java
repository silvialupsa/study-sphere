package com.studysphere.backend.model.people;

import com.studysphere.backend.model.Message;
import jakarta.persistence.*;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.HashSet;
import java.util.List;
import java.util.Set;


@Entity
@Data
public class Parent {
    @Id
    @GeneratedValue
    private Long id;

    @OneToOne
    private Person person;

   @ManyToMany(mappedBy = "parents")
    private List<Student> children;

}
