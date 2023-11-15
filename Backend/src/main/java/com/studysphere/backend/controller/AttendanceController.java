package com.studysphere.backend.controller;

import com.studysphere.backend.model.Attendance;
import com.studysphere.backend.model.people.Student;
import com.studysphere.backend.service.AttendanceService;
import lombok.RequiredArgsConstructor;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.util.List;

@RestController
@RequestMapping("/attendance")
@RequiredArgsConstructor
public class AttendanceController {
    private final AttendanceService attendanceService;


    @GetMapping("/all")
    @CrossOrigin("*")
    public ResponseEntity<List<Attendance>> getAll() {
        return ResponseEntity.ok(attendanceService.getAllAttendance());
    }


    @PostMapping("/add")
    @CrossOrigin("*")
    public ResponseEntity<Attendance> addAttendance(@RequestBody Attendance attendance) {
        return ResponseEntity.ok(attendanceService.addAttendance(attendance));
    }

    @GetMapping("/student/{id}")
    @CrossOrigin("*")
    public ResponseEntity<Attendance> getByStudentId(@PathVariable Long id) {
        return ResponseEntity.ok(attendanceService.findAttendanceById(id));
    }

    @GetMapping("/student/{studentId}/date/{date}")
    @CrossOrigin("*")
    public ResponseEntity<Attendance> getAttendanceByStudentIdAndDate(
            @PathVariable @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) LocalDate date,
            @PathVariable Long studentId
    ) {
        Attendance attendance = attendanceService.findAttendanceByStudentIdAndDate(date, studentId);
        if (attendance == null) {
            return ResponseEntity.notFound().build();
        } else {
            return ResponseEntity.ok(attendance);
        }
    }

    @GetMapping("/{id}")
    @CrossOrigin("*")
    public ResponseEntity<Attendance> getById(@PathVariable Long id) {
        return ResponseEntity.ok(attendanceService.findAttendanceById(id));
    }

//    @PutMapping("/update/{id}")
//    @CrossOrigin("*")
//    public ResponseEntity<Attendance> update(@PathVariable Long id, @RequestBody Attendance updatedAttendance) {
//        Attendance attendance = attendanceService.findAttendanceById(id);
//        if (attendance == null) {
//            return ResponseEntity.notFound().build();
//        }
//        attendance.setPresent(updatedAttendance.isPresent());
//        return ResponseEntity.ok(attendanceService.update(attendance));
//    }

    @PutMapping("/update/student/{studentId}/date/{date}")
    @CrossOrigin("*")
    public ResponseEntity<Attendance> updateByStudentAndDate (@PathVariable Long studentId, @PathVariable LocalDate date, @RequestBody Attendance updatedAttendance){
        Attendance attendance = attendanceService.findAttendanceByStudentIdAndDate(date, studentId);
        if (attendance == null) {
            return ResponseEntity.notFound().build();
        }
        attendance.setAttendanceStatus(updatedAttendance.getAttendanceStatus());
        return ResponseEntity.ok(attendanceService.update(attendance));
    }
}
