import React, { Component } from 'react';
import './App.css';
// import Charts from './components/Charts';
// import Main from './components/Main';
import users from './users';
import 'tachyons';
import Particles from 'react-particles-js';
import LeaderBoard from './components/LeaderBoard';
import Charts from './components/Charts';
import Navigation from './components/Navigation';

const particlesOptions = {
    particles: {
        number: {
            value: 30, 
            density: {
                enable: true, 
                value_area: 800
            }
        }, 
        color: {
            value: '#FF00FF'
        }
    }
}

class App extends Component {
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
 		this.setState({
 			chartData: users
 		}); //end of setState
	 }

  	render() {
  		const { chartData } = this.state;
		return (
	  		<div className="App">
		  		<Particles className='particles'
	                params={particlesOptions}
            	/>
				<Navigation />
            	<Charts chartData={chartData}/>
				<LeaderBoard chartData={chartData} />
	  		</div>
		);
  	}
}

export default App;
