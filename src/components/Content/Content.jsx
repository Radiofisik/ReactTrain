import React from "react";
import classes from "./Content.module.css"
import About from "./About/About";
import {Route} from "react-router-dom";
import IndexContainer from "./Index/IndexContainer";
import UsersContainer from "./Users/UsersContainer";

const Content = () => {
    return <div className={classes.content}>
        {/*<Route path="/" exact render={()=><Index store={props.store}/>}/>*/}
        <Route exact path="/" component={IndexContainer}/>
        <Route path="/about/" component={About}/>
        <Route path="/users/" component={UsersContainer}/>
    </div>
};

export default Content;
