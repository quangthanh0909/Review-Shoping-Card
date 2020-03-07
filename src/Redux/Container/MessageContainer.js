import React, { Component } from 'react'
import Message from '../../component/Section/Message'
import { connect } from 'react-redux';

class MessageContainer extends Component {
    render() {
        var {message}=this.props;
        return (
            <Message
                message={message}
            />
        )
    }
}

const mapStateToProps=(state)=>{
    return{
        message:state.MessageReducer
    }
}

export default connect(mapStateToProps,null)(MessageContainer)
