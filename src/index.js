import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import Main from "./Main";

ReactDOM.render(<Main />, document.getElementById('root'));

serviceWorker.unregister();
