import { useReducer, useState } from 'react'

function reducer(state, action) {
    switch(action.type) {
        case "increment" :
            return {number : state.number + 1};
        case "decrement" :
            return {number : state.number - 1};
        case "reset" :
            return {number : 0};
        default :
            throw new Error("에러!!!");
    }
}
let initialValue = {number : 0}

function ReducerEx() {
    let [count, setCount] = useState(0);

    let [state, dispatch] = useReducer(reducer, initialValue);

    const fnCount = (type) => {
        switch(type) {
            case "increment"  : 
                setCount(count+1);
                break;
            case "decrement" :
                setCount(count-1);
                break;
            case "reset" :
               setCount(0);
               break;
            default :
                throw new Error("무언가 잘못되었어요");
        }


    }

    return (
        <>
            <h3>useState로 작성(익명 함수 사용)</h3>
            <h2>{count}</h2>
            <div>
                <button onClick={()=>{
                    setCount(count+1);
                }}>증가</button>
                <button onClick={()=>{
                    setCount(prev => prev-1);
                }}>감소</button>
                <button onClick={()=>{
                    setCount(0);
                }}>초기화</button>
            </div>
            <hr></hr>
            <h3>useState로 작성(함수 사용)</h3>
            <h2>{count}</h2>
            <div>
                <button onClick={()=>{
                    fnCount("increment");
                }}>증가</button>
                <button onClick={()=>{
                    fnCount("decrement");
                }}>감소</button>
                <button onClick={()=>{
                    fnCount("reset");
                }}>초기화</button>
            </div>
            <hr></hr>
            <h3>reducer로 작성</h3>
            <h2>{state.number}</h2>
            <div>
                <button onClick={()=>{
                    dispatch({type : "increment"});
                }}>증가</button>
                <button onClick={()=>{
                    dispatch({type : "decrement"});
                }}>감소</button>
                <button onClick={()=>{
                    dispatch({type : "reset"});
                }}>초기화</button>
            </div>

        </>
    )
}

export default ReducerEx