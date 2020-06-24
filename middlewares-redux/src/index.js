import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route } from 'react-router-dom'
import App from './components/App'
import Root from 'Root'


ReactDOM.render(
    <Root>
        <React.StrictMode>
            <BrowserRouter>
                <Route path="/" component={App}/>
            </BrowserRouter>
        </React.StrictMode>
    </Root>, 
document.querySelector('#root'))
