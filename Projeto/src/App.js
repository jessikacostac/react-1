import React, { Component } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import Navbar from './componentes/Navbar/Navbar'
import Home from './paginas/Home/Home'
import Login from './paginas/Login/Login'
import Conta from './paginas/Conta/Conta'
import Contato from './paginas/Contato/Contato'
import QuemSomos from './paginas/QuemSomos/QuemSomos'
import NaoEncontrada from './paginas/NaoEncontrada/NaoEncontrada'
import './App.css'


// Este componente é como se fosse o body do HTML
class App extends Component {
  state = { 
    usuario: false
  }

  // TODO: usar render do React Router
  logaUsuario = () => {
    this.setState({ usuario: true })
  }

  deslogaUsuario = () => {
    this.setState({ usuario: false })
  }

  render() {
    return (
      <div className="app">
        <Navbar 
          usuario={this.state.usuario} 
          onSairClick={this.deslogaUsuario}
        />

        <Switch>
          <Route exact path="/" render={props => (
            this.state.usuario ? (
              <Home />
            ) : (
              <Redirect to="/login" />
            )
          )} />

          <Route path="/login" render={props => (
            <Login onEnviarClick={this.logaUsuario} {...props} />
          )} />

          <Route path="/conta" component={Conta} />
          <Route path="/contato" component={Contato} />
          <Route path="/quem-somos" component={QuemSomos} />
          <Route component={NaoEncontrada} />
        </Switch>
      </div>
    );
  }
}

export default App