package com.studysphere.backend.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.studysphere.backend.model.types.Facilities;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Entity
@Data
@Table(name = "schools")
@AllArgsConstructor
@NoArgsConstructor
public class School {
    @Id
    @GeneratedValue
    private Long id;
    private String name;


    @ManyToOne
    @JoinColumn(name = "inspectorates.id", nullable = false)
    private SchoolInspectorate schoolInspectorate;

//    private Professor schoolPrincipal;

    @OneToMany(mappedBy = "school", cascade = CascadeType.ALL, orphanRemoval = true, fetch = FetchType.EAGER)
    private List<Grade> gradeList;

//
//    private List<Student> studentList;
    @Enumerated(EnumType.STRING)
    private List<Facilities> facilitiesList;


}
