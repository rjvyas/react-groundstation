import TestApi from '../api/TestApi'

export function testAction(msg) {
	console.log("sup"+msg)
	return {
		"type":"TEST_ACTION",
		"payload": msg
	}
};

export function testAction2(list) {
	return {
		"type":"TEST_ACTION2",
		"payload": list
	}
};



//Function below is action creater func and types.LOAD_BMS_SUCCESS is an action
export function loadTestSuccess(test_data) {
  	return {
  		"type": "RECEIVE_TEST_DATA_SUCCESS", 
  		"payload": {data:test_data.data}
  	};
}

//Function below is a thunk it returns another function
export function getTestData() {
  	return dispatch => {
	    return TestApi.getAllTestData().then(test_data => {
	    	dispatch(loadTestSuccess(test_data));
	    }).catch(error => {
	      throw(error);
	    });
  	};
}

// export function getTestData() {
// 	return {
// 		"type":"GET_TEST_DATA",
// 		"payload": {
// 			"a":"some test data", 
// 			"b":"another", 
// 			"c":[1,2,3,4,5]
// 		}
// 	}
// };
