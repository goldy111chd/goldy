import React, { Component } from 'react';
class Login extends Component {
    constructor() {
        super();
        this.state = {
            Email: '',
            Password: ''
        }
        this.Password = this.Password.bind(this);
        this.Email = this.Email.bind(this);
        this.login = this.login.bind(this);
    }
    Email(event) {
        this.setState({ Email: event.target.value })
    }
    Password(event) {
        this.setState({ Password: event.target.value })
    }
    login(event) {
        debugger;
        fetch('http://localhost:51282/Api/login/Login', {
            method: 'post',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                Email: this.state.Email,
                Password: this.state.Password
            })
        }).then((Response) => Response.json())
            .then((result) => {
                console.log(result);
                if (result.Status == 'Invalid')
                    alert('Invalid User');
                else
                    this.props.history.push("/Dashboard");
            })
    }
    render() {
    return <div className='Login'>
             
              <form >
                <input type='email' onChange={this.Email} name='email' placeholder='email' />
                <input type='password' onChange={this.Password} name='password' placeholder='password' />
                <button onClick={this.login}> Sign In</button>
              </form>
              <div className='social-signin'>
                <button className="fb" ><i className="fa fa-facebook" aria-hidden="true"></i>Facebook</button>
                <button className="tw"><i className="fa fa-twitter" aria-hidden="true">Twitter</i></button>
              </div>
                <a href='#'>Lost your password ?</a>
           </div>
  }
}


export default Login;