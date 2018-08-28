import React from 'react';
import Chart from './Chart';
// import './Chart.css';
import users from '../users';

class Charts extends React.Component {
	constructor() {
		super();
		this.state = {
			chartData: {}
		}
	}

	componentWillMount() {
		this.getChartData(); //Async Call
	}

	getChartData() {
		// TODO: fetch data
		this.setState({
			chartData: users
		}); //end of setState
	}

	render() {
		const { chartData } = this.state;
		return (
			<div className='mt4'>
				{
					chartData.map((user, i) => {
						return (
							<div className='tc bg-white dib br3 pa3 ma2 bw2 shadow-4 grow mt3 card'>
								<Chart chartData={chartData[i]}/>
							</div>
						);
					})
				}
			</div>
		);
	}
}

export default Charts;