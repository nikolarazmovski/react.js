import React, {Component} from "react";
import SignIn from '../components/signin'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../css/login.css';
import $ from 'jquery';


      		
    	
class Login extends Component {
	constructor(props, context) {
    super(props, context);

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);

    this.state = {
      show : false
    };
  }

  handleClose() {
    this.setState({ show: false });
  }

  handleShow() {
    this.setState({ show: true });
  }
	render() {

		return (
			<div className = "container">
			{ this.state.show ? <SignIn /> : null}
			
			<span className = "welcome">Welcome to</span>
			<img src="http://www.extreme-labs.com/images/logo.png" className = "imgSize"/>
			
			<div className = "container displayInline" >
				<form className = "col-sm-4 displayBlock animateLogin">
      				<input type="text" placeholder="Enter Username" name="uname" className = "form-control float-right" aria-label="Small" aria-describedby="inputGroup-sizing-sm" required/>
      				<input type="password" placeholder="Enter Password" name="psw" className = "form-control  float-right" aria-label="Small" aria-describedby="inputGroup-sizing-sm" required/>
    				<button type = "submit" className = "btn btn-success  form-control btn-size">Login</button>
    				
    			</form>	
    			<h1>OR</h1>		
			<div className = "col-sm-6 signInPadding animateSignIn">

				<button id = "btn2" className = "btn btn-primary float-left" onClick={this.handleShow}>Sign in</button>

			</div>

    		</div>	

    		</div>
			)
	}
}

export default Login;