import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import StudentList from './pages/lists/StudentList';
import WelcomePage from './pages/WelcomePage';
import GradeList from './pages/lists/GradeList';
import SchoolList from './pages/lists/SchoolList';
import InspectorateList from './pages/lists/InspectorateList';
import ParentList from './pages/lists/ParentList';
import ProfessorsList from './pages/lists/ProfessorList';
import StudentCreator from './components/creators/StudentCreator';
import StudentUpdater from './components/updaters/StudentUpdater';
import AuxiliaryPage from './pages/AuxiliaryPage';
import SchoolCreator from './components/creators/SchoolCreator';
import SchoolsForInspectorate from './pages/lists/SchoolsForInspectoratesList';
import LogIn from './pages/LogIn';
import {AuthProvider} from 'react-auth-kit';
import ProfessorCreator from './components/creators/ProfessorCreator';
import ProfessorUpdater from './components/updaters/ProfessorUpdater';
import {createRoot} from 'react-dom/client';

const root = createRoot(document.getElementById('root'));

function App() {
    return (
        <React.StrictMode>
            <AuthProvider
                authType={'cookie'}
                authName={'_auth'}
                cookieDomain={window.location.hostname}
                cookieSecure={false}
            >
                <Router>
                    <Routes>
                        <Route path="/" element={<WelcomePage/>}/>
                        <Route path="/login" element={<LogIn/>}/>
                        <Route path="/auxiliary" element={<AuxiliaryPage/>}/>
                        <Route path="/students" element={<StudentList/>}/>
                        <Route path="/grades" element={<GradeList/>}/>
                        <Route path="/schools" element={<SchoolList/>}/>
                        <Route path="/inspectorates" element={<InspectorateList/>}/>
                        <Route path="/parents" element={<ParentList/>}/>
                        <Route path="/professors" element={<ProfessorsList/>}/>
                        <Route path="/createStudent" element={<StudentCreator/>}/>
                        <Route path="/students/update/:id" element={<StudentUpdater/>}/>
                        <Route path="/professors/update/:id" element={<ProfessorUpdater/>}/>
                        <Route path="/createSchool" element={<SchoolCreator/>}/>
                        <Route path="/createProfessor" element={<ProfessorCreator/>}/>
                        <Route path="/checkSchools/:id" element={<SchoolsForInspectorate/>}/>
                    </Routes>
                </Router>
            </AuthProvider>
        </React.StrictMode>
    );
}

root.render(<App/>);

reportWebVitals();
