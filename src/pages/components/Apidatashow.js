import React, { Component } from 'react';
import {Link} from "react-router-dom";
import { ENAMETOOLONG } from 'constants';
import { emptyTypeAnnotation } from '@babel/types';
class Apidatashow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: [], // fetch email fields in this state
	  f_name: [], // fetch first_name fields in this state
	  l_name: [], // fetch last_name fields in this state
	  avatar: [], // fetch avtar fields in this state
	  lists: []  // fetch all fields in this state
    };
  }

  componentDidMount(){
fetch('https://reqres.in/api/users/?results=500')
.then(results=>{return results.json();})
.then(data1=>{
	
	// here data = parent field from api
	//lists is a variable
  let  email = data1.data.map((list)=>{return ( 
<div class="td" key={list.data}>
        {list.email}
      </div>
)
    });
	
	  let  f_name = data1.data.map((list)=>{return ( 
<div class="td" key={list.data}>
        {list.first_name}
      </div>
)
    });
	
		  let l_name = data1.data.map((list)=>{return ( 
<div class="td" key={list.data}>
       {list.last_name}
      </div>
)
    });
	
			  let Avatar = data1.data.map((list)=>{return ( 
<div class="td" key={list.data}>
        <img src={list.avatar}/>
      </div>
)
    });
	
				  let lists = data1.data.map((list, index)=>{return ( 
<tr key={list.data}>
        <td><Link to={`/details/${index+1}`}>{list.email}</Link></td>
        <td>{list.first_name}</td>
        <td>{list.last_name}</td>
        <td><img src={list.avatar}/></td>
      </tr>
)
    });

    this.setState({ email: email, f_name: f_name, l_name: l_name, avtar: Avatar, lists: lists });
    console.log("State", this.state.list);
});

  }


  render() {
    return ( 
		<div className="container">
		<table>
	<tr>
	<th>Email</th>
	<th>First Name</th>
	<th>Last Last</th>
	<th>Avtar</th>
</tr>	
	{this.state.lists}
	</table>


	<div class="d-flex table1">
	<div><div class="th">Email</div>
	{this.state.email}
	</div>
	<div><div class="th">First Name</div>
	{this.state.f_name}
	</div>
	<div><div class="th">Last Name</div>
	{this.state.l_name}
	</div>
	<div><div class="th">Avtar</div>
	{this.state.avtar}
	</div>
	</div>
	
</div>
	);
  }
}
export default Apidatashow;