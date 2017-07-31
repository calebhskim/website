import React from 'react';
import ReactDOMServer from 'react-dom/server';

import Root from './components/Root';

const render = () => ReactDOMServer.renderToString(<Root isBuild={true} />);

export default render;
