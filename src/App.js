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
	  					<div className='mw5 center bg-white br3 dib ma3 pa3 pa4-ns mv3 ba b--black-10'>
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
