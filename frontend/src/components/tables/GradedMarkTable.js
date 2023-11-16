import React, { useState } from "react";

const GradedMarkTable = ({ students, professors, gradedMarks, subjects, date }) => {
    const [selectedSubject, setSelectedSubject] = useState(null);
    const [selectedProfessor, setSelectedProfessor]= useState("");
    const [specificDate, setSpecificDate] = useState(date);
    console.log(students);

    return (
        <div className="Mark-table container">
            <h2 className="mt-4 mb-4">Mark Sheet</h2>
            <div className="mb-3">
                <h4>Current date: {date}</h4>
                <div className="mb-3">
                    <label>Select a different date: </label>
                    <input
                        type="date"
                        value={specificDate}
                        onChange={(e) => setSpecificDate(e.target.value)}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="subjectList" className="form-label">
                        Selected Subject: {selectedSubject}
                    </label>
                    <select
                        name="subjectList"
                        id="subjectList.id"
                        className="form-select"
                        onChange={(e) => setSelectedSubject(e.target.value)}
                        value={selectedSubject || ""}
                    >
                        <option disabled value="">
                            Select a Subject
                        </option>
                        {subjects?.map((sj) => (
                            <option key={sj} value={sj}>
                                {sj}
                            </option>
                        ))}
                    </select>
                </div>

                <div className="mb-3">
                    <label htmlFor="professorList" className="form-label">
                        Selected Professor: {selectedProfessor}
                    </label>
                    <select
                        name="professorList"
                        id="professorList.id"
                        className="form-select"
                        onChange={(e) => setSelectedProfessor(e.target.value)}
                        value={selectedProfessor || ""}
                    >
                        <option disabled value="">
                            Select Professor
                        </option>
                        {professors?.map((prof) => (
                            <option key={prof.id} value={prof.person.firstName.concat(" ").concat(prof.person.lastName)}>
                                {prof.person.firstName.concat(" ").concat(prof.person.lastName)}
                            </option>
                        ))}
                    </select>
                </div>

                <table className="table table-bordered table-striped">
                    <thead className="thead-dark">
                    <tr>
                        <th scope="col">Student Name</th>
                        <th scope="col">Mark</th>
                    </tr>
                    </thead>
                    <tbody>
                    {students?.map((student) => (
                        <tr key={student.id}>
                            <td>{`${student.person.firstName} ${student.person.lastName}`}</td>
                            <td>
                                <input className="form-control" type="text" />
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default GradedMarkTable;
