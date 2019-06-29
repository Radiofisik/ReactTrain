import React from "react";
import {AddPostCommandCreator, UpdateTextCreator} from "../../../redux/post-reducer";

const Item = (props) => {
    return (
        <div>{props.value}</div>
    )
};

const Index = (props) => {
    // debugger;

    let state = props.store.getState().postsPage;
    let elements = state.posts.map(x => <Item value={x.value}/>);
    return (
        <div>
            <textarea value={state.newMessageText} onChange={(event) => {
                props.store.dispatch(UpdateTextCreator(event.target.value));
            }}></textarea>

            {elements}

            <button onClick={() => {
                props.store.dispatch(AddPostCommandCreator());
            }}>Add Item button</button>
        </div>
    )
};

export default Index;
