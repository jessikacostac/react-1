import React, { Component } from 'react'
import FaClose from 'react-icons/lib/fa/close'
import './Postit.css'


class Postit extends Component {
    state = {
        id: this.props.id,
        titulo: this.props.titulo || '',
        texto: this.props.texto || '',
        editando: this.props.editando
    }

    handleCampoChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleBotaoRemoverClick = e => {
        e.stopPropagation()

        this.setState({ editando: false })

        // TODO: remover dados na API
        console.log('remover', this.state.id)
    }

    handleFormularioClick = e => {
        if (this.state.id) {
            this.setState({ editando: true })
        }
    }

    handleFormularioSubmit = e => {
        e.preventDefault()
        
        if (this.props.id) {
            this.setState({ editando: false })

            const postit = {
                id: this.state.id,
                titulo: this.state.titulo,
                texto: this.state.texto
            }

            // TODO: alterar dados na API
            console.log('editar', postit)
        } else {
            const postit = {
                titulo: this.state.titulo,
                texto: this.state.texto
            }
            
            // TODO: cadastrar dados na API
            console.log('cadastrar', postit)

            this.setState({
                titulo: '',
                texto: ''
            })
        }
    }

    render = () => {
        return (
            <form 
                className="postit"
                onClick={this.handleFormularioClick}
                onSubmit={this.handleFormularioSubmit}
            >
                {this.state.id && this.state.editando && (
                    <button 
                        type="button"
                        className="postit__botao-remover" 
                        onClick={this.handleBotaoRemoverClick}
                    >
                        <FaClose />
                    </button>
                )}

                <input 
                    className="postit__titulo"
                    type="text" 
                    name="titulo"
                    value={this.state.titulo} 
                    placeholder="Titulo..."
                    readOnly={!this.state.editando}
                    onChange={this.handleCampoChange}
                    area-label="titulo"
                />

                <textarea 
                    className="postit__texto"
                    name="texto"
                    value={this.state.texto}
                    placeholder="Digite o texto..."
                    rows={5}
                    readOnly={!this.state.editando}
                    onChange={this.handleCampoChange}
                    area-label="texto"
                />

                {(!this.state.id || this.state.editando) && (
                    <button className="postit__botao-concluir">
                        Concluido
                    </button>
                )}
            </form>
        )
    }   
}

export default Postit