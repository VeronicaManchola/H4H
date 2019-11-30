import React, { Component } from 'react';
import {BottomFixedNavbar, TopFixedNavbar} from '../Shared/Navbar';
import './Form.scss';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      
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
getValue = () => {
  document.getElementById('result').innerHTML = '';
  const incom = document.getElementById('incoming').value;
  const outcom = document.getElementById('outcoming').value;
  const capEndeudamiento = (incom - outcom) * 0.40;
  let risk;
  if (capEndeudamiento <= 10) {
    risk = 'Bajo';
  } else if (capEndeudamiento <= 30) {
    risk = 'Medio';
  } else if (capEndeudamiento <= 50 || capEndeudamiento >= 50 ) {
    risk = 'Alto';
  }
  document.getElementById('result').innerHTML = `${capEndeudamiento}% ${risk}`;
    // const result = network.run(inputVal);
    // console.log(result);
 }
  
  render(){
    return(
      <div>
        <TopFixedNavbar />
          {/* aca deberia ir el formulario */}
          <input id="incoming" class="number"></input>
          <input id="outcoming" class="number"></input>
          <input id="name" class="number"></input>
          <input id="comuna" class="number"></input>
          <input id="age" class="number"></input>
          <button onclick="getValue()">Calcular</button>
        <BottomFixedNavbar />
      </div>
    )
  }
}

export default Form;