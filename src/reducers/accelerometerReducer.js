import initialState from './initialState'
import * as actionTypes from '../actions/actionTypes'

function accelerometerReducer(state = initialState.accelerometers, action) {
	switch(action.type) {
		case actionTypes.FETCH_ACCELEROMETER_DATA: {
			break;
		}
		case actionTypes.RECEIVE_ACCELEROMETER_DATA_SUCCESS: {
			state = {...state, 
				accelerometer0: action.payload.accelerometer0, 
				accelerometer1: action.payload.accelerometer1 
			};
			break;
		}
		case actionTypes.CALIBRATE_ACCELEROMETER: {
			state = {...state, calibrating: true};
			break;
		}
		case actionTypes.CALIBRATE_ACCELEROMETER_DONE: {
			state = {...state, calibrating: false};
			break;
		}
		default: {
			break;
		}
	}
  	return state;
}
export default accelerometerReducer;