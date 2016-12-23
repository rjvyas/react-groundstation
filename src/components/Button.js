import React from 'react';

export class Button extends React.Component {
  // constructor(props, context) {
  //   super(props, context);
  // }
  
  render() {
    //const bms_data = this.props.bms_data;
    return (
      <div>
        <input type="button" value={this.props.caption} onClick={this.props.onClick} />
      </div>
    );
  }
}