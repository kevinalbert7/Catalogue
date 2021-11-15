import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import catalog from '../catalogue.json'

class Home extends Component {
    render() {
        return (
            <>
                <h1>Home</h1>
                {catalog.map(element =>
                    <Link key={element.id} to={`/Film/${element.id}`}
                    >
                        <div>
                        {element.title}
                        </div>
                    </Link> 
                )}
            </>
        )
    }
}

export default Home