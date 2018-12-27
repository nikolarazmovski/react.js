import React, {Component} from "react";


      		
    	
class Edit extends Component {
	constructor(props, context) {
    super(props, context);


    this.state = {
      show : false
    };
  }

 
	render() {

		return (
			<div className = "container">
			 <button className = "btn btn-success">EDIT</button>
    	</div>
			)
	}
}

export default  Edit;