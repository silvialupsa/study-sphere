package com.studysphere.backend.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.*;

import java.util.*;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "inspectorates")
public class SchoolInspectorate {
    @Id
    @GeneratedValue
    private Long id;
    private String name;

    @JsonIgnore
    @OneToMany(mappedBy = "schoolInspectorate", cascade = CascadeType.ALL, orphanRemoval = true, fetch = FetchType.EAGER)
    private List<School> schoolList;
}
