import React, {Component} from "react";
import {Pie} from 'react-chartjs-2';


      		
    	
class PieChart extends Component {
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
        <Pie
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

export default  PieChart;