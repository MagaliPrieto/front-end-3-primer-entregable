import React, { Component } from "react";

class Recordatorio extends Component {
    constructor(props) {
        super(props);
    }

    shouldComponentUpdate(nextProps, nextState) {
        return this.props.opcion !== nextProps.opcion;
    }

    render() {
        console.log("Recordatorio render");
        return (
            <h2 className="recordatorio">Tu última opcion fue [{this.props.opcion.toUpperCase()}]</h2>
        );
    }
}

export default Recordatorio;
