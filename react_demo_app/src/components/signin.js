import React, {Component} from "react";
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../css/signin.css';


    	
class SignIn extends Component {
	
	render() {

		return (
			<React.Fragment>
      <div  className = "signin">
      <div className = "container formStyle col-sm-12">
      <input type="email" placeholder="Enter Email" name="psw" className = "form-control inputSign" aria-label="Small" aria-describedby="inputGroup-sizing-sm" required/>
      <input type="password" placeholder="Enter Password" name="uname" className = "form-control inputSign" aria-label="Small" aria-describedby="inputGroup-sizing-sm" required/>
      <input type="password" placeholder="Repeat Password" name="psw" className = "form-control inputSign " aria-label="Small" aria-describedby="inputGroup-sizing-sm" required/>
      </div>
        </div>
    		</React.Fragment>
			)
	}
}

export default SignIn;