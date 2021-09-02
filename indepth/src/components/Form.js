import React, { Component } from 'react'

class Form extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             userName: '',
             comments: '',
             topics: ''
        }
    }

    handleUserName = (event) => {
        this.setState({
            userName: event.target.value
        })
    }
    
    handleComments = (event) => {
        this.setState({
            comments: event.target.value
        })
    }

    handleTopics = (event) => {
        this.setState({
            topics: event.target.value
         } )
    }

    handleSubmit = (event) => {
        alert(`${this.state.userName} ${this.state.comments} ${this.state.topics}`)
        event.preventDefault()
    }

    render() {
        const [userName,comments,topics] =this.state
        return (
            <form onSubmit={this.handleSubmit}>
                <div>
                <label>Username</label>
                <input type="text" value={userName} onChange={this.handleUserName} />
            </div>

            <div>
                <label>Comments</label>
                <textarea value={comments} onChange={this.handleComments}/>
            </div>

            <select value={topics} onChange={this.handleTopics}>
                <option value="react">React</option>
                <option value="vue">Vue</option>
            </select>

            <button type="submit">Submit</button>
            </form>
            
        )
    }
}

export default Form
