import React from 'react';
import {connect} from 'react-redux';

import {getAccelerometerData, calibrateAccelerometerAxi} from '../actions/accelerometerActions'
import {Button} from './Button'

export class ReduxTestPage extends React.Component {
  // eslint-disable-next-line
  constructor(props, context) {
    super(props, context);
  }

  componentWillMount() {
    this.props.dispatch(getAccelerometerData());
  }

  onClickCalibrateHandler(accelerometer_name, axis) {
    this.props.dispatch(calibrateAccelerometerAxi(accelerometer_name, axis))
  }

  render() {
    //const test_data = this.props.test_data.data.map((element, i) => <li key={i}>TempA:{element.temperatureA}, TempB:{element.temperatureA}, Voltage:{element.voltage} </li>);    
    const test_data = []
    return (
      <div className="Overview-content">
        <h1>Test page</h1>
        <p>{this.props.accelerometers.calibrating ? "Calibrating..." : "Done calibrating"}</p>
        <label>
          Accelerometer0 X
          <input type="text" value={this.props.accelerometers.accelerometer0.x} readOnly />
          <Button caption="Calibrate" onClick={this.onClickCalibrateHandler.bind(this, "accelerometer0", "x")} />
        </label>
        <label>
          Accelerometer0 Y
          <input type="text" value={this.props.accelerometers.accelerometer0.y} readOnly />
          <Button caption="Calibrate" onClick={this.onClickCalibrateHandler.bind(this, "accelerometer0", "y")} />
        </label>
        <label>
          Accelerometer0 Z
          <input type="text" value={this.props.accelerometers.accelerometer0.z} readOnly />
          <Button caption="Calibrate" onClick={this.onClickCalibrateHandler.bind(this, "accelerometer0", "z")} />
        </label>
        <ul>{test_data}</ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    accelerometers: {
      calibrating: state.accelerometers.calibrating,
      accelerometer0: {
        x: state.accelerometers.accelerometer0.x,
        y: state.accelerometers.accelerometer0.y,
        z: state.accelerometers.accelerometer0.z,
      },
      accelerometer1: {
        x: state.accelerometers.accelerometer1.x,
        y: state.accelerometers.accelerometer1.y,
        z: state.accelerometers.accelerometer1.z,
      }
    }
  }
}

export default connect(mapStateToProps)(ReduxTestPage);
