import React from 'react';
import { memo } from 'react';

function Child2 ({value, setValue}) {
    console.log("child2 = ", value);
    return (
        <div>
            <h1>{value}</h1>
            <button onClick={setValue}>increment2</button>
        </div>
    )
}
export default memo(Child2);