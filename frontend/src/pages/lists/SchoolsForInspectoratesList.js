import {useEffect, useState} from "react";
import SchoolTable from "../../components/tables/SchoolTable";
import {useParams} from "react-router-dom";

const fetchInspectorate = (id) => {
    return fetch(`/inspectorates/${id}`).then((res)=> res.json())
}

const SchoolsForInspectorate = () => {
    const {id} = useParams();

    const [inspectorate, setInspectorate] = useState(null);
    const [schools, setSchools] = useState([])

    useEffect(()=>{
        fetchInspectorate(id).then((inspectorate) => {
            setInspectorate(inspectorate)
            setSchools(inspectorate.schoolList)
        });
    },[])

    return (
        <div>
            <SchoolTable
            schools={schools}
            />

        </div>
    )
}

export default SchoolsForInspectorate