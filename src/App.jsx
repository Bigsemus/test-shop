import { BrowserRouter } from 'react-router-dom';
import React from 'react';
import { Provider } from 'react-redux';
import AppRoutes from './router/AppRoutes';
import { store } from './store/indexStore';


const App = () => (
    <Provider store={store}>
        <BrowserRouter>
            <AppRoutes />
        </BrowserRouter>
    </Provider>
);

export default App;