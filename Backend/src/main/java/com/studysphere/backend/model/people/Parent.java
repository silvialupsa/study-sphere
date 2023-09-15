package com.studysphere.backend.model.people;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import com.studysphere.backend.model.Message;
import jakarta.persistence.*;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.Cascade;

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

//    @JsonManagedReference
//    @ManyToMany(mappedBy = "parents", fetch = FetchType.EAGER)
//    private List<Student> children;
}
