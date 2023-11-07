import React, {useEffect, useState} from "react";
import SchoolTable from "../../components/tables/SchoolTable";
import {Link, useParams} from "react-router-dom";

const fetchSchools = (id) => {
    return fetch(`/schools/inspectorate/${id}`).then((res) => res.json())
}

const SchoolsForInspectorate = () => {
    const {id} = useParams();

    const [schools, setSchools] = useState([])

    useEffect(() => {
        fetchSchools(id).then((schools) => {
            setSchools(schools)
        });
    }, [])
    return (
        <div>
            <Link to={`/createSchool`}>
                <button type="button">Create School</button>
            </Link>
            <SchoolTable
                schools={schools}
            />

        </div>
    )
}

export default SchoolsForInspectorate