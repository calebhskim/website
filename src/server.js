import React from 'react';
import ReactDOMServer from 'react-dom/server';

import App from './components/App';

const render = () => ReactDOMServer.renderToString(<App isBuild={true} />);

export default render;
