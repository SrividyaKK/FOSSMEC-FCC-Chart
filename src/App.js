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
import chartData from './users';

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
			<Route exact path='/' render={ () => <LeaderBoard chartData={chartData} />} />
			<Route path='/user-profiles' component={() => <Charts chartData={chartData} />} />
			<Route path='/leaderboard' component={() => <LeaderBoard chartData={chartData} />} />
			{/*<Charts chartData={chartData} />
			<LeaderBoard chartData={chartData} />*/}
		</div>
	</BrowserRouter>
);

export default App;
