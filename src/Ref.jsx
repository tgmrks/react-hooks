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
            <input
                ref={inputRef} type="text"
                onChange={e => setName(e.target.value)}
            />
            <p>
                My name is [{name}] and it used to be [{prevName.current}]
            </p>
            <button onClick={Focus}>Focus</button>
        </div>
    );
}
export default Ref;