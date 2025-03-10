import React from 'react';
import AppNavigator from 'application/routes/AppNavigation';
import { Provider } from 'react-redux';
import { store } from './application/redux/store';

function App() {
    return (
        <Provider store={store}>
            <AppNavigator />
        </Provider>
    );
}

export default App;
