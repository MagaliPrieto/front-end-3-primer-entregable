import React from "react";

function Opciones({ opciones, onClick }) {
    return (
        <div className="opciones">
            <div className="opcion">
                <button className="boton" onClick={(e) => onClick("a")}>{opciones.a}</button>
            </div>
            <div className="opcion">
                <button className="boton" onClick={(e) => onClick("b")}>{opciones.b}</button>
            </div>
        </div>
    );
}

export default Opciones;
