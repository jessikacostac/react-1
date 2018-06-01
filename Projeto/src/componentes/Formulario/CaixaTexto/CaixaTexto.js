import React from 'react'
import './CaixaTexto.css'


function CaixaTexto(props) {
    function valida(valor) {
        if (props.required && valor.trim() === '') {
            return 'Este campo é obrigatório'
        }

        if (props.minLength && valor.length < props.minLength) {
            return `Digite pelo menos ${props.minLength} caracteres`
        }

        const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        if (props.type === 'email' && !regex.test(valor)) {
            return `O email digitado é inválido`
        }

        // TODO: adicionar máscara de telefone
    }

    function handleChange(e) {
        const nome = e.target.name
        const valor = e.target.value
        const erro = valida(valor)

        props.onChange(nome, valor, erro)
    }

    return (
        <input 
            className="caixa-texto" 
            id={props.id}
            type={props.type} 
            name={props.name}
            placeholder={props.placeholder}
            onChange={handleChange} 
        />
    )
}

export default CaixaTexto