import React from 'react'
import './myCss.css'

function Stylesheet(props) {
    let color = props.primary ? 'primary' : ''
    return (
        <div>
            <h2 className={ `${color} font`}>Styling React Component</h2>
        </div>
    )
}

export default Stylesheet
