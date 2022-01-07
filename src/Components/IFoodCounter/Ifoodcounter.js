import { useState } from "react";
import "./ifoodcounter.css"

function Ifoodcounter() {
    const [unit, setUnit] = useState(1);

    function down() {
        if(unit > 0) {
            setUnit(unit - 1)
        }
    }

    function up() {
        setUnit(unit + 1)    
    }
    return (
        <>
            <button className="countex-button-minus-activated"
                 onClick={down}>-</button>
            <span>{unit}</span>
            <button className="countex-button-plus-activated"
                onClick={up}>+</button>
        </>
    );
}

export default Ifoodcounter;