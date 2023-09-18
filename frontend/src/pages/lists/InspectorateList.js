import {useState, useEffect} from "react";
import InspectoratesTable from "../../components/tables/InspectoratesTable";
import SchoolList from "./SchoolList";

const fetchInspectorates = () => {
    return fetch("/inspectorates/all").then((res)=> res.json())
}

const InspectorateList = () => {
    const [inspectorates, setInspectorates] = useState(null);


    useEffect(()=>{
        fetchInspectorates().then((inspectorates) => {
            setInspectorates(inspectorates);
        });
    },[])

    return (
        <div>
            <InspectoratesTable
                inspectorates={inspectorates}
            />
        </div>
    )
}

export default InspectorateList