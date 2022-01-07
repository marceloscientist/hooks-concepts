import { useState } from "react";

function Ifoodcounter() {
    const [quantity, updateQuantity] = useState(1);

    return (
        <>
            <span onClick={()=>updateQuantity(quantity - 1)}>-</span>
            <span>{quantity}</span>
            <span onClick={()=>updateQuantity(quantity + 1)}>+</span>
        </>
    );
}

export default Ifoodcounter;