import { useState, useEffect } from "react";
import "./ifoodcounter.css"

function Ifoodcounter() {
    const [unit, setUnit] = useState(1);
    const [btnStyle, setBtnStyle] = useState("countex-button-minus-activated");


    function down() {
        if(unit > 0) {
            setUnit(unit - 1);
        }
        if(unit <= 1) {
            setBtnStyle("countex-button-minus-deactivated");
        }
    }

    function up() {
        setUnit(unit + 1);
        setBtnStyle("countex-button-minus-activated");    
    }

    return (
        <>
            <button className={btnStyle}
                 onClick={down}>-</button>
            <span>{unit}</span>
            <button className="countex-button-plus-activated"
                onClick={up}>+</button>
        </>
    );
}

export default Ifoodcounter;