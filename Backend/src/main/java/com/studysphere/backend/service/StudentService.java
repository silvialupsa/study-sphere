package com.studysphere.backend.service;

import com.studysphere.backend.model.School;
import com.studysphere.backend.model.people.Person;
import com.studysphere.backend.model.people.Student;
import com.studysphere.backend.repository.StudentRepository;
import lombok.NoArgsConstructor;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class StudentService {
    private final StudentRepository studentRepository;

    public List<Student> getAll(){
        return studentRepository.findAll();
    }
    public void add(Student student){
        studentRepository.save(student);
    }

}
