package com.studysphere.backend.service;

import com.studysphere.backend.model.people.Student;
import com.studysphere.backend.repository.StudentRepository;
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

    public Student findById(Long id) {
        return studentRepository.findById(id).orElse(null);
    }

    public Student add(Student student){
        return studentRepository.save(student);
    }

    public void remove(Student student){
        studentRepository.delete(student);
    }

    public boolean removeById(Long id) {
        studentRepository.deleteById(id);
        return false;
    }

    public void removeAll() {
        studentRepository.deleteAll();
    }

    public Student update(Student student) {
        return studentRepository.save(student);
    }

}
