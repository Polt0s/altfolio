import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import { store } from './Redux/store';
import { Provider } from 'react-redux';

ReactDOM.render(
  <StrictMode>
    <Provider store={store}>
      <div>TEST</div>
    </Provider>
  </StrictMode>,
  document.getElementById('root')
)