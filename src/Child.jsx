import React from 'react';
import { useValue } from './useValue'

function Child() {

    const { value } = useValue();
    
    return (
        <div>
            <h3>{value} Child component</h3>
        </div>
    );
}
export default Child;