package com.studysphere.backend.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import jakarta.persistence.*;
import jakarta.validation.constraints.NotNull;
import lombok.*;

import java.util.*;

@Data
@Entity
public class SchoolInspectorate {
    @Id
    @GeneratedValue
    private Long id;

    @NotNull
    private String name;

    private String email;
    private String phoneNumber;
    private String address;
    private String county;

    @JsonIgnore
    @OneToMany(mappedBy = "schoolInspectorate", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    private List<School> schoolList;
}
//@JsonIdentityInfo(
//        generator = ObjectIdGenerators.PropertyGenerator.class,
//        property = "id")