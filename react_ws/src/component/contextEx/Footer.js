import { useContext } from "react"
import { DarkModeContext } from "../../context/DarkModeContext";

function Footer(){
    let {isDark} = useContext(DarkModeContext);
    return (
        <div style={{height : "100px", color : isDark ? "white" : "black", backgroundColor : isDark ? "#222" : 'rgb(243 225 225)'}}>
            푸터
        </div>
    )
}

export default Footer