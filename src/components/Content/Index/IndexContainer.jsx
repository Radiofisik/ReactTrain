import {connect} from "react-redux";
import Index from "./Index";
import React from "react";
import {AddPostCommandCreator, UpdateTextCreator} from "../../../redux/post-reducer";

let mapState = (state) => {
    let item = state.postsPage;
    return {item};
};

let mapDispatch = (dispatch) => {
    let update = (val) => dispatch(UpdateTextCreator(val));
    let send = () => dispatch(AddPostCommandCreator());
    return {update, send};
};

const IndexContainer = connect(mapState, mapDispatch)(Index);

export default IndexContainer
