import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Charts from '../Charts';
import LeaderBoard from '../LeaderBoard';

const Main = props => (
    <Switch>
        <Route exact path="/" component={Charts} />
        <Route path="/Leaderboard" component={LeaderBoard} />
    </Switch>
);

export default Main;