package com.studysphere.backend.security.auth;

import com.studysphere.backend.model.people.Person;
import com.studysphere.backend.model.people.Professor;
import com.studysphere.backend.model.people.Student;
import com.studysphere.backend.repository.PersonRepository;
import com.studysphere.backend.repository.ProfessorRepository;
import com.studysphere.backend.repository.StudentRepository;
import com.studysphere.backend.security.config.JwtService;
import lombok.RequiredArgsConstructor;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class AuthenticationService {
    private final PersonRepository personRepository;
    private final StudentRepository studentRepository;
    private final ProfessorRepository professorRepository;
    private final PasswordEncoder passwordEncoder;
    private final JwtService jwtService;
    private final AuthenticationManager authenticationManager;

    public AuthenticationResponse personRegister(PersonRegisterRequest request) {
        System.out.println(request);
        var user = Person.builder()
                .firstName(request.getFirstName())
                .lastName(request.getLastName())
                .email(request.getEmail())
                .password(passwordEncoder.encode(request.getPassword()))
                .role(request.getRole())
                .birthdate(request.getBirthdate())
                .build();
        personRepository.save(user);
        var jwtToken = jwtService.generateToken(user);
        return AuthenticationResponse.builder()
                .token(jwtToken)
                .build();
    }

    public AuthenticationResponse studentRegister(StudentRegisterRequest request) {
        var person = Person.builder()
                .firstName(request.getPerson().getFirstName())
                .lastName(request.getPerson().getLastName())
                .email(request.getPerson().getEmail())
                .password(passwordEncoder.encode(request.getPerson().getPassword()))
                .role(request.getPerson().getRole())
                .birthdate(request.getPerson().getBirthdate())
                .build();

        var user = Student.builder()
                .person(person)
                .gradeClass(request.getGradeClass())
                .school(request.getSchool())
                .build();

        studentRepository.save(user);
        var jwtToken = jwtService.generateToken(user);
        return AuthenticationResponse.builder()
                .token(jwtToken)
                .build();
    }

    public AuthenticationResponse professorRegister(ProfessorRegisterRequest request) {
        var person = Person.builder()
                .firstName(request.getPerson().getFirstName())
                .lastName(request.getPerson().getLastName())
                .email(request.getPerson().getEmail())
                .password(passwordEncoder.encode(request.getPerson().getPassword()))
                .role(request.getPerson().getRole())
                .birthdate(request.getPerson().getBirthdate())
                .build();

        var user = Professor.builder()
                .person(person)
                .subjectList(request.getSubjectList())
                .build();

        professorRepository.save(user);
        var jwtToken = jwtService.generateToken(user);
        return AuthenticationResponse.builder()
                .token(jwtToken)
                .build();
    }


    public AuthenticationResponse authenticate(AuthenticationRequest request) {
        authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(
                        request.getEmail(),
                        request.getPassword()
                )
        );
        var user = personRepository.findByEmail(request.getEmail())
                .orElseThrow();
        var jwtToken = jwtService.generateToken(user);
        return AuthenticationResponse.builder()
                .token(jwtToken)
                .build();
    }


}
