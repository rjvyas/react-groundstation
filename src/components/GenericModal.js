import React, { Component } from 'react';
import './GenericModal.css';

class GenericModal extends Component {
  render(){
      return (
        <div className="modal" style={{"display":"block"}}>
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
                <h4 className="modal-title">{this.props.title}</h4>
              </div>
              <div className="modal-body">
                {this.props.children}
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-dismiss="modal" onClick={this.props.close}>Close</button>
              </div>
            </div>
          </div>
        </div>
      );
  }
}


export default GenericModal;

