import React, { Component } from 'react'

class Message extends Component {
    render() {
      var {message}=this.props;
        return (
            <div className="col-lg-12">
            <div className="alert alert-warning text-center" role="alert">
              <strong>{message}</strong>
            </div>
          </div>
        )
    }
}

export default Message
