import { useContext } from "react";
import { MyContext } from "../context/MyContext";

function Child1(){
  return (
    <>
      <div>자식 1</div>
      <Child2></Child2>
    </>
  )
}

function Child2(){
  const value = useContext(MyContext);
  console.log("context ==> ", value);
  return (
    <>
      <div>자식 2</div>
    </>
  )
}

function HeaderContext(props){
    return (
      <div>
        <Child1></Child1>
        <h2 style={{color : "red", fontSize:"30px"}}>
            <a href="/" onClick={(e)=>{
                e.preventDefault();
                props.fnHeader(props.contents);
            }}>{props.title}</a>
        </h2>
      </div>
    )
}

export default HeaderContext