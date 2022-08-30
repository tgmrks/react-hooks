import React, { useEffect, useRef, useState } from 'react';

function Ref() {
    const [name, setName] = useState("")
    const inputRef = useRef()
    const prevName = useRef('')

    function Focus() {
        inputRef.current.focus()
    }

    useEffect(() => {
        prevName.current = name
    }, [name])

    return (
        <div>
            <h3>My name is [{name}] and it used to be [{prevName.current}]</h3>
            <input
                ref={inputRef} type="text"
                onChange={e => setName(e.target.value)}
            />
            <button onClick={Focus}>Focus</button>
        </div>
    );
}
export default Ref;