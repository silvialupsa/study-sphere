import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import StudentList from './Pages/StudentList';
import WelcomePage from "./Pages/WelcomePage";
import NavBar from "./components/NavBar";
import GradeList from "./Pages/GradeList";
import SchoolList from "./Pages/SchoolList";
import InspectorateList from "./Pages/InspectorateList";

const root = document.getElementById('root');

ReactDOM.render(
    <React.StrictMode>
        <NavBar/>
        <Router>
            <Switch>
                <Route path = "/" exact component = {WelcomePage}/>
                <Route path="/students" component={StudentList} />
                <Route path="/grades" component={GradeList}/>
                <Route path="/schools" component={SchoolList}/>
                <Route path="/inspectorates" component = {InspectorateList}/>
            </Switch>
        </Router>
    </React.StrictMode>,
    root
);

reportWebVitals();
