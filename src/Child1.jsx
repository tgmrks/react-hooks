import React from 'react';
import { memo } from 'react';

function Child1 ({value, setValue}) {
    console.log("child1 = ", value);
    return (
        <div>
            <h1>{value}</h1>
            <button onClick={setValue}>increment1</button>
        </div>
    )
}
export default memo(Child1);