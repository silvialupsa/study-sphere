package com.studysphere.backend.model;

import com.studysphere.backend.model.types.GradeClass;

import java.time.LocalDate;
import java.util.*;

public class Student extends Person{
    private List<DailyGoals> dailyGoalsList;
    private GradeClass gradeClass;
    private Map<Date, Boolean> attendance;
    private Calendar calendar;
    private final List<Parent> parentList;


    public Student(Long id, String name, LocalDate birthdate, List<String> messages, List<DailyGoals> dailyGoalsList, GradeClass gradeClass, Map<Date, Boolean> attendance, Calendar calendar, List<Parent> parentList) {
        super(id, name, birthdate, messages);
        this.dailyGoalsList = dailyGoalsList;
        this.gradeClass = gradeClass;
        this.attendance = attendance;
        this.calendar = calendar;
        this.parentList = parentList;
    }

    public List<DailyGoals> getDailyGoalsList() {

        return dailyGoalsList;
    }

    public void setDailyGoalsList(List<DailyGoals> dailyGoalsList) {
        this.dailyGoalsList = dailyGoalsList;
    }

    public GradeClass getGradeClass() {
        return gradeClass;
    }

    public void setGradeClass(GradeClass gradeClass) {
        this.gradeClass = gradeClass;
    }

    public Map<Date, Boolean> getAttendance() {
        return attendance;
    }

    public void setAttendance(Map<Date, Boolean> attendance) {
        this.attendance = attendance;
    }

    public Calendar getCalendar() {
        return calendar;
    }

    public void setCalendar(Calendar calendar) {
        this.calendar = calendar;
    }

    public List<Parent> getParentList() {
        return parentList;
    }
}
