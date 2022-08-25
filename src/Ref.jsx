import React, { useRef, useState } from 'react';

function Ref() {
    const [name, setName] = useState("")
    const inputRef = useRef()

    function Focus() {
        inputRef.current.focus()
    }

    return (
        <div>
            <input
                ref={inputRef} type="text"
                onChange={e => setName(e.target.value)}
            />
            <p>My name is {name}</p>
            <button onClick={Focus}>Focus</button>
        </div>
    );
}
export default Ref;