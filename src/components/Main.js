import React, { Component } from "react";
import data from "./data.json";
import Historia from "./Historia";
import Opciones from "./Opciones";
import Recordatorio from "./Recordatorio";

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            step: 1,
            index: 0,
            prevSelection: '',
        };
    }

    incrementar(selection) {
        const newStep = this.state.step + 1;
        const newIndex = data.findIndex(d => d.id === `${newStep}${selection}`);
        this.setState({
            step: newStep,
            index: newIndex,
            prevSelection: selection
        });
    }

    render() {
        const datos = data[this.state.index];

        return (
            <div className="layout">
                <Historia historia={datos.historia} />
                {this.state.step < 5 && <Opciones opciones={datos.opciones} onClick={(e) => this.incrementar(e)}/>}
                {this.state.prevSelection !== '' && <Recordatorio opcion={this.state.prevSelection}/>}
            </div>
        );
    }
}

export default Main;
