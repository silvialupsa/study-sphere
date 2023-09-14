import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import BrowserRouter as Router
import './index.css';
import reportWebVitals from './reportWebVitals';
import StudentList from './Pages/StudentList';
import WelcomePage from "./Pages/WelcomePage";
import NavBar from "./components/NavBar";
import GradeList from "./Pages/GradeList";
import SchoolList from "./Pages/SchoolList";
import InspectorateList from "./Pages/InspectorateList";
import ParentList from "./Pages/ParentList";
import ProfessorsList from "./Pages/ProfessorList";
import StudentCreator from "./components/StudentCreator";

const root = document.getElementById('root');

ReactDOM.render(
    <React.StrictMode>
        <Router>
            <NavBar />
            <Routes>
                <Route path="/" element={<WelcomePage />} />
                <Route path="/students" element={<StudentList />} />
                <Route path="/grades" element={<GradeList />} />
                <Route path="/schools" element={<SchoolList />} />
                <Route path="/inspectorates" element={<InspectorateList />} />
                <Route path="/parents" element={<ParentList />} />
                <Route path="/professors" element={<ProfessorsList />} />
                <Route path="/createStudent" element={<StudentCreator />} />
            </Routes>
        </Router>
    </React.StrictMode>,
    root
);

reportWebVitals();
