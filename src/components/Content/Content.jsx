import React from "react";
import classes from "./Content.module.css"
import Index from "./Index/Index";
import About from "./About/About";
import {Route} from "react-router-dom";

const Content = () => {
    return <div className={classes.content}>
        <Route path="/" exact component={Index}/>
        <Route path="/about/" component={About}/>
    </div>
};

export default Content;
