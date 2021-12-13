import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import { store } from './Redux/store';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

import ApplicationContainer from './ApplicationContainer';
import './index.css';

ReactDOM.render(
  <StrictMode>
    <Provider store={store}>
      <Router>
        <ApplicationContainer />
      </Router>
    </Provider>
  </StrictMode>,
  document.getElementById('root')
)
