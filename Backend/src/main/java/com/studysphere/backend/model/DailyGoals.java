package com.studysphere.backend.model;

import java.text.SimpleDateFormat;
import java.util.Date;

public class DailyGoals {
    private Date date;
    private String[] goals;

    public DailyGoals(String[] goals) {
        this.date = new Date(); // Set the date to today
        this.goals = goals;
    }

    public Date getDate() {
        return date;
    }

    public String[] getGoals() {
        return goals;
    }

    public void setGoals(String[] goals) {
        this.goals = goals;
    }


    @Override
    public String toString() {
        SimpleDateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd");
        String formattedDate = dateFormat.format(date);
        StringBuilder sb = new StringBuilder();
        sb.append("Date: ").append(formattedDate).append("\n");
        sb.append("Goals:\n");
        for (String goal : goals) {
            sb.append("- ").append(goal).append("\n");
        }
        return sb.toString();
    }
}
