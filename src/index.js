import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import './index.less';
import all from './reducers/reducer';
import {Provider} from 'react-redux';

import {createStore} from 'redux';

import App from './components/router';
import registerServiceWorker from './registerServiceWorker';

const store = createStore(all);

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);
registerServiceWorker();
