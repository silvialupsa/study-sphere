package com.studysphere.backend.service;

import com.studysphere.backend.model.Attendance;
import com.studysphere.backend.model.people.Student;
import com.studysphere.backend.repository.AttendanceRepository;
import com.studysphere.backend.repository.StudentRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import javax.lang.model.util.AbstractTypeVisitor14;
import java.time.LocalDate;
import java.util.List;
import java.util.Objects;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class AttendanceService {
    private final AttendanceRepository attendanceRepository;
    private final StudentRepository studentRepository;


    public List<Attendance> getAllAttendance() {
        return attendanceRepository.findAll();
    }

    public Attendance findAttendanceById(Long id) {
        return attendanceRepository.findById(id).orElse(null);
    }

    public Attendance addAttendance(Attendance attendance) {
        return attendanceRepository.save(attendance);
    }

    public Attendance findAttendanceByStudentIdAndDate(LocalDate date, Long studentId) {
        return attendanceRepository.findAttendanceByDateAndStudentId(date, studentId);
    }

    public Attendance update(Attendance updatedAttendance) {
        return attendanceRepository.save(updatedAttendance);
    }

    public List<Attendance> findByStudentId(Long id) {
        return attendanceRepository.findAttendanceByStudentId(id);
    }
}
