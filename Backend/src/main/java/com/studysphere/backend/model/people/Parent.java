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


    @ManyToMany( cascade = {CascadeType.MERGE})
    @JoinTable(name = "parents_student",
            joinColumns = @JoinColumn(name = "parents_id", referencedColumnName = "id"),
            inverseJoinColumns = @JoinColumn(name = "students_id", referencedColumnName = "id"),
            uniqueConstraints = {@UniqueConstraint(columnNames = {"parents_id", "students_id"})})
    @JsonIgnoreProperties("parents")
    private List<Student> children;
}
