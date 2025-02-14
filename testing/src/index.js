// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import * as serviceWorker from './serviceWorker';

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();

///////////////////////////////////////////////////////////////////////////////////////

import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'
import Root from 'Root'


// StrictMode currently helps with:

// Identifying components with unsafe lifecycles
// Warning about legacy string ref API usage
// Warning about deprecated findDOMNode usage
// Detecting unexpected side effects
// Detecting legacy context API

// Second argument, reference to DOM element on the page
ReactDOM.render(
    <Root>
        <React.StrictMode>
            <App/>
        </React.StrictMode>
    </Root>, 
document.querySelector('#root'))
