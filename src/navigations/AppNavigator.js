import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from '../screens/HomeScreen';
import ShowTodo from "../screens/ShowTodo";
import AddTodo from "../screens/AddTodo";

const Stack = createStackNavigator();

const AppNavigator = () => {
    return (
            <Stack.Navigator>
                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen name="ShowTodo" component={ShowTodo} />
                <Stack.Screen name="AddTodo" component={AddTodo} />
            </Stack.Navigator>
    );
};

export default AppNavigator;
