import React, { Component } from 'react'
import axios from 'axios'

class AxiosPosts extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             posts: [],
             errorMsg: ''
        }
    }

    componentDidMount (){
        axios.get('https://jsonplaceholder.typicode.com/post')
        .then(res => {
            console.log(res)
            this.setState({
                posts: res.data
            })
    })
    .catch(err => {
        console.log(err)
        this.setState({ errorMsg: 'Error retrieving data' })
    })
}
    
    render() {
        const { posts, errorMsg } = this.state
        return (
            <div>
                Lists Of AxiosPosts
                {   posts.length ?
                    posts.map(post => <h3 key={post.id}>{post.title}</h3>)
                    : null
                }
                {   errorMsg ? <h3>{errorMsg}</h3> : null}
            </div>
        )
    }
}

export default AxiosPosts
