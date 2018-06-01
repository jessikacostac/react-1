import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import Formulario from '../../componentes/Formulario/Formulario'
import Grupo from '../../componentes/Formulario/Grupo/Grupo'
import Botao from '../../componentes/Formulario/Botao/Botao'
import Link from '../../componentes/Formulario/Link/Link'
import './Login.css'


class Login extends Component {
    state = { 
        email: {
            valor: '',
            erro: ''
        },
        senha: {
            valor: '',
            erro: ''
        }
    }

    handleSubmit = e => {
        console.log("props", this.props)

        e.preventDefault()

        if (!this.estaDesabilitado()) {
            // TODO: enviar os dados para a API
            
            const usuario = {
                email: this.state.email.valor,
                senha: this.state.senha.valor
            }

            console.log("usuario", usuario)

            this.props.onEnviarClick()

            this.props.history.push('/')
        }
    }

    handleChange = (nomeDoInput, valorDoInput, erro) => {
        this.setState({
            [nomeDoInput]: { 
                valor: valorDoInput, 
                erro: erro
            }
        })
    }

    estaDesabilitado() {
        return !this.state.email.valor || 
                this.state.email.erro ||
               !this.state.senha.valor || 
                this.state.senha.erro
    }
    
    render() {
        return (
            <div className="login">
                <Formulario 
                    titulo="Login" 
                    texto="Entre com seu email e senha."
                    onSubmit={this.handleSubmit}
                >
                    <Grupo erro={this.state.email.erro}>
                        <Grupo.Legenda htmlFor="email">
                            Email:
                        </Grupo.Legenda>
                        <Grupo.CaixaTexto 
                            id="email"
                            type="email" 
                            name="email"
                            placeholder="Email"
                            required
                            onChange={this.handleChange} 
                        />
                    </Grupo>

                    <Grupo erro={this.state.senha.erro}>
                        <Grupo.Legenda htmlFor="senha">
                            Senha:
                        </Grupo.Legenda>
                        <Grupo.CaixaTexto
                            id="senha" 
                            type="password" 
                            name="senha" 
                            placeholder="Senha"
                            minLength={6}
                            required 
                            onChange={this.handleChange}
                        />
                    </Grupo>

                    <Botao disabled={this.estaDesabilitado()}>
                        Enviar
                    </Botao>

                    <Link to="/conta">
                        Criar uma conta
                    </Link>
                </Formulario>
            </div>
        )
    }
}

export default Login