import {combineReducers} from 'redux';
import testReducer from './testReducer';
import accelerometerReducer from './accelerometerReducer';

const rootReducer = combineReducers({
	test: testReducer,
	accelerometers: accelerometerReducer
});

export default rootReducer;
