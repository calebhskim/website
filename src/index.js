import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import {
  BrowserRouter as Router,
  Link,
  Route,
} from 'react-router-dom';

import App from './components/App';

const render = (Component) => {
  ReactDOM.render(
    <AppContainer>
      <Router>
        <div>
          <ul>
            <li><Link to='/'>Home</Link></li>
          </ul>
          <Route path='/' component={Component} exact={true} />
        </div>
      </Router>
    </AppContainer>,
    document.getElementById('root'),
  );
};

render(App);

// Hot Module Replacement API
if (module.hot) {
  module.hot.accept('./components/App', () => {
    render(App);
  });
}
