import React, { useState, useEffect } from "react";
import ParentTable from "../../components/tables/ParentTable";

const fetchParents = () => {
    return fetch("/parents/all").then((res) => res.json());
};


const ParentList = () => {
    const [parents, setParents] = useState([]);

    useEffect(() => {
        fetchParents().then((parents) => {
            setParents(parents);
        });

    }, []);


    return (
        <div>
            <ParentTable parents={parents}/>
        </div>
    );
};

export default ParentList;
