import React, {useState, useContext} from 'react';
import {View, TextInput, Button, ScrollView, Text, StyleSheet} from 'react-native';
import {login} from './../services/api';
import {AuthenticationContext} from "../../App";

const LoginScreen = ({navigation}) => {
    const [email, setEmail] = useState('stafa.1buelmagd@gmail.mmcommm');
    const [password, setPassword] = useState('12345679');
    const UpdateAuthenticatedContext = useContext(AuthenticationContext);
    const handleNavigateToSignup = () => {
        navigation.navigate('Signup')
    };

    const handleLogin = async () => {
        let result
        await login(email, password).then(data => result = data);
        console.log("result", result)
        result.token ? UpdateAuthenticatedContext(result.token) : UpdateAuthenticatedContext(result.token);
    };

    return (
        <ScrollView style={styles.container}>
            <View style={styles.container}>
                <Text>
                    Email:
                </Text>
                <TextInput style={styles.input}
                           placeholder="Please write your email here "
                           value={email}
                           onChangeText={setEmail}
                />
            </View>
            <View style={styles.container}>
                <Text>
                    Password:
                </Text>
                <TextInput style={styles.input}
                           placeholder="Please enter your password here"
                           secureTextEntry
                           value={password}
                           onChangeText={setPassword}
                />
            </View>
            <Button title="Login" onPress={handleLogin}/>
            <Button title="Sign up instead" onPress={handleNavigateToSignup}/>
        </ScrollView>
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
export default LoginScreen;
