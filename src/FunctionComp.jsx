import React, { useState } from 'react';

function FunctionComp() {
    const [btn, setBtn] = useState("Click here!!!");
    const [msg, setMsg] = useState("Click the button")
    
    function Clicking(){
        setBtn("Clicked !")
        setMsg("Thx for clicking the button")
    }

    return (
        <div>
            <hr/>
            <h3>{msg}</h3>
            <button onClick={()=>{Clicking()}}>{btn}</button>
        </div>
    );
}
export default FunctionComp;