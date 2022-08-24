import React, { useEffect, useState } from 'react';

function Effect() {
    const [count, setCount] = useState(0)
    const [timer, setTimer] = useState(0)

    useEffect(() => {
        setTimeout(() => { setTimer(timer + 1) }, 1000);
        console.log("Effect called!");
    }, [timer]);

    return (
        <div>
            <h3>Click count: {count}</h3>
            <button onClick={() => { setCount(count + 1) }}>+</button>
            <hr />
            <h3>{timer}</h3>
        </div>
    );
}
export default Effect;