import React from 'react'
import {Line, Chart} from 'react-chartjs-2'
import {ChartArea} from './StyledComponents'




//Modify DataDisplay to receive the data from props
const DataDisplay = ({data}) => {
    ///We will retrieve this data using fetch and the coindesk api, passing the current value of currency from the state to get the data for the currency selected by the user.
    // return (
	// 	<div>
	// 		{Object.keys(data).map((date) => 
	// 			<div key={date}>Date: {date} Value: {data[date]}</div>
	// 		)}
	// 	</div>
    // )
    // chart.js defaults
  	Chart.defaults.global.defaultFontColor = '#000';
  	Chart.defaults.global.defaultFontSize = 16
	function formatChartData () {
    	return {
			labels: Object.keys(data),
			datasets: [
				{
				label: "Bitcoin",
				fill: true,
				lineTension: 0.1,
				backgroundColor: 'rgba(197, 242, 174,0.4)',
				borderColor: 'rgba(197, 242, 174,1)',
				borderCapStyle: 'butt',
				borderDash: [],
				borderDashOffset: 0.0,
				borderJoinStyle: 'miter',
				pointBorderColor: 'rgba(197, 242, 174,1)',
				pointBackgroundColor: '#fff',
				pointBorderWidth: 1,
				pointHoverRadius: 5,
				pointHoverBackgroundColor: 'rgba(197, 242, 174,1)',
				pointHoverBorderColor: 'rgba(220,220,220,1)',
				pointHoverBorderWidth: 2,
				pointRadius: 1,
				pointHitRadius: 10,
				data: Object.values(data)
				}
			]
		}
	}
	return (
		<ChartArea>
        	<Line data={formatChartData()} height={250} />
        </ChartArea>
	)
    
    
}



export default DataDisplay


