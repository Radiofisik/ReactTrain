import React from "react";
import classes from "./Content.module.css"
import Index from "./Index/Index";
import About from "./About/About";
import {Route} from "react-router-dom";

const Content = (props) => {


    return <div className={classes.content}>
        <Route path="/" exact render={()=><Index arr={props.state.arr}/>}/>
        <Route path="/about/" component={About}/>
    </div>
};

export default Content;
