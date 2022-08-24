import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Effect() {
    const [count, setCount] = useState(0)
    const [timer, setTimer] = useState(0)
    const [data, setData] = useState("")

    useEffect(() => {
        console.log("Effect called for TIMER !");
        setTimeout(() => { setTimer(timer + 1) }, 5000);
        axios.get("https://jsonplaceholder.typicode.com/comments")
            .then((response) => {
                console.log("Effect called for COUNT !");
                setData(response.data[count].email);
            });
    }, [timer, count]);

    return (
        <div>
            <h3>{data}</h3>
            <hr />
            <h3>Click count: {count}</h3>
            <button onClick={() => { setCount(count + 1) }}>+</button>
            <hr />
            <h3>{timer}</h3>
        </div>
    );
}
export default Effect;