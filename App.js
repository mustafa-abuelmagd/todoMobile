import React, {useState} from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import AppNavigator from './src/navigations/AppNavigator';
import AuthNavigator from './src/navigations/AuthNavigator';
import {createStackNavigator} from '@react-navigation/stack';

export const AuthenticationContext = React.createContext();
export const TokenContext = React.createContext();
const App = () => {
    const [Token, setToken] = useState('')
    return (
        <AuthenticationContext.Provider value={setToken}>
            <TokenContext.Provider value={Token}>
                <NavigationContainer>
                    {Token ? <AppNavigator/>
                        : <AuthNavigator/>}
                </NavigationContainer>
            </TokenContext.Provider>
        </AuthenticationContext.Provider>

    );
};

export default App;
