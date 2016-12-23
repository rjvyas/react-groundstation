// This file mocks a web API by working with the hard-coded data below.
// It uses setTimeout to simulate the delay of an AJAX call.
// All calls return promises.
var test_data = {
  a: "some test data",
  b: "another",
  data: [
    {
      temperatureA: 111234,
      temperatureB: 5678,
      voltage: 9087
    },
    {
      temperatureA: 6555,
      temperatureB: 343,
      voltage: 2345
    },
      {
      temperatureA: 1234,
      temperatureB: 5678,
      voltage: 9087
    },
    {
      temperatureA: 6555,
      temperatureB: 343,
      voltage: 2345
    }]
};

var accelerometer_data = {
  accelerometer0: {
    x: 0.45,
    y: 0.21,
    z: 0.78
  },
  accelerometer1: {
    x: 0.34,
    y: 0.15,
    z: 0.69
  }
}

//This would be performed on the server in a real app. Just stubbing in.
class TestApi {
  static getAllTestData() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Object.assign({}, test_data));
      }, 500);
    });
  }

  static getAccelerometerData() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Object.assign({}, accelerometer_data));
      }, 500);
    });
  }

  static calibrateAccelerometerAxis(accelerometer_name, axis) {
    return new Promise((resolve, reject) => {
      var newState = Object.assign({}, accelerometer_data);
      if (newState.hasOwnProperty(accelerometer_name) && newState[accelerometer_name].hasOwnProperty(axis))  
      {
        setTimeout(() => {
          console.log(accelerometer_name, axis)
          newState[accelerometer_name][axis] = 0
          accelerometer_data = newState;
          resolve();
        }, 500, accelerometer_name, axis);
      } 
      else 
      {
        reject();
      }
    });
  }
}

export default TestApi;