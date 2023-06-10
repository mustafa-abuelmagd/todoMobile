import React, {useEffect, useState, useContext} from 'react';
import {View, Text, FlatList, Button, TouchableOpacity, CheckBox, StyleSheet} from 'react-native';
import {deleteTodo, getTodos, updateTodo} from "../services/api";

import {TokenContext} from "../../App";
// import {CheckBox} from "react-native-web";
import {AuthenticationContext} from "../../App";

const HomeScreen = ({navigation}) => {
    const UpdateAuthenticatedContext = useContext(AuthenticationContext);

    const [todos, setTodos] = useState([]);
    const Token = useContext(TokenContext);
    const fetchTodos = async () => {
        try {
            const data = await getTodos(Token);
            console.log("received data data", data)
            setTodos(data);
        } catch (error) {
            console.error('Error fetching todos:', error);
        }
    };

    const handleLogout = () => {
       UpdateAuthenticatedContext("");

    };
    useEffect(() => {
        const unsubscribe = navigation.addListener('focus', fetchTodos);

        return unsubscribe;
    }, [navigation]);

    const handleToggleTodo = async (todoId, todo) => {
        try {
            todo.is_done = !todo.is_done;
            const data = await updateTodo(todoId, todo, Token);
            const updatedTodos = todos.map(element => {
                if (element.id === data.id) {
                    element.is_done = data.is_done
                    return element;
                }
                return element;
            });
            setTodos(updatedTodos);
        } catch (error) {
            console.error('Error fetching todos:', error);
        }
    }

    const handleDeleteTodo = async (todoId) => {
        try {
            const data = deleteTodo(todoId, Token)
            if (data) {
                const updatedTodos = todos.filter(element => element.id !== todoId);
                setTodos(updatedTodos);
            }
        } catch (e) {

        }
    }

    const handleShowTodo = async (id) => {
        try {
            const todo = todos.find(todo => todo.id === id);
            navigation.navigate('ShowTodo', {todo});
        } catch (error) {
            console.error('Error fetching todos:', error);
        }
    }
    const handleAddTodo = () => {
        navigation.navigate('AddTodo');
    }

    return (
        <View>
            <Text>Todo List</Text>
            {todos.map(todo => {
                return (
                    <View key={todo.id} style={{flexDirection: 'row'}}>
                        <CheckBox value={todo.is_done} onValueChange={() => handleToggleTodo(todo.id, todo)}/>
                        <Text>{todo.name}</Text>
                        <Button title="Delete" onPress={() => handleDeleteTodo(todo.id)}/>
                        <Button title="Show" onPress={() => handleShowTodo(todo.id)}/>
                    </View>
                )
            })}

            <Button style={styles.addButtonText} title="+" onPress={handleAddTodo}/>
            <Button title="Logout" onPress={handleLogout} />
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    },
    heading: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 16,
    },
    todoItem: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 8,
    },
    addButton: {
        position: 'absolute',
        bottom: 16,
        right: 16,
        width: 48,
        height: 48,
        borderRadius: 24,
        backgroundColor: 'green',
        justifyContent: 'center',
        alignItems: 'center',
    },
    addButtonText: {
        fontSize: 24,
        color: 'white',
    },
});

export default HomeScreen;
