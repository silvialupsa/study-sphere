import React, {useEffect, useState} from "react";
import {useNavigate} from 'react-router-dom'
import GradedMarkTable from "../../components/tables/GradedMarkTable";

const fetchStudents = () => {
    return fetch("/students/all").then((res) => res.json())
};

const fetchProfessors = () => {
    return fetch("/professors/all").then((res) => res.json())
}

const fetchAvailableSubjects = () => {
    return fetch("/professors/availableSubjects").then((res) => res.json());
};



const GradedMarksList = () => {
    const [students, setStudents] = useState([]);
    const [professors, setProfessors] = useState([]);
    const [subjects, setSubjects]= useState([]);
    const specificDate = new Date();
    const formattedDate = `${specificDate.getFullYear()}-${(specificDate.getMonth() + 1)
        .toString()
        .padStart(2, "0")}-${specificDate.getDate().toString().padStart(2, "0")}`;
    const navigate = useNavigate();



    useEffect(() => {
        fetchStudents().then((students) => {
            setStudents(students);
        });
        fetchAvailableSubjects().then((subjects)=>{
            setSubjects(subjects);
        })
        fetchProfessors().then((professors)=>{
            setProfessors(professors);
        })
    }, []);


    return (
        <div>
                < GradedMarkTable
                    students={students}
                    date={formattedDate}
                    professors={professors}
                    subjects={subjects}
                />
        </div>
    )
}

export default GradedMarksList;