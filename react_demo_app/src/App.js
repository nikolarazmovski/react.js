

import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Login from './components/login';
import BarChart from './components/chart';
import PieChart from './components/pie';
import Diagram from './components/diagram';
import Edit from './components/edit';
import EmployeeList from './components/employeeList';
import axios from 'axios'


class App extends Component {

  constructor(props, context) {
    super(props, context);

    this.state = {
      showCharts: false,
      
    };

   
    
  }
componentDidMount() {
  axios.get('http://192.168.0.104:3000')
    .then(response => this.setState({data: response.data}));

}
 

  handleChart = () => {
     this.setState({ showChart: true,
                     showPie: false,
                     showDiagram: false,
                     showEdit: false});
  }

  handleDiagram = () => {
     this.setState({ showChart: false,
                     showPie: false,
                     showDiagram: true,
                     showEdit: false});
  }

  handlePie = () => {
     this.setState({ showChart: false,
                     showPie: true,
                     showDiagram: false,
                     showEdit: false});
  }

  handleEdit = () => {
     this.setState({ showChart: false,
                     showPie: false,
                     showDiagram: false,
                     showEdit: true});
  }

  togleList = () => {
    if (this.state.employeeList){
        this.setState({employeeList: false });
    } else {
      this.setState({employeeList: true });
    }
  }

  showButtons = (link) => {
     this.setState({showCharts: true,
                    chartData: {
                      labels:  link.skills.map(this.getFullName),
                      datasets: [ {
                          data: link.skills.map(this.getLastName),
                        backgroundColor:link.skills.map(this.getRandomHex)
                      }
                      ]

                    },
                    showChart: false,
                    showPie: false,
                    showDiagram: false,
                    showEdit: false});     
                    console.log( link.skills.map(this.getLastName));         
  }

  

  getRandomHex() {
    var letters = '0123456789ABCDEF'.split('');
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

  getFullName(item,index) {
  var fullname = [item.skillName].join(" ");
  return fullname;
}

  getLastName(item,index) {
  var fullname = [item.rating].join(" ");
  return fullname;
}


  render() {
    if (!this.state.data) {
            return <div />
        }
    return (
      <div className="App">
        <div className = "container">
          <h1>Welcome to <img src="http://www.extreme-labs.com/images/logo.png" className = "logoX3"/>  employee statistics </h1>  
        </div>
         
        <div className = "container text-left marginBottom">
         <h1 className = "styleh1 text-left"> List of Employees:</h1>   
             <div className = "listEmployee">
              {this.state.data.map((link) =>
        <button key={link.username} className="btn btn-secondary  btnEmployee" onClick = {() => this.showButtons(link)}>{link.name + " " + link.surname}</button> 
    )}  {this.state.chartData ? this.state.chartData.name : null}
            </div>
        </div>
       {this.state.showCharts ?
        <div className = "container text-left chartButtons">
          <button type = "button" className = "btn btn-light buttonMargin" onClick = {this.handleChart}>Bar</button>
          <button type = "button" className = "btn btn-light buttonMargin" onClick = {this.handlePie}>Pie</button>
          <button type = "button" className = "btn btn-light buttonMargin" onClick = {this.handleDiagram}>Diagram</button>
          <button type = "button" className = "btn btn-warning buttonMargin" onClick = {this.handleEdit}>Edit Employee</button>
        </div>
        : null}

          {this.state.showPie ? <div className = "container listEmployee" ><PieChart chartData = {this.state.chartData}/> </div> : null}
          {this.state.showChart ? <div className = "container listEmployee" ><BarChart chartData = {this.state.chartData}/> </div> : null}
          {this.state.showDiagram ? <div className = "container listEmployee" ><Diagram chartData = {this.state.chartData}/> </div> : null}
          {this.state.showEdit ? <div className = "container listEmployee" ><Edit chartData = {this.state.chartData}/> </div> : null}
      </div>

    );
  }
}
export default App;

/*<Login />*/