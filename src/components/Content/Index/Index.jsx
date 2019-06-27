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
        </div>
    )
};

export default Index;
