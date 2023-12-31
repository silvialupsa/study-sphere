package com.studysphere.backend.repository;

import com.studysphere.backend.model.Attendance;
import com.studysphere.backend.model.people.Student;
import org.springframework.data.jpa.repository.JpaRepository;

import java.time.LocalDate;
import java.util.List;

public interface AttendanceRepository extends JpaRepository<Attendance, Long> {
    Attendance findAttendanceByDateAndStudentId(LocalDate date, Long studentId);

   List <Attendance> findAttendanceByStudentId(Long id);

}