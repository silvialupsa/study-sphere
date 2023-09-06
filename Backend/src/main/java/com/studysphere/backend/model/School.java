package com.studysphere.backend.model;

import java.util.List;

public class School {
    private final Long id;
    private final String name;
    private Professor schoolPrincipal;
    private List<Grade> gradeList;
    private List<Student> studentList;
    private List<Facilities> facilitiesList;

    public School(Long id, String name, Professor schoolPrincipal, List<Grade> gradeList, List<Facilities> facilitiesList) {
        this.id = id;
        this.name = name;
        this.schoolPrincipal = schoolPrincipal;
        this.gradeList = gradeList;
        this.studentList = gradeList.stream().flatMap(grade -> grade.getStudentList().stream()).toList();
        this.facilitiesList = facilitiesList;
    }

    public Long getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public Professor getSchoolPrincipal() {
        return schoolPrincipal;
    }

    public void setSchoolPrincipal(Professor schoolPrincipal) {
        this.schoolPrincipal = schoolPrincipal;
    }

    public List<Grade> getGradeList() {
        return gradeList;
    }

    public void setGradeList(List<Grade> gradeList) {
        this.gradeList = gradeList;
    }

    public List<Student> getStudentList() {
        return studentList;
    }

    public void setStudentList(List<Student> studentList) {
        this.studentList = studentList;
    }

    public List<Facilities> getFacilitiesList() {
        return facilitiesList;
    }

    public void setFacilitiesList(List<Facilities> facilitiesList) {
        this.facilitiesList = facilitiesList;
    }
}
