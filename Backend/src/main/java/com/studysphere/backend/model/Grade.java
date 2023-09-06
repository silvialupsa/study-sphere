package com.studysphere.backend.model;
import java.util.*;

public class Grade {
    private final Long id;
    private final GradeClass gradeClass;
    private final String name;
    private final Professor classMaster;
    private List<Student> studentList;
    private Map<Professor, List<Subject>> professorListMap;
    private Calendar calendar;
    private List<String> messagesGroup;

    public Grade(Long id, GradeClass gradeClass, String name, Professor classMaster, List<Student> studentList, Map<Professor, List<Subject>> professorListMap, Calendar calendar, List<String> messagesGroup) {
        this.id = id;
        this.gradeClass = gradeClass;
        this.name = name;
        this.classMaster = classMaster;
        this.studentList= studentList;
        this.professorListMap = professorListMap;
        this.calendar = calendar;
        this.messagesGroup = messagesGroup;
    }

    public Long getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public Professor getClassMaster() {
        return classMaster;
    }

    public Map<Professor, List<Subject>> getProfessorListMap() {
        return professorListMap;
    }

    public void setProfessorListMap(Map<Professor, List<Subject>> professorListMap) {
        this.professorListMap = professorListMap;
    }

    public Calendar getCalendar() {
        return calendar;
    }

    public void setCalendar(Calendar calendar) {
        this.calendar = calendar;
    }

    public List<String> getMessagesGroup() {
        return messagesGroup;
    }

    public void setMessagesGroup(List<String> messagesGroup) {
        this.messagesGroup = messagesGroup;
    }
}
