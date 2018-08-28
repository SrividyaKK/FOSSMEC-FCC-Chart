import React, { Component } from 'react';
import './App.css';
// import Charts from './components/Charts';
// import Main from './components/Main';
import 'tachyons';
import Particles from 'react-particles-js';
import LeaderBoard from './components/LeaderBoard';
import Charts from './components/Charts';
import Navigation from './components/Navigation';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

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

const App = () => (
	<BrowserRouter>
		<div className="App">
			<Particles className='particles'
				params={particlesOptions}
			/>
			<Navigation />
			<Route exact path='/' component={LeaderBoard} />
			<Route path='/charts' component={Charts} />
			<Route path='/leaderboard' component={LeaderBoard} />
			{/*<Charts chartData={chartData} />
			<LeaderBoard chartData={chartData} />*/}
		</div>
	</BrowserRouter>
);

export default App;
