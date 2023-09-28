package com.studysphere.backend.security.auth;

import com.studysphere.backend.model.School;
import com.studysphere.backend.model.people.Person;
import com.studysphere.backend.model.types.GradeClass;
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
public class StudentRegisterRequest {
    private Person person;
    private GradeClass gradeClass;
    private School school;
}
