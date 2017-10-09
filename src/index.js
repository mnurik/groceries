import React from 'react';
import { Provider } from 'react-redux';
import { StyleSheet, Platform, View } from 'react-native';

import configureStore from './store/configureStore';
import ScreenManager from './navigation';

const store = configureStore();

export default function AppContainer() {
    return (
        <Provider store={store}>
            <ScreenManager />
        </Provider>
    );
}