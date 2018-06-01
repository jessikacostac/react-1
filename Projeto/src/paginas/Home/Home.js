import React, { Component } from 'react'
import Postit from '../../componentes/Postit/Postit'
import './Home.css'


class Home extends Component {
    state = {
        postit: null,
        postits: []
    }

    componentDidMount() {
        // TODO: buscar lista de postit da API
        // Mock da lista de postit
        
        const postits = [
            {
                id: '53ea7f50-7c45-4506-ae89-840b37cbbf6e',
                titulo: 'Estudar javascript',
                texto: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
            },
            {
                id: 'f309983e-316f-42ce-ad01-193e936fe224',
                titulo: 'Estudar javascript',
                texto: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
            },
            {
                id: '0828adbb-21fd-44d4-939a-d2f213940ada',
                titulo: 'Estudar javascript',
                texto: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
            }
        ]

        this.setState({ postits: postits })
    }

    render = () => {
        return (
            <div className="home">
                <Postit editando={true} />
                
                <div className="home__lista">
                    {this.state.postits.map(postit => (
                        <Postit 
                            key={postit.id}
                            id={postit.id}
                            titulo={postit.titulo}
                            texto={postit.texto}
                        />
                    ))}
                </div>
            </div>
        )
    }
}

export default Home