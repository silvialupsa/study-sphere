package com.studysphere.backend.service;

import com.studysphere.backend.model.Attendance;
import com.studysphere.backend.model.School;
import com.studysphere.backend.model.people.Person;
import com.studysphere.backend.model.people.Student;
import com.studysphere.backend.repository.AttendanceRepository;
import com.studysphere.backend.repository.PersonRepository;
import com.studysphere.backend.repository.SchoolRepository;
import com.studysphere.backend.repository.StudentRepository;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Objects;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class StudentService {
    private final StudentRepository studentRepository;
    private final SchoolRepository schoolRepository;
    private final PersonRepository personRepository;
    private final AttendanceRepository attendanceRepository;

    public List<Student> getAll() {
        return studentRepository.findAll();
    }

    public Student findById(Long id) {
        return studentRepository.findById(id).orElse(null);
    }

    @Transactional
    public Student add(Student student) {
        Person person = student.getPerson();
        personRepository.save(person);
        School school = schoolRepository.findById(student.getSchool().getId()).orElse(null);
        assert school != null;
        school.getStudentList().add(student);
        return studentRepository.save(student);
    }

    public void remove(Student student) {
        studentRepository.delete(student);
    }

    @Transactional
    @Modifying
    public boolean removeById(Long id) {
        System.out.println(id);
        Student student = studentRepository.findById(id).orElse(null);
        assert student != null;
        School school = student.getSchool();
        school.setStudentList(school.getStudentList().stream().filter(s -> !Objects.equals(s.getId(), student.getId())).toList());
        personRepository.deleteById(student.getPerson().getId());
        studentRepository.deleteById(id);
        return false;
    }

    public void removeAll() {
        studentRepository.deleteAll();
    }

    @Transactional
    public Student update(Student student) {
        return studentRepository.save(student);
    }


}
