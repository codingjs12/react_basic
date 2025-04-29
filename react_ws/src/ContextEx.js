import { useContext, useState } from 'react';
import  { MyContext }  from './context/MyContext';


function ContextEx() {

    let [isDark, setDark] = useState(false);
    return (
        <>
            <MyContext.Provider value={{isDark, setDark}}>
                <Child1></Child1>
            </MyContext.Provider>
        </>
    )
}

function Child1 (props) {

    let {isDark} = useContext(MyContext);

    console.log();

    return (
        <div>
            <span style={{color : isDark ? "black" : "red"}}>자식 컴포넌트 11
            <Child2></Child2>
            </span>
        </div>
    )

}

function Child2(props) {

    let {isDark, setDark} = useContext(MyContext);

    return (
        <div>
            자식 컴포넌트 222
            <button onClick={()=>{
                setDark(!isDark);
            }}>검은색/빨간색</button>
            <Child3></Child3>
        </div>

    )
}

function Child3(props) {
    let map = useContext(MyContext);
    console.log(map);
    return (
        <div>
            자식 컴포넌트 333
            {props.isDark}
        </div>
    )
}

export default ContextEx