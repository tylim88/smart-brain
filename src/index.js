import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import 'tachyons'; //tachyon css has higher priority than bootstrap because it is import later

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
