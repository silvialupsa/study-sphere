import {useState, useEffect} from "react";
import ProfessorTable from "../components/ProfessorTable";


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
            <ProfessorTable
                professors={professors}
            />
        </div>
    )
}

export default ProfessorsList