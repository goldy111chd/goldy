import React from 'react';
import 'tachyons'; //Bootstrap

const Component1 = (props) =>{
    return ( 
    <div className="demo tc pa3 ba w-100 w-50-m w-25-l grow shadow-4 bg-white">
    <img src={"https://joeschmoe.io/api/v1/"+props.name} alt="image"/>
    <h1> {props.name} </h1>
    {props.work}
    </div>
    )
}

export default Component1;