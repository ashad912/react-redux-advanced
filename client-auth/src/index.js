import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import { applyMiddleware, createStore } from 'redux'
import reduxThunk from 'redux-thunk'
import App from './components/App';
import Welcome from './components/Welcome';
import Signup from './components/auth/Signup';
//import * as serviceWorker from './serviceWorker';
import reducers from './reducers'
import Feature from './components/Feature';
import Signout from './components/auth/Signout';
import Signin from './components/auth/Signin';
import SigninFormik from './components/auth/SigninFormik';


const store = createStore(reducers, {auth: { authenticated: localStorage.token}}, applyMiddleware(reduxThunk))

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <React.StrictMode>
        <App>
          <Route path="/" exact component={Welcome} />
          <Route path="/signup" component={Signup} />
          <Route path="/feature" component={Feature} />
          <Route path="/signout" component={Signout} />
          <Route path="/signin" component={SigninFormik} />
        </App>
      </React.StrictMode>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
//serviceWorker.unregister();
