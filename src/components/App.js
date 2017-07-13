import React from 'react';
import PropTypes from 'prop-types';
import {
  BrowserRouter,
  Link,
  Route,
  StaticRouter,
} from 'react-router-dom';

import Home from './Home';

const App = (props) => {
  const Router = props.isBuild ? StaticRouter : BrowserRouter;
  return (
    <Router>
      <div>
        <ul>
          <li><Link to='/'>Home</Link></li>
        </ul>
        <Route path='/' component={Home} exact={true} />
      </div>
    </Router>
  );
};

App.propTypes = {
  isBuild: PropTypes.bool,
};

App.defaultProps = {
  isBuild: false,
};

export default App;
