package com.studysphere.backend.model.people;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import com.studysphere.backend.model.Attendance;
//import com.studysphere.backend.model.DailyGoals;
import com.studysphere.backend.model.School;
import com.studysphere.backend.model.people.Parent;
import com.studysphere.backend.model.people.Person;
import com.studysphere.backend.model.types.GradeClass;
import jakarta.persistence.*;
import jakarta.validation.constraints.NotNull;
import lombok.*;
import org.hibernate.annotations.Fetch;
import org.hibernate.annotations.FetchMode;
import org.hibernate.annotations.Proxy;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.*;


@Entity
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class Student implements UserDetails {
    @Id
    @GeneratedValue
    private Long id;

    @NotNull
    @OneToOne(cascade = CascadeType.ALL, fetch = FetchType.EAGER)
    private Person person;


    private GradeClass gradeClass;


    @JsonIgnore
    @OneToMany(mappedBy = "student", fetch = FetchType.EAGER)
    @JsonManagedReference
    private List<Attendance> attendance;


//    @JsonManagedReference("student-parents")
//    @ManyToMany
//    @JoinTable(name = "parents_students")
//    private List<Parent> parents;

    @JsonIgnore
    @ManyToMany(mappedBy = "children", fetch = FetchType.LAZY)
    private Set<Parent> parents;



//    @ManyToMany(mappedBy = "children")
//    private Set<Parent> parents= new HashSet<>();

    @ManyToOne
    @JoinColumn(name = "schools.id", nullable = false)
    private School school;

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return List.of(new SimpleGrantedAuthority(person.getRole().name()));
    }

    @Override
    public String getPassword() {
            return person.getPassword();
    }

    @Override
    public String getUsername() {
        return person.getUsername();
    }

    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    public boolean isEnabled() {
        return true;
    }
}
