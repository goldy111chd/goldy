import React, { Component } from 'react';
    class Signup extends Component {
        constructor() {
          super();
          this.state = {
            Email: '',
            Password: ''
          }
          this.Email = this.Email.bind(this);
          this.Password = this.Password.bind(this);
          this.register = this.register.bind(this);
         
        }
        Email(event) {
          this.setState ({ Email: event.target.value })
        }
        Password(event) {
          this.setState({ Password: event.target.value })
        }
        register(event) {
          fetch('https://reqres.in/api/users?page=2', {
            method: 'post',
            Signup: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              Password: this.state.Password,
              Email: this.state.Email,
              
            })
          }).then((Response) => Response.json())
            .then((Result) => {
              if (Result.Status == 'Success')
                      this.props.history.push("https://reqres.in/api/users?page=2");
              else
                alert('Sorrrrrry !!!! Un-authenticated User !!!!!')
            })
        }

        render() {
  return(
    <div id="login-box">
    <div className="lefts">
      <h1>Sign up</h1>
      <input type="text" name="email"onChange={this.Email} placeholder="E-mail" />
      <input type="password" name="password"onChange={this.Password} placeholder="Password" />
      
      <input type="submit" name="signup_submit" onClick={this.register}value="Sign me up" />
    </div>
    
    <div className="rights">
      <span className="loginwith">Sign in with<br />social network</span>
      
      <button className="social-signin facebook">Log in with facebook</button>
      <button className="social-signin twitter">Log in with Twitter</button>
      <button className="social-signin google">Log in with Google+</button>
    </div>
    <div className="or">OR</div>
  </div>
  )
}
}
export default Signup;