import initialState from './initialState'

function testReducer(state = initialState, action) {
	switch(action.type) {
		case "TEST_ACTION": {
			state = {...state, test: action.payload};
			break;
		}
		case "TEST_ACTION2": {
			state = {...state, list: action.payload};
			break;
		}
		case "GET_TEST_DATA": {
			state = {...state, fetching: true, fetched: false, test_data: action.payload, message: ""};
			break;
		}
		case "RECEIVE_TEST_DATA_SUCCESS": {
			state = {...state, fetching: false, fetched: true, test_data: action.payload};
			break;
		}
		case "RECEIVE_TEST_DATA_FAIL": {
			state = {...state, fetching: false, fetched: false, message: "Failed"};
			break;
		}
		default: {
			break;
		}
	}
  	return state;
}
export default testReducer;