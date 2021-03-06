import React, { Component } from 'react'

class ClickRender extends Component {
    
    render() {
        const {count,incrementCount} = this.props
        return (
            <div>
                <button onClick={incrementCount}>Clicked {count}</button>
            </div>
        )
    }
}

export default ClickRender
