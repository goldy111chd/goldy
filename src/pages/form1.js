import React from 'react';
import './App.css';
class RegisterForm extends React.Component {
  state = {
    username: "",
    password: "",
    confirm_password: ""
  }

  handleSubmit =(e)=> {
   
e.preventDefault();
    const url = 'http://192.168.0.54:1338/register';
    const data = {
      username: this.state.username,
      password: this.state.password,
      confirm_password: this.state.confirm_password
    };

    try {
     fetch(url, {
        method: 'POST', 
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json'
        }
      }).then(res=> res.json()).then( res=> 
      {
        if(res.code === 200){
          alert(res.data.message);
        } else if (res.error.code === 301){
          alert(res.error.message);
        } else if (res.error.code === 404){
          alert(res.error.message);
        } else if (res.error.code === 500){
          alert(res.error.message);
        }
      });
          
    } catch (error) {
      console.error('Error:', error);
    }
  }


  render() {

    return (
      // <form  className="form" onSubmit={this.handleSubmit}>
      //   <h2>Registration Form</h2>
      //   <label>Email</label>
      //   <input type="text" className="fu" name="username" value={this.state.username} onChange={(e) => this.setState({ username: e.target.value })} />
      //   <br></br>
      //   <label>Password</label>
      //   <input type="password" className="fp" name="password" value={this.state.password} onChange={(e) => this.setState({ password: e.target.value })} />
      //   <br></br>
      //   <label>Confirm Password</label>
      //   <input type="password" className="fcp" name="confirm_password" value={this.state.confirm_password} onChange={(e) => this.setState({ confirm_password: e.target.value })} />
      //   <br></br>
      //   <button className="btn" type="submit">Register</button>
      // </form>



<div class="form-style-5">
<form onSubmit={this.handleSubmit}>
<fieldset>
<legend> Registration Form</legend>
<input type="text" name="username" placeholder="Your Email" value={this.state.username} onChange={(e) => this.setState({ username: e.target.value })}/>
<input type="password" name="password" placeholder="Password" value={this.state.password} onChange={(e) => this.setState({ password: e.target.value })}/>
<input type="password" name="confirm_password" placeholder="Confirm-Password" value={this.state.confirm_password} onChange={(e) => this.setState({ confirm_password: e.target.value })}/>
<button className="btn" type="submit">Register</button>

</fieldset>

</form>
</div>


    );
  }

}

export default RegisterForm;
