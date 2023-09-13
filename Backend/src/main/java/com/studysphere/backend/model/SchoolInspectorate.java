package com.studysphere.backend.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import jakarta.persistence.*;
import lombok.*;

import java.util.*;

@Data
@Entity
public class SchoolInspectorate {
    @Id
    @GeneratedValue
    private Long id;
    private String name;

    @JsonManagedReference
    @OneToMany(mappedBy = "schoolInspectorate", cascade = CascadeType.ALL, fetch = FetchType.EAGER)
    private List<School> schoolList;
}
