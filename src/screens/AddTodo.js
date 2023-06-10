import React, {useContext, useState} from 'react';
import {View, TextInput, Button, StyleSheet} from 'react-native';
import {createTodo} from "../services/api";
import {TokenContext} from "../../App";


const AddTodo = ({navigation}) => {
    const Token = useContext(TokenContext);

    const [name, setName] = useState('Todo Name');
    const [details, setDetails] = useState('Todo Details');

    const handleAdd = () => {
        if (name.trim() !== '') {
            createTodo({
                name: name.trim(),
                details: details.trim(),
            }, Token);
            setName('');
            setDetails('');
            navigation.navigate('Home');

        }
    };

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder="Todo Name"
                value={name}
                onChangeText={setName}
            />
            <TextInput
                style={styles.input}
                placeholder="Todo Details"
                value={details}
                onChangeText={setDetails}
            />
            <Button title="Add Todo" onPress={handleAdd}/>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 16,
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 16,
        paddingHorizontal: 8,
    },
});

export default AddTodo;
