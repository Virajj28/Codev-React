import React, { Component } from 'react'
import Input from './Input'

//this is a parent component
export class FocusInpt extends Component {
    constructor(props) {
        super(props)
        this.componentRef = React.createRef()
    }
    
    clickHandler = () => {
        this.componentRef.current.focusInput() //FocusInput method is defined in Input.js
    }

    render() {
        return (
            <div>
                <Input ref={this.componentRef} />
                <button onClick={this.clickHandler}>Focus Input Without componentDidMount</button>
            </div>
        )
    }
}

export default FocusInpt
