import { useContext } from "react"
import { DarkModeContext } from "../../context/DarkModeContext";

function Center(){
    let {isDark} = useContext(DarkModeContext);
    return (
        <div style={{flex : 2, height : "300px", color : isDark ? "white" : "black", backgroundColor : isDark ? "#222" : 'rgb(222 213 213)'}}>
            가운데 메뉴
        </div>
    )
}

export default Center