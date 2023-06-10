import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const ShowTodo = ({ route }) => {
    const { todo } = route.params;

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{todo.name}</Text>
            <Text style={styles.details}>{todo.details}</Text>
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 8,
    },
    details: {
        fontSize: 16,
    },
});
export default ShowTodo;