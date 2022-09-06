import React, { useContext } from 'react';
import Child from './Child';
import { useValue } from './useValue';

function Parent() {

    const { value } = useValue();
    
    return (
        <div>
            <h2>{value} Parent component</h2>
            <Child />
        </div>
    );
}
export default Parent;