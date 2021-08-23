import React from 'react';
import "./index";

class Calculator extends React.Component {

    state = {
        firstNumer : "",
        secondNumber : "",
        result : ""
    };

    cleanNumbers = () => {
        this.setState({
            firstNumer : "",
            secondNumber : ""
        });
    }

    onClickButtons = (operation) => {
        var number1 =  parseInt( this.state.firstNumer );
        var number2 =  parseInt( this.state.secondNumber );
        var opResult = 0;
        if(operation === "suma"){
            opResult = number1+number2;
        }
        else if(operation === "resta"){
            opResult = number1-number2;
        }
        else if(operation === "multi"){
            opResult = number1*number2;
        }
        else if(operation === "divicion"){
            opResult = number1/number2;
        }
        this.setState({result : opResult});
        this.cleanNumbers();
    }

    render(){
        return(
            <div className="container">

                <h2 style={{textAlign:"center"}} >Calculadora Simple</h2>

                Primer Numero:
                <input 
                    className="form-control" 
                    type="number" 
                    value={this.state.firstNumer} 
                    onChange={ e => this.setState( {firstNumer: e.target.value} )}  
                />
                Segundo Numero:
                <input 
                    className="form-control" 
                    type="number" 
                    value={this.state.secondNumber} 
                    onChange={ e => this.setState( {secondNumber: e.target.value} )}  
                />

                Resultado:
                <input className="form-control" type="number" value={this.state.result} disabled="true"/>

                <button 
                    type="button" 
                    className="btn btn-primary" 
                    style={{marginRight: "5px", marginTop: "10px"}}
                    onClick={() => this.onClickButtons("suma")}
                >
                    Suma
                </button>

                <button 
                    type="button" 
                    className="btn btn-primary" 
                    style={{marginRight: "5px", marginTop: "10px"}}
                    onClick={() => this.onClickButtons("resta")}
                >
                    Resta
                </button>

                <button 
                    type="button" 
                    className="btn btn-primary" 
                    style={{marginRight: "5px", marginTop: "10px"}}
                    onClick={() => this.onClickButtons("multi")}
                >
                    Multiplicacion
                </button>

                <button 
                    type="button" 
                    className="btn btn-primary" 
                    style={{marginRight: "5px", marginTop: "10px"}}
                    onClick={() => this.onClickButtons("divicion")}
                >
                    Divicion
                </button>

            </div>
        );
    }
}

export default Calculator;