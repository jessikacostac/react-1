import React from 'react'
import './Logo.css'


function Logo(props) {
    return (
        <span className="logo">
            <strong className="logo__destaque">{'{ '}</strong>
            reprograma
            <strong className="logo__destaque">postit</strong>
            <strong className="logo__destaque">{' }'}</strong>
        </span>
    )
}

export default Logo