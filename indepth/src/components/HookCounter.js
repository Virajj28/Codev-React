import React, { useState } from 'react'


function HookCounter() {
    const intialCount= 0
    const [count, setCount] = useState(intialCount)

    const incrbyfy = () => {
            for (let i=0; i<5; i++){
                setCount(prevCount => prevCount +1)
            }
    }
    return (
        <div>
            <h2>Count: {count}</h2>
            Why React Hooks are better? <br></br>
            <button onClick={() => setCount(intialCount)}>Reset</button>
            <button onClick={() => setCount(count+1)}>Increment</button>
            <button onClick={() => setCount(count+1)}>Decrement</button>
            <button onClick={incrbyfy}>Increment by 5</button>
        </div>
    )
}

export default HookCounter;