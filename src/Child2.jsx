import React from 'react';
import { memo } from 'react';

function Child2 ({value}) {
    console.log("child2 = ", value);
    return (
        <h1>{value}</h1>
    )
}
export default memo(Child2);