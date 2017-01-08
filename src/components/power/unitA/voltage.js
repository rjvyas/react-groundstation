import React, {Component} from 'react';
import GenericParameterLabel from '../../GenericParameterLabel.js';
import StreamingPageManager from '../../../StreamingPageManager.js';
import config from '../../../../config/commConfig';

import io from 'socket.io-client';

let ip = config.Appserver.ip;
let port = config.Appserver.port;

let socket = io.connect(ip + ':' + port, {
			reconnection: true,
			reconnectionDelay: 1000,
			reconnectionDelayMax : 5000,
			reconnectionAttempts: Infinity
		});



/*
*   PowerA_Voltage class
*/       

class PowerA_Voltage extends Component {
	constructor(props) {
		super(props)

		this.state = {
			streamManager: new StreamingPageManager(),
			command: 'PowerA_Voltage',
		}

        this.voltage = [

        ]		

		var _pos = -2.320;
		var _neg = -2.320;
		var _drainVoltage = -1;
        var isBalancing = false;
        
        for(var _i = 0; _i < 18; _i++)
        {
            this.voltage.push({
                A: [_pos, _neg], 
                B: [_pos, _neg], 
                C: [_pos, _neg], 
                D: [_pos, _neg], 
                E: [_pos, _neg], 
                F: [_pos, _neg], 
                Balancing: isBalancing, 
                voltage: _drainVoltage
            })
        }

        this.labels = [
            {label: "A", value: "A"},
            {label: "B", value: "B"},
            {label: "C", value: "C"},
            {label: "D", value: "D"},
            {label: "E", value: "E"},
            {label: "F", value: "F"},
            {label: "Balancing", value: "Balancing"},
            {label: "voltage", value: "voltage"},
        ]
	}
	
	componentDidMount() {
        var _this = this;
		this._isMounted = true;
	}
	
	render(){
        var _this = this,
            _className = "col-xs-1_5 text-center",
			_showKeys = true,
            _keyCount = 0;

	    return (
		    <div className="Overview-content">
		    	<ul className="list-group">
                {_this.voltage.map(function(item, index){
                    var itemKey = Object.keys(item);
                    
                    if(_showKeys)
                        _keyCount = itemKey.length;

					return (
						<li className="list-group-item" key={index}>
                            <div className="row">
							{
								itemKey.map(function(elem, inx){
									var key = elem,
										val = item[key],
                                        units = '°c';

                                    if(key === 'voltage')
                                    {
                                        units = 'V';
                                        _className = "col-xs-1_5 text-center no-right-border";
                                    }
                                    else if(key === 'Balancing')
                                    {
                                        units = '';
                                        val = val.toString();
                                        _className = "col-xs-1_5 text-right no-right-border";
                                    }
                                    else{
                                        if(Array.isArray(val))
                                        {
                                            val = val.join(units + " | ");
                                        }
                                    }

                                    function showChartLabels()
                                    {
                                        if(_keyCount > 0)
                                        {
                                            _keyCount--;
                                            _showKeys = false;

                                            return key;;
                                        }
                                        else{
                                            return (
                                                <GenericParameterLabel 
                                                StreamingPageManager={_this.state.streamManager} 
                                                parameter="Power Temperatures A 1 Temp"/>
                                            );
                                        }
                                    }



									return (
											<div key={index + "-" + inx} className={_className}>
                                                {showChartLabels()}
											</div>
									);
								})
							}
							</div>
						</li>
					);
                 })
                }
                </ul>
			</div>
	    );
	}
}

export default PowerA_Voltage;

