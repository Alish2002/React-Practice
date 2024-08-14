// Task2 = take a count and also create two buttons increment and decrement(counter application)

import React, { useState } from "react";

const Task2 = () => {
    const [count, setCount] = useState(0)
    const handleIncrement = (e) => {
        setCount(count+1);
    }
    const handleDecrement = (e) => {
        setCount(count-1);
    }
    const handleCounter = (e) => {
        const data = parseInt(e.target.value);
        setCount(data);
    }
    return(
        <>
        {/* you can also directly use the state like below */}
            <label>Count:</label>{count}
            {/* <input type="number" value={count} onChange={handleCounter}/> */}
            <button onClick={handleIncrement}>Increment</button>
            <button onClick={(e)=>{handleDecrement(e)}}>Decrement</button>
        </>
    )
}
export default Task2;