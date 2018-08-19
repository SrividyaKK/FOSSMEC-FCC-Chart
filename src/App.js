import React, { Component } from 'react';
import './App.css';
import Chart from './components/Chart';
import users from './users';
import 'tachyons';

class App extends Component {
  	constructor() {
		super();
		this.state = {
			chartData: {}
		}
 	}

 	componentWillMount() {
 		this.getChartData();
 	}

 	getChartData() {
 		this.setState({
 			chartData: users
 		}); //end of setState
 	}

  	render() {
  		const { chartData } = this.state;
		return (
	  		<div className="App">
	  			
		  		{
		  			chartData.map((user, i) => {
		  				return (
		  					<div className='tc bg-lightest-white dib br3 pa3 ma2 bw2 shadow-3 grow'>
		  						<Chart chartData={chartData[i]}/>
		  					</div>
		  				);
		  			})
		  		}
	  		</div>
		);
  	}
}

export default App;
