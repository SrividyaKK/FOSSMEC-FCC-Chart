import React, { Component } from 'react';
import './App.css';
import Charts from './components/Charts';
import users from './users';
import 'tachyons';
import Particles from 'react-particles-js';
import LeaderBoard from './components/LeaderBoard';

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
	  		<div className="App mt5">
		  		{/* <Particles className='particles'
	                params={particlesOptions}
	                style={{width: '100%'}}
            	/> */}
            	<Charts chartData={chartData}/>
				<LeaderBoard chartData={chartData} />
	  		</div>
		);
  	}
}

export default App;
