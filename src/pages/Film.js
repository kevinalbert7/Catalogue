import React, { Component } from 'react'

import catalog from '../catalogue.json'

class Film extends Component {
    
    render() {
        const { id } = this.props.match.params
        const film = catalog.find( element => element.id === Number(id))
        return (
            <div className="container">
                    <p>{film.title}</p>
                    <p>{film.directory}</p>
                    <p>{film.stars}</p>
                    <img src={film.image}/>
                    <p>{film.description}</p>
            </div>
        )         
    }
}

export default Film
