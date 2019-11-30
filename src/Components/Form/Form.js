import React, { Component } from 'react';
import '../../../node_modules/bootstrap/dist/css/bootstrap.css';
import './Form.scss';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
        capEndeudamiento: String
    }
  }

    changeSlide() {
        let slides = document.getElementsByClassName('question');
        let active = document.getElementsByClassName('question d-block');
        let slide = parseInt(active[0].dataset.slide) + 1;

        active[0].classList.add('d-none');
        active[0].classList.remove('d-block');

        if(slide === 4) {
            this.props.history.push("/")
        }

        slides[slide].classList.remove('d-none');
        slides[slide].classList.add('d-block');
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
    const { nombre, edad, tipo, ingreso, gastos } = this.state;
    return(
      <div>
          <div className="container mainFormContainer m-auto">
              <div className="row">
                  <div className="col-12">
                  </div>
              </div>
              <form onSubmit={this.onSubmit}>
                  <div className="form-group">
                      <div className="question d-block"  data-slide="0">
                          <p className="title">Hola cuentanos,<br/>¿cual es tu nombre?</p>
                          <input type="text" className="form-control" id="nombre" name="user"/>
                      </div>
                      <div className="question d-none"  data-slide="1">
                          <p className="title">¿Cual es tu edad?</p>
                          <input type="text" className="form-control" id="edad" name="age" />
                      </div>
                      <div className="question d-none" data-slide="2">
                          <p className="title">¿Cual de las siguientes afirmaciones te representa?</p>
                          <button type="button" className="btn" id="tipo1" name="type" >Soy trabajador dependiente</button>
                          <button type="button" className="btn" id="tipo2" name="type" >Soy trabajador independiente</button>
                          <button type="button" className="btn" id="tipo3" name="type">Soy estudiante</button>
                          <button type="button" className="btn" id="tipo4" name="type">Soy jubilado</button>
                      </div>
                      <div className="question d-none" data-slide="3">
                          <p className="title">¿Cual es tu ingreso mensual liquido? </p>
                          <input type="number" className="form-control" id="ingreso" name="earnings"  />
                      </div>
                      <div className="question d-none" data-slide="4">
                          <p className="title">¿Cual es el total de sus gastos fijos mensuales?</p>
                          <small>son aquellos gastos que debemos hacer, es decir, que son necesarios y que tenemos claro cuanto y cuando hay que pagarlos.</small>
                          <input type="text" className="form-control d-none" id="gastos" name="expenses"/>
                      </div>
                  </div>
                  <div className="row">
                      <div className="col-6 m-auto">
                          <button type="submit" className="btn form-button" onClick={this.changeSlide}>Siguiente</button>
                      </div>
                  </div>
              </form>
          </div>
        {/* <button onClick={this.getCapEndeudamiento()}>Calcular</button> */}
      </div>
    )
  }
}

export default Form;