import {useState, useEffect} from "react";

function Product() {
    
    let [list, setList] = useState([]);
    let board = {
        BOARDNO : "",
        TITLE : "",
        USERNAME : "",
        CNT : "",
        CDATETIME : ""
    }
    useEffect(() => {
        fetch("http://localhost:3000/board")
        .then(res => res.json())
        .then(data => {
            console.log(data);
            setList(data.list);
        });
    }, [])

    const fnInput = (e) => {
        board[e.target.id] = e.target.value;
    }

    return (
        <div>
            <div><input placeholder="번호" onChange={fnInput} id="BOARDNO"></input></div>
            <div><input placeholder="제목" onChange={fnInput} id="TITLE"></input></div>
            <div><input placeholder="작성자" onChange={fnInput} id="USERNAME"></input></div>
            <div><input placeholder="조회수" onChange={fnInput} id="CNT"></input></div>
            <div><input placeholder="작성일" onChange={fnInput} id="CDATETIME"></input></div>
            <div><button onClick={() => {
                setList([...list, board])
            }}>저장</button></div>
            <table>
                <tr>
                    <th>번호</th>
                    <th>제목</th>
                    <th>작성자</th>
                    <th>조회수</th>
                    <th>작성일</th>
                </tr>
                {list.map((item) => {
                  return (
                    <tr key={item.BOARDNO}>
                        <td>{item.BOARDNO}</td>
                        <td>{item.TITLE}</td>
                        <td>{item.USERNAME}</td>
                        <td>{item.CNT}</td>
                        <td>{item.CDATETIME}</td>
                        
                    </tr>
                    
                  )
                })}

            </table>
        </div>
    )
}

export default Product