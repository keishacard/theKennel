// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import * as serviceWorker from './serviceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));

// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();

import ReactDOM from 'react-dom';
import React, { Component } from 'react';
import ReactDOM from "react-dom"
import React from 'react'
import Kennel from "./components/Kennel"

ReactDOM.render(<Kennel />, document.querySelector("#root"));

// class Kennel extends Component {
//     render() {
//         return (
//             <div>
//                 <h3>Student Kennels</h3>
//                 <h4>Nashville North Location</h4>
//                 <h5>500 Puppy Way</h5>
//             </div>
//         );
//     }
// }
class Kennel extends Component {
    render() {
        return (
            <div>
                <h3>Student Kennels</h3>
                <h4>Nashville North Location</h4>
                <h5>500 Puppy Way</h5>
                <EmployeeList />
            </div>
        );
    }
}
class EmployeeList extends Component {
    render() {
        return (
            <article>
                <h1>Employee List</h1>
                <section>Jessica Younker</section>
                <section>Jordan Nelson</section>
                <section>Zoe LeBlanc</section>
                <section>Blaise Roberts</section>
            </article>
        );
    }
}

ReactDOM.render(<Kennel />, document.querySelector("#root"));