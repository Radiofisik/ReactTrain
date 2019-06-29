import React from "react";
import classes from "./Content.module.css"
import About from "./About/About";
import {Route} from "react-router-dom";
import IndexContainer from "./Index/IndexContainer";

const Content = () => {
    return <div className={classes.content}>
        {/*<Route path="/" exact render={()=><Index store={props.store}/>}/>*/}
        <Route path="/" component={IndexContainer}/>
        <Route path="/about/" component={About}/>
    </div>
};

export default Content;
