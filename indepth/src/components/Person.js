import React from 'react'

function Person({person}) {
    return (
        <div>
            <h3>I am {person.name}. My Skill is {person.skill}</h3>
            
        </div>
    )
}

export default Person
