import React, {useState, useEffect} from "react";
import ProfessorTable from "../../components/tables/ProfessorTable";
import {Link} from "react-router-dom";


const fetchProfessors = () => {
    return fetch("/professors/all").then((res)=> res.json())
}

const ProfessorsList = () => {
    const [professors, setProfessors] = useState([]);

    useEffect(()=>{
        fetchProfessors().then((professors) => {
            setProfessors(professors);
        });
    },[])

    return (
        <div>
            <Link to={`/createProfessor`}>
                <button type="button" className="btn btn-info">Create Professor</button>
            </Link>
            <ProfessorTable
                professors={professors}
            />
        </div>
    )
}

export default ProfessorsList