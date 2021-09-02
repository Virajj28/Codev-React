import React from 'react'
import Person from './Person'

function Lists() {

    const names=['John','Ringo','Lucifer']

    const persons = [
     {
            id: 1,
            name: 'John',
            skill: 'React'
        },
        {
            id: 2,
            name: 'Ringo',
            skill: 'Cool'
        },
        {
            id: 3,
            name: 'Lucifer',
            skill: 'Real Cool'
        }
    ]
    const personList= persons.map(person => <Person key={person.name} person={person} />)

    const nameList = names.map((name,index) => <h2 key={index}>{index}{name}</h2>)

    return <div>
        {personList}
        {nameList}
    </div>
    // return (
    //     <div>
    //         {
    //             names.map(name => <h3>{name}</h3>)
    //         }


    //         {/* <h2>{name[0]}</h2>
    //         <h2>{name[1]}</h2>
    //         <h2>{name[2]}</h2>
    //         <h2>{name[3]}</h2> */}
    //     </div>
    // )
}

export default Lists
