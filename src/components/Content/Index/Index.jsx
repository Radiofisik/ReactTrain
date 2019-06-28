import React from "react";

const Item = (props) => {
    return (
        <div>{props.value}</div>
    )
};

const Index = (props) => {
    let elements = props.arr.map(x => <Item value={x.name}/>);

    return (
        <div>
            {elements}
            <button onClick={() => {
                alert('hi')
            }}> Hi button
            </button>
        </div>
    )
};

export default Index;
