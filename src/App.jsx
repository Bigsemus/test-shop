import { HashRouter } from 'react-router-dom';
import React from 'react';
import { Provider } from 'react-redux';
import AppRoutes from './router/AppRoutes';
import { store } from './store/indexStore';

const App = () => (
  <Provider store={store}>
    <HashRouter>
      <AppRoutes />
    </HashRouter>
  </Provider>
);

export default App;
