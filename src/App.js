import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navigation from "./components/Navigation/Navigation";
import Content from "./components/Content/Content";
import Footer from "./components/Footer/Footer";

const App = () => {
    return (
        <div className='app-wrapper'>
            <Header/>
            <Navigation/>
            <Content/>
            <Footer/>
        </div>
    );
};

export default App;
