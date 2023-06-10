import React, {useContext, useState} from 'react';
import {View, TextInput, Button, StyleSheet, Text} from 'react-native';
import {signup} from "../services/api";
import {AuthenticationContext} from "../../App";

const SignupScreen = ({navigation}) => {
    const [name, setName] = useState('new name');
    const [email, setEmail] = useState('newemail@techhive.com');
    const [password, setPassword] = useState('123456789');
    const UpdateAuthenticatedContext = useContext(AuthenticationContext);

    const handleSignup = async () => {
        try {
            const data = await signup(name, email, password)
            data.token ? UpdateAuthenticatedContext(data.token) : UpdateAuthenticatedContext(data.token);

        } catch (e) {
            console.log("an error occurred", e)
        }
    };
    const handleNavigateToLogin = () => {
        navigation.navigate('Login')
    };

    return (
        <View style={styles.container}>
            <View style={styles.container}>
                <Text>
                    name:
                </Text>
                <TextInput style={styles.input}
                           placeholder="Name"
                           value={name}
                           onChangeText={setName}
                />
            </View>
            <View style={styles.container}>
                <Text>
                    Email:
                </Text>
                <TextInput style={styles.input}
                           placeholder="Email"
                           value={email}
                           onChangeText={setEmail}
                />
            </View>

            <View style={styles.container}>
                <Text>
                    Password:
                </Text>
                <TextInput style={styles.input}
                           placeholder="Password"
                           secureTextEntry
                           value={password}
                           onChangeText={setPassword}
                />
            </View>

            <Button title="Sign Up" onPress={handleSignup}/>
            <Button title="Login instead" onPress={handleNavigateToLogin}/>
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
export default SignupScreen;
