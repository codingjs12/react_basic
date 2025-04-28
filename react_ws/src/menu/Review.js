import {useState, useEffect} from 'react'

const Header = ({title, fnInfo}) => {
    return <h1><a href="/" onClick={(e)=> {
        
        fnInfo(title);
    }}>{title}</a></h1>

}

function Body(props) {
    return (
        <div>
            {props.count}
            <button onClick={()=> {
                props.fnCount(props.count+1);
            }}>증가!
            </button>
        </div>
    )
}

function Footer(props) {
    let [student, setStu] = useState({stuNo : "", stuName : "", stuDept : ""});

    const fnInput = (e) => {
        setStu({...student, [e.target.id] : e.target.value})
    }

    return (
        <>
        
        <div><input placeholder='학번'  id="stuNo" onChange={fnInput} value={student.stuNo}></input></div>
        <div><input placeholder='이름'  id="stuName" onChange={fnInput} value={student.stuName}></input></div>
        <div><input placeholder='학과'  id="stuDept" onChange={fnInput} value={student.stuDept}></input></div>
        <div><button onClick={() => {
            props.fnSet([...props.list, student]);
            setStu({stuNo : "", stuName : "", stuDept : ""});
        }}>추가</button></div>
        <hr></hr>
        <ul>
            {props.list.map((item) => {
                return(
                <li key={item.stuNo}>
                    학번 : {item.stuNo},
                    이름 : {item.stuName},
                    학과 : {item.stuDept}
                </li>
                )
            })}
        </ul>
        
        </>
    ) 
}

function Review() {

    let [count, setCount] = useState(1);
    let [number, setNumber] = useState(0);
    let [list, setList] = useState([
        {stuNo : "1231", stuName : "홍길동", stuDept : "컴퓨터"},
        {stuNo : "1232", stuName : "김철수", stuDept : "전기"},
        {stuNo : "1233", stuName : "박영희", stuDept : "디자인"}]);



    useEffect(()=>{
        alert("안녕");

        return () => {
            alert("클린업 함수!");
        }
    }, [count] );

    return (
        <div>
            <Header title="Hello React" fnInfo={(title)=>{
                alert(title);
            }}></Header>
            <Header title="React NoJam" fnInfo={(title)=>{
                alert(title + "입니다.");
            }}></Header>
            <Header title="Web Programming" fnInfo={(title)=>{
                alert(title);
            }}></Header>

            <hr></hr>
            <Body count={count} fnCount={setCount}></Body>

            <hr></hr>
            <Body count={number} fnCount={setNumber}></Body>

            <hr></hr>
            <Footer list={list} fnSet={setList} ></Footer>
        </div>
    )
}

export default Review