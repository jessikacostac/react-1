import React, { Component } from 'react'
import Formulario from '../../componentes/Formulario/Formulario'
import Grupo from '../../componentes/Formulario/Grupo/Grupo'
import Botao from '../../componentes/Formulario/Botao/Botao'
import Link from '../../componentes/Formulario/Link/Link'
import './Conta.css'


class Conta extends Component {
    state = { 
        nome: {
            valor: '',
            erro: ''
        },
        telefone: {
            valor: '',
            erro: ''
        },
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
        e.preventDefault()

        if (!this.estaDesabilitado()) {
            // TODO: enviar os dados para a API

            const usuario = {
                nome: this.state.nome.valor,
                telefone: this.state.telefone.valor,
                email: this.state.email.valor,
                senha: this.state.senha.valor
            }
            
            console.log('usuario', usuario)
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
        return !this.state.nome.valor ||
                this.state.nome.erro || 
               !this.state.telefone.valor || 
                this.state.telefone.erro ||
               !this.state.email.valor || 
                this.state.email.erro ||
               !this.state.senha.valor || 
                this.state.senha.erro
    }
    
    render() {
        return (
            <div className="conta">
                <Formulario 
                    titulo="Conta" 
                    texto="Envie o formulário para criar uma conta!"
                    onSubmit={this.handleSubmit}
                >
                    <Grupo erro={this.state.nome.erro}>
                        <Grupo.Legenda htmlFor="nome">
                            Nome:
                        </Grupo.Legenda>
                        <Grupo.CaixaTexto 
                            id="nome"
                            type="text" 
                            name="nome" 
                            placeholder="Nome"
                            minLength={10} 
                            required
                            onChange={this.handleChange}
                        />
                    </Grupo>

                    <Grupo erro={this.state.telefone.erro}>
                        <Grupo.Legenda htmlFor="telefone">
                            Telefone:
                        </Grupo.Legenda>
                        <Grupo.CaixaTexto 
                            id="telefone"
                            type="tel" 
                            name="telefone"
                            placeholder="Telefone"
                            required
                            onChange={this.handleChange} 
                        />
                    </Grupo>

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

                    <Link to="/login">
                        Fazer login
                    </Link>
                </Formulario>
            </div>
        )
    }
}

export default Conta