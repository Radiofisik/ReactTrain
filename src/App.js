import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navigation from "./components/Navigation/Navigation";
import Content from "./components/Content/Content";
import Footer from "./components/Footer/Footer";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import state from "./redux/state";

const App = () => {
    return (
        <Router>
            <div className='app-wrapper'>
                <Header/>
                <Navigation/>
                <Content state={state}/>
                <Footer/>
            </div>
        </Router>
    );
};

export default App;
