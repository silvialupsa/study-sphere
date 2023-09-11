import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

class App extends Component {
    constructor() {
        super();
        this.state = {
            students: [],
        };
    }

    async componentDidMount() {
        try {
            const response = await fetch('/students/all');
            const data = await response.json();
            this.setState({ students: data });
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }

    render() {
        const { students } = this.state;

        return (
            <div className="App bg-danger">
                <div className="Student-list">
                    <h2>Student List</h2>
                    <table className="table table-striped">
                        <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Birthdate</th>
                            <th>Grade Class</th>
                        </tr>
                        </thead>
                        <tbody>
                        {students.map((student) => (
                            <tr key={student.id}>
                                <td>{student.id}</td>
                                <td>{student.person.name}</td>
                                <td>{student.person.birthdate}</td>
                                <td>{student.gradeClass}</td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default App;
