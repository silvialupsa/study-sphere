import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import StudentList from './Pages/StudentList';
import WelcomePage from "./Pages/WelkomePage";
import NavBar from "./components/NavBar";

const root = document.getElementById('root');

ReactDOM.render(
    <React.StrictMode>
        <NavBar/>
        <Router>
            <Switch>
                <Route path = "/" exact component = {WelcomePage}/>
                <Route path="/students" component={StudentList} />
            </Switch>
        </Router>
    </React.StrictMode>,
    root
);

reportWebVitals();
