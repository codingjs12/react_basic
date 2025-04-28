import {useState, useRef, useEffect} from 'react'
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import DialogSample from './DialogSample';
function Ref() {

    let [numState, setNum] = useState(1);
    let numVar = 1;
    let numRef = useRef(1);

    let [value, setValue] = useState("");

    let inputRef = useRef();
    
    useEffect(()=>{
        inputRef.current.focus();
    }, [])

    return (
        <>
            <DialogSample></DialogSample>
            <div>{numState} <Button size='small' variant="text" startIcon={<AddIcon/>} onClick={() => setNum(numState + 1)}> state 증가 </Button></div>
            <div>
                {numVar}<Button onClick={()=>{
                    numVar += 1;
                    console.log(numVar);
                }}>var 증가</Button></div>
            <div>
                {numRef.current}<Button variant='outlined' onClick={()=> {
                    numRef.current += 1;
                    console.log(numRef.current);
                }}>numRef증가</Button>
            </div>
            <input ref={inputRef} value={value} onChange={(e)=>{setValue(e.target.value)}}></input>
            <Button variant='contained' onClick={() => {
                setNum(numState + parseInt(value));
                setValue("");
                inputRef.current.focus();
            }}>추가</Button>
            <Button variant="text">Text</Button>
            
        </>
    )
}

export default Ref