import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import './Menu.css'


class Menu extends Component {
    state = {
        aberto: false
    }

    abreOuFecha = () => {
        this.setState(prevState => {
            return { aberto: !prevState.aberto }
        })
    }

    handleOpcaoClick = e => {
        if (this.state.aberto) {
            this.abreOuFecha()
        }
    }

    handleSairClick = e => {
        this.props.onSairClick()
        this.handleOpcaoClick()
    }

    render = () => {
        let botaoClasses = 'navbar-menu__botao'
        let opcoesClasses = 'navbar-menu__opcoes'

        if (this.state.aberto) {
            botaoClasses += ' navbar-menu__botao--aberto'
            opcoesClasses += ' navbar-menu__opcoes--aberto'
        }

        return (
            <nav className="navbar-menu">
                <a className={botaoClasses} onClick={this.abreOuFecha}>
                    Menu
                </a>

                <ul className={opcoesClasses}>
                    <li>
                        <NavLink to="/quem-somos" activeClassName="navbar-menu__opcoes--ativo" onClick={this.handleOpcaoClick}>
                            Quem somos
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/contato" activeClassName="navbar-menu__opcoes--ativo" onClick={this.handleOpcaoClick}>
                            Contato
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/login" activeClassName="navbar-menu__opcoes--ativo" onClick={this.handleSairClick}>
                            {this.props.usuario ? 'Sair' : 'Login'}
                        </NavLink>
                    </li>
                </ul>
            </nav>
        )
    }
}

export default Menu