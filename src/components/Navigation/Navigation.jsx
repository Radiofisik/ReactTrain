import React from "react";
import classes from "./Navigation.module.css"
import {Link} from "react-router-dom";

const Navigation = () => {
    return <nav className={classes.navigation}>
        <ul>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/about/">About</Link>
            </li>
            <li>
                <Link to="/users/">Users</Link>
            </li>
        </ul>
    </nav>
};

export default Navigation;
