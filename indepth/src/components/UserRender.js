import React, { Component } from 'react'

class UserRender extends Component {
    render() {
        return (
            <div>
                {this.props.name(false)}
            </div>
        )
    }
}

export default UserRender
