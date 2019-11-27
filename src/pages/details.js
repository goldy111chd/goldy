import React, { Component, useState, useEffect } from 'react';
//import { connect } from 'react-redux';
const Details = ({ match }) => {
	const [data, setData] = useState('mohit');
	useEffect(() =>{
		fetch(`https://reqres.in/api/users/${match.params.detailId}`)
.then(results=>{return results.json();})
.then(data1=>{


setData(data1.data);
	
	
});
	},[]
	
	);
	
	console.log('list',data);
    return (
    <div>
      <p>
        <strong>User ID: {match.params.detailId}</strong>
      </p>
      <p>
        <strong>User Name:{data.first_name} </strong>
      </p>
    </div>
  )
}

export default Details;