import Product from "../component/Product";
import { useState } from "react";
function ProductMain() {

    let [isFlag, setFlag] = useState(true);

    return (
        <div>
            <button onClick={() => {
                setFlag(!isFlag);
            }}>{isFlag ? "가리기" : "보이기"}</button>
            {isFlag ? <Product></Product> : null}

        </div>
    )
}

export default ProductMain