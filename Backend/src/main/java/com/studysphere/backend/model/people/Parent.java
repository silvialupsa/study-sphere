package com.studysphere.backend.model.people;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonManagedReference;
//import com.studysphere.backend.model.Message;
import jakarta.persistence.*;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.Cascade;
import org.hibernate.annotations.Fetch;
import org.hibernate.annotations.FetchMode;

import java.util.ArrayList;
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

//    @JsonBackReference("student-parents")
//    @ManyToMany(mappedBy = "parents")
//    private List<Student> children;


    @ManyToMany(fetch = FetchType.EAGER, targetEntity = Student.class)
    @JoinTable(name = "parents_students",
            joinColumns = @JoinColumn(name = "parents_id"),
            inverseJoinColumns = @JoinColumn(name = "students_id"),
            uniqueConstraints = {@UniqueConstraint(columnNames = {"parents_id", "students_id"})})
//    @JsonIgnoreProperties("parents")
    @Fetch(FetchMode.JOIN)
    private Set<Student> children;

//    @ManyToMany(cascade = {CascadeType.PERSIST, CascadeType.MERGE})
//    private Set<Student> children= new HashSet<>();
}
