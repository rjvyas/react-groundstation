import React from 'react';
import {Route, IndexRoute} from 'react-router';

import MainLayout from './components/containers/MainLayout';
import Overview from './components/Overview';
import Stop from './components/Stop';
import XilinxSim from './components/XilinxSim';
import FlightControl_Accel from './components/FlightControl_Accel';
import TestPage from './components/TestPage';

export default (
	<Route path="/" component={MainLayout}>
		<IndexRoute component={Overview} />
		<Route path="dashboard" component={Overview} />
		<Route path="stop" component={Stop} />
		<Route path="XilinxSim" component={XilinxSim} />
		<Route path="FlightControl_Accel" component={FlightControl_Accel} />
		<Route path="testpage" component={TestPage} />
	</Route> 
);
