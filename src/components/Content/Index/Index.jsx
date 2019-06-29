import React from "react";

const Item = (props) => {
    return (
        <div>{props.value}</div>
    )
};

const Index = (props) => {
    let elements = props.item.posts.map(x => <Item value={x.value}/>);
    return (
        <div>
            <textarea value={props.item.newMessageText} onChange={(event) => {
                props.update(event.target.value);
            }}></textarea>

            {elements}

            <button onClick={() => {
                props.send();
            }}>Add Item button
            </button>
        </div>
    )
};

export default Index;
