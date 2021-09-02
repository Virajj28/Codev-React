import React, { Component, useRef } from 'react'

class Refs extends Component {
    constructor(props) {
        super(props)
        this.inputRef = React.createRef()
        this.cbRef = null
        this.setCbRef = element => {
            this.cbRef = element
        }
    }

    componentDidMount() {
        if(this.cbRef) {
            this.cbRef.focus()
        }
        // this.inputRef.current.focus()
        // console.log(this.inputRef)
    }
    
    clickHandler = () => {
        alert(this.inputRef.current.value)
    }
    
    render() {
        return (
            <div>
                <input type="text" ref={this.inputRef}/>
                <input type="text" ref={this.setCbRef}/>
                <button onClick={this.clickHandler}>Click</button>
            
            </div>
        )
    }
}


// function Refs() {

//     const textInput = useRef(null);

//     const clickHandler = () => {
//         textInput.current.focus()
//         console.log(textInput)
//     }

//     return (
//         <div>
//             <input type="text" ref={textInput}/>
//             <input type="button" value="focus on the text input" onClick={clickHandler}/>
//         </div>
//     )
// }


export default Refs
