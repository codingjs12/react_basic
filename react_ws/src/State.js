import {useState} from 'react'


function State() {
  /*
    let numState = useState(1); // useState 는 리스트를 반환
    let num = numState[0]; // 값
    let setNum = numState[1]; // 함수
   
    let [num, setNum] = useState(1);
  
    const fnIncrease = function() {
      setNum(++num);
    }
  
  */
  let [list, setList] =useState([
    <li key = "1">홍길동</li>,
    <li key = "2">김철수</li>,
    <li key = "3">박영희</li>
  ]);

  let name = "";
  const fnAddUser = () => {
    let item = <li key={list.length + 1}>{name}</li>
    // list.push(item);
    // let newList = [...list, item];
    // newList.push(item);
    setList([...list, item]);
    console.log(list);
  }
  return (
    <div className="App">
      {/* {num}
      <div>
        <button onClick={fnIncrease}>증가!</button>
      </div> */}
      <input onChange={(e) => {
        name = e.target.value;
      }}>
      </input>
      <button onClick={fnAddUser}>추가</button>
      {list}
    </div>
  );
}

export default State;
