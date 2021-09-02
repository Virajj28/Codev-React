import React, { Component } from 'react'
import withCounter from './withCounter'

class HovHigh1 extends Component {
    
    render() {
        const {count,incrementCount} = this.props
        return (
            <div>
                <h2 onMouseOver={incrementCount}>Hovered {count} times</h2>
            </div>
        )
    }
}

export default withCounter(HovHigh1,5)
