import React, { Component } from 'react'

import { BrowserRouter, Route, Switch} from 'react-router-dom'

import Home from './pages/Home'
import Film from './pages/Film'
import Error404 from './pages/Error404'
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <div>
          
          <Switch>
            <Route exact path="/" component={Home}/>
              {/* <Home /> */}
            <Route path="/Film/:id" component={Film}/>
              {/* <Film /> */}
            <Route path="*" component={Error404}/>
          </Switch>
        
        </div>
      </BrowserRouter>
    )
  }
}

export default App