import React,{Component} from 'react';
import Component1 from './Component1';
import 'tachyons'; //Bootstrap

class Demo1 extends Component{
constructor(){
    super();
    this.state = {
        name: "WElcome to Avtar World"
    }
}

namechange(){
    this.setState({
        name:"Subscribe to Avtar Channel"
    })
}

render(){
    const Componentlist =[ //Array of Person Details
        {
        id:1,
        name:"Vinod",
        work:"web developer"
        },
        {
        id:2,
        name:"Mohit",
        work:"web desiner"
        },
        {
        id:3,
        name:"Vandana",
        work:"React Developer"
        },
        {
        id:4,
        name:"Anjana",
        work:"Angular Developer"
        }
    ]

var Complist = Componentlist.map( (comps, i) =>{ // Loop of Person Detail
return (
<Component1 name={Componentlist[i].name}
                    work={Componentlist[i].work}/> 
);
    })

return (
<div class="container">
<h1 className="text-center">{this.state.name}</h1>
<div className="d-flex">
{Complist}

</div>
<div className="tc ma3"><button onClick={()=>this.namechange()}>Subscribe</button></div>
</div>
)
}
}

export default Demo1;