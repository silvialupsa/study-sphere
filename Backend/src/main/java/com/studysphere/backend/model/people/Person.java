package com.studysphere.backend.model.people;

import com.fasterxml.jackson.annotation.JsonIgnore;
//import com.studysphere.backend.model.Message;
import com.studysphere.backend.model.types.PersonCategory;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.RequiredArgsConstructor;
import org.hibernate.annotations.Proxy;

import java.time.LocalDate;
import java.util.List;

@Data
@Entity
@Proxy(lazy = false)
public class Person {
    @Id
    @GeneratedValue
    private Long id;
    private String name;
    private LocalDate birthdate;

}
