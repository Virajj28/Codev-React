import React, { Component } from 'react'

class UserGreeting extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             isLoggedIn: true
        }
    }
    


    render() {
            return this.state.isLoggedIn && <div>Welcome back!</div>


        // return (
        //     this.state.isLoggedIn ?
        //     (<div>
        //         Welcome back!
        //     </div>) :
        //     (<div>
        //         Welcome!
        //     </div>)
    
        // )
    }
}

export default UserGreeting
