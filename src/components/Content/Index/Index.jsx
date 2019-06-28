import React from "react";

const Item = (props) => {
    return (
        <div>{props.value}</div>
    )
};

const Index = (props) => {
    let elements = props.store.getArr().map(x => <Item value={x.name}/>);

    return (
        <div>
            <textarea value={props.store.getItem().value} onChange={(event) => {
                props.store.setItemValue(event.target.value)}}></textarea>
            {elements}
            <button onClick={() => {
                props.store.addItem();
            }}> Add Item button
            </button>
        </div>
    )
};

export default Index;
