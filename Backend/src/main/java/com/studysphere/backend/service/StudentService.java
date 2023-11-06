package com.studysphere.backend.service;

import com.studysphere.backend.exceptions.EmailAlreadyExistsException;
import com.studysphere.backend.model.School;
import com.studysphere.backend.model.people.Person;
import com.studysphere.backend.model.people.Student;
import com.studysphere.backend.repository.AttendanceRepository;
import com.studysphere.backend.repository.PersonRepository;
import com.studysphere.backend.repository.SchoolRepository;
import com.studysphere.backend.repository.StudentRepository;
import jakarta.persistence.EntityNotFoundException;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Objects;

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
    @Modifying
    public Student add(Student student) {
        System.out.println(student);
        Person person = student.getPerson();
//        if (personRepository.findByEmail(person.getEmail()).isPresent()) {
//            throw new EmailAlreadyExistsException("Email already exists: " + person.getEmail());
//        }
        if(personRepository.findById(student.getPerson().getId()).isPresent()){
            System.out.println("student is present");
            student.setPerson(personRepository.findById(student.getPerson().getId()).get());
        }else{
            personRepository.save(person);
        }
        System.out.println("student after ifs");
        School school = schoolRepository.findById(student.getSchool().getId())
                .orElseThrow(() -> new EntityNotFoundException("School not found with ID: " + student.getSchool().getId()));
        
        school.getStudentList().add(student);
        System.out.println("sudent before return");
        return studentRepository.save(student);
    }

    public void remove(Student student) {
        studentRepository.delete(student);
    }

    @Transactional
    public boolean removeById(Long id) {
        System.out.println(id);
        Student student = studentRepository.findById(id).orElse(null);
        if (student == null) {
            throw new EntityNotFoundException("Student not found with ID: " + id);
        }
        School school = student.getSchool();
        school.setStudentList(school.getStudentList().stream().filter(s -> !Objects.equals(s.getId(), student.getId())).toList());
        personRepository.deleteById(student.getPerson().getId());
        studentRepository.deleteById(id);
        return false;
    }
    //Todo test removing @Modifying

    public void removeAll() {
        studentRepository.deleteAll();
    }

    @Transactional
    public Student update(Student student) {
        return studentRepository.save(student);
    }


}
