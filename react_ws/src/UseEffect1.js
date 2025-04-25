import { useEffect } from "react";
import { useState } from "react";

function Effect() {
    let [num, setNum] = useState(1);
    let [num2, setNum2] = useState(1);
    let value = 0;

    const fnIncrease = function() {
        setNum(++num);
    }

    useEffect(()=> {
        console.log("useEffect 호출 됨!");
    }, [num])
    
    return (
        <div>
            <div>{num}</div>
            <button onClick={fnIncrease}>증가</button>
            <button onClick={() => {
                setNum(num = num + 100);
            }}>100증가</button>
            <hr></hr>
            <div>{num2}</div>
            <button onClick={() => {
                setNum2(num2 = num2 * 100);
            }}>100곱하기</button>
        </div>
    )
}

export default Effect