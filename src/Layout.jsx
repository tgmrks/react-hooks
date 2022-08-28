import React, { useEffect, useLayoutEffect, useState } from 'react';

function Layout() {
    const [value, setValue] = useState(0);

    useLayoutEffect(() => {
        if (value === 0)
            setValue(10 + Math.random() * 200);
    }, [value]);

    console.log("render: ", value);
    
    return(
        <div>
            <button onClick={() => setValue(0)}>Change value!</button>
            <h3>value: {value}</h3>
        </div>
    );
}

export default Layout;