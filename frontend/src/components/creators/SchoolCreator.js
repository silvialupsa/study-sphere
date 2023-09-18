import React, {useEffect, useState} from "react";
import {useNavigate} from 'react-router-dom';
import StudentForm from "../forms/StudentForm";

const createSchool = (school) => {
    console.log("Request Data:", JSON.stringify(school));

    return fetch("/schools/add", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
        },

        body: JSON.stringify(school),
    }).then((res) => res.json());
}


const SchoolCreator = () => {
    const navigate = useNavigate();
    const [school, setSchool] = useState(null);


    const handleCreateSchool = (school) => {
        createSchool(school).then(() => {
            navigate("/schools")
        });
    };

    return (
        <StudentForm
            onCancel={() => navigate("/schools")}
            onSave={handleCreateSchool}
            school={school}
        />
    )
}

export default SchoolCreator