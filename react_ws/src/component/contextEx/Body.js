import LSide from "./LSide"
import RSide from "./RSide"
import Center from "./Center"
function Body(){
    return (
        <div style={{display : "flex"}}>
            <LSide></LSide>
            <Center></Center>
            <RSide></RSide>
        </div>
    )
}

export default Body