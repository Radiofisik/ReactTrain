import React from "react";

const Item = (props) => {
    return (
        <div>{props.value}</div>
    )
};

const Index = (props) => {
    let elements = props.items.map(x => <Item value={x.value}/>);
    return (
        <div>
            <textarea value={props.item} onChange={(event) => {
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
