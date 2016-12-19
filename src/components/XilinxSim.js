import React, { Component } from 'react';
import io from 'socket.io-client';
let socket = io();

class XilinxSim extends Component {
	constructor(props) {
		super(props)
		this.state = {
			command: 'XilinxSim'
		}
	}

	componentDidMount() {
        var _this = this;

		socket.on('server event', function (data) {
	        console.log(data);
	        socket.emit('client event', { socket: 'io connected' });
	    });
	}

	startRun(e) {
		e.preventDefault();
		socket.emit('XilinxSim:StartRun');
	}

	render() {

	    return (
		    	<div className="Overview-content">
		    		<button className="btn btn-success" onClick={this.startRun.bind(this)}>Start Run</button>
				</div>
	    );
	}
}

export default XilinxSim;

