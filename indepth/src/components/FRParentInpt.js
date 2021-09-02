import React, { Component } from 'react'
import FRInput from './FRInput'

class FRParentInpt extends Component {
    constructor(props) {
        super(props)
        this.inputRef = React.createRef()
    }
    
    render() {
        return (
            <div>
                IF In form we want to direct our user to fill out details.
                <FRInput ref={this.inputRef} />
                <button onClick={() => this.inputRef.current.focus()}>Focus</button>
            </div>
        )
    }
}

export default FRParentInpt
