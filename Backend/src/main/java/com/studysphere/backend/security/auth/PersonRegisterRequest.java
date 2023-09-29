package com.studysphere.backend.security.auth;

import com.studysphere.backend.model.types.Role;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class PersonRegisterRequest {
    private String firstName;
    private String lastName;
    private String email;
    private String password;
    private LocalDate birthdate;
    private Role role;
}
