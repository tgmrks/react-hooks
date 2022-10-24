import React from 'react';
import { memo } from 'react';

function Child1 ({value}) {
    console.log("child1 = ", value);
    return (
        <h1>{value}</h1>
    )
}
export default memo(Child1);