import TestApi from '../api/TestApi';
import * as actionTypes from './actionTypes';

export function calibrateAccelerometerAxi(accelerometer_name, axis) {
  return dispatch => {
    dispatch(startCalibrating());
    return TestApi.calibrateAccelerometerAxis(accelerometer_name, axis).then(result => {
      dispatch(doneCalibrating());
    }).catch(error => {
      throw(error);
    });
  };
};

export function getAccelerometerData() {
  return dispatch => {
    return TestApi.getAccelerometerData().then(accelerometer_data => {
      dispatch(loadAccelerometerData(accelerometer_data));
    }).catch(error => {
      throw(error);
    });
  };
}

export function loadAccelerometerData(accelerometer_data) {
  console.log("load data")
  console.log(accelerometer_data)
	return {
		"type": actionTypes.RECEIVE_ACCELEROMETER_DATA_SUCCESS, 
		"payload": accelerometer_data
	};
}

export function startCalibrating() {
  return {
    "type": actionTypes.CALIBRATE_ACCELEROMETER
  };
}

export function doneCalibrating() {
  return {
    "type": actionTypes.CALIBRATE_ACCELEROMETER_DONE
  };
}