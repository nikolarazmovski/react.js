import React, {Component} from "react";
import {Line} from 'react-chartjs-2';

      		
    	
class Diagram extends Component {
	constructor(props, context) {
    super(props, context);


    this.state = {
      show : false,
      chartData: props.chartData
    };

    console.log(props.chartData);
  }
static defaultProps = {
    displayTitle:true,
    displayLegend: true,
    legendPosition:'right',
    location:'City'
  }

  render(){
    return (
      <div className="chart">
        <Line
          data={this.state.chartData}
          options={{
            title:{
              display:'Skill Statistic',
              text:'Skill Statistic',
              fontSize:25
            },
            legend:{
              position:null
            }
            
          }}
        />

       
      </div>
    )
  }
}

export default  Diagram;