import { useContext } from "react"
import { DarkModeContext } from "../../context/DarkModeContext";
function RSide(){
    let {isDark} = useContext(DarkModeContext);
    return (
        <div style={{flex : 1, height : "300px", color : isDark ? "white" : "black", backgroundColor : isDark ? "#222" : 'rgb(233 225 225)'}}>
            오른쪽메뉴
        </div>
    )
}

export default RSide