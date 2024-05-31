import React from "react";
import './Buttons.css';
function NewsButtons({ onSubstract, onReset, onAdd}){
    return(
        <div>
            <button onClick={onSubstract}>Restar</button>
            <button onClick={onReset}>Reiniciar</button>
            <button onClick={onAdd}>Sumar</button>
        </div>
    );
}

export default NewsButtons