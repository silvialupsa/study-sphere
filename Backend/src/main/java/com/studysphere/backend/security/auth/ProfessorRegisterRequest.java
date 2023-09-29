package com.studysphere.backend.security.auth;

import com.studysphere.backend.model.School;
import com.studysphere.backend.model.people.Person;
import com.studysphere.backend.model.types.GradeClass;
import com.studysphere.backend.model.types.Subject;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class ProfessorRegisterRequest {
    private Person person;
    private List<Subject> subjectList;
}
