import React, { Component } from 'react';

import './Form.scss';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      capEndeudamiento: String
    }
  
  }

  
  //bring the questions from json file
  async componentDidMount() {
    
  }

  // red neuronal para procesar las respuestas 
// const network = new brain.NeuralNetwork();

// network.train([
//   { input: [0], output: [0] },
//   { input: [5], output: [0.5] },
//   { input: [100], output: [1] },
//  ]);

// sacar el nivel de endeudamiento
getCapEndeudamiento = () => {
  // const incom = document.getElementById('incoming').value;
  // const outcom = document.getElementById('outcoming').value;
  // const capEndeudamiento = (outcom % incom) * 100;
  // if (capEndeudamiento <= 30) {
  //   this.state.capEndeudamiento = 'Moderado';
  // } else if (capEndeudamiento <= 40) {
  //   this.state.capEndeudamiento = 'Alto';
  // } else if (capEndeudamiento <= 50 || capEndeudamiento >= 50 ) {
  //   this.state.capEndeudamiento = 'Extremo';
  // }
    // const result = network.run(inputVal);
    // console.log(result);
 }

 getClass() {
   return 'className dinamic'
 }
  
  render(){
    return(
      <div>
        {/* aca deberia ir el formulario */}
        <input id="incoming" className={this.getClass()}></input>
        <input id="outcoming" className={this.getClass()}></input>
        <input id="name" className={this.getClass()}></input>
        <input id="comuna" className={this.getClass()}></input>
        <input id="age" className={this.getClass()}></input>
        <button onClick={this.getCapEndeudamiento()}>Calcular</button>
      </div>
    )
  }
}

export default Form;