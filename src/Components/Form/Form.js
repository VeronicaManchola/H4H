import React, { Component } from 'react';
import firebase from '../../Firebase';
import 'bootstrap/dist/css/bootstrap.css';
import './Form.scss';

class Form extends Component {
  constructor(props) {
    super(props);
    this.ref = firebase.firestore().collection('usersData');
    this.state = {
        capEndeudamiento: String,
        nombre : '',
        edad: '',
        tipo: '',
        ingreso: '',
        gastos: ''
    }
  }

    onChange = (e) => {
        const state = this.state;
        state[e.target.name] = e.target.value;
        this.setState(state);
    };

    onSubmit = (e) => {
        e.preventDefault();

        const { nombre, edad, tipo, ingreso, gastos } = this.state;

        this.ref.add({
            nombre,
            edad,
            tipo,
            ingreso,
            gastos
        }).then((docRef) => {
            this.setState({
                nombre: '',
                edad: '',
                tipo: '',
                ingreso: '',
                gastos: ''
            });
            this.props.history.push("/")
        })
            .catch((error) => {
                console.error("Error adding document: ", error);
            });
    };

    changeSlide() {
        let active = document.getElementsByClassName('form-control active');
        console.log(active);
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
          <div className="container">
              <div className="row">
                  <div className="col-12">
                      <h1>Sin nombre</h1>
                  </div>
              </div>
              <form onSubmit={this.onSubmit}>
                  <div className="form-group">
                      <div>
                          <p>Hola cuentanos,<br/>¿cual es tu nombre?</p>
                          <input type="text" className="form-control" id="nombre" name="user" onChange={this.onChange} value={nombre} />
                      </div>
                      <div>
                          <p>¿Cual es tu edad?</p>
                          <input type="text" className="form-control" id="edad" name="age" onChange={this.onChange} value={edad} />
                      </div>
                      <div>
                          <p>¿Cual de las siguientes afirmaciones te representa?</p>
                          <button type="button" className="btn" id="tipo1" name="type" onClick={this.onChange} value={tipo}>Soy trabajador dependiente</button>
                          <button type="button" className="btn" id="tipo2" name="type" onClick={this.onChange} value={tipo}>Soy trabajador independiente</button>
                          <button type="button" className="btn" id="tipo3" name="type" onClick={this.onChange} value={tipo}>Soy estudiante</button>
                          <button type="button" className="btn" id="tipo4" name="type" onClick={this.onChange} value={tipo}>Soy jubilado</button>
                      </div>
                      <div>
                          <p>¿Cual es tu ingreso mensual liquido? </p>
                          <input type="number" className="form-control" id="ingreso" name="earnings" onChange={this.onChange} value={ingreso} />
                      </div>
                      <div>
                          <p>¿Cual es el total de sus gastos fijos mensuales?</p>
                          <small>son aquellos gastos que debemos hacer, es decir, que son necesarios y que tenemos claro cuanto y cuando hay que pagarlos.</small>
                          <input type="text" className="form-control d-none" id="gastos" name="expenses" onChange={this.onChange} value={gastos} />
                      </div>
                  </div>
                  <div className="row">
                      <div className="col-6 mx-auto">
                          <button type="submit" className="btn" onClick={this.changeSlide}>Siguiente</button>
                      </div>
                  </div>
              </form>
          </div>
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