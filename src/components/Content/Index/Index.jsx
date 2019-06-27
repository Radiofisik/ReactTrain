import React from "react";

const Item = (props) => {
    return (
        <div>{props.value}</div>
    )
};

const Index = () => {
    let arr = [
        {
            name: "test",
            value: "testValue"
        },
        {
            name: "test2",
            value: "testValue2"
        }];
    let elements = arr.map(x => <Item value={x.name}/>);

    return (
        <div>
            {elements}
        </div>
    )
};

export default Index;
