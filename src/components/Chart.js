import React, { Component } from 'react';
import { Line } from 'react-chartjs-2';

class Chart extends Component {
	constructor(props) {
		super(props);
		this.state = {
			chartData: props.chartData
		}
	}

	static defaultProps = {
		displayTitle: true,
		displayLegend: false
	}

	render() {
		const { chartData } = this.state;
		// chartData.labels=[0,1,2,3,4,5,6,7,9];
		chartData.datasets[0].backgroundColor=['rgba(54, 162, 235, 0.6)'];
		return (
			<div className='chart'>
				<Line
				    data={this.state.chartData}
				    options={{
				        maintainAspectRatio: false,
				        title: {
				        	display: true,
				        	text: chartData.datasets[0].label,
				        	fontSize: 15
				        }, 
				        legend: {
				        	display: false,
				        	position: 'right'
				        }
				    }}
				/>
			</div>
		)
	}
}

export default Chart;