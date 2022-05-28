import React from 'react';

import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    Image,
    View,

} from 'react-native';
import { Button, TextInput } from 'react-native-paper';
import { useStyles } from './styles';

const Login = () => {
    const styles = useStyles()
    return (
        <ScrollView>

            <View style={styles.container}>
                <Image style={styles.img} source={require('../../assets/logo.png')} />
                <TextInput
                    label="Email"
                    mode='outlined'
                />

                <TextInput
                    label="Password"
                    mode='outlined'
                />

                <Button style={styles.btn} mode="contained" onPress={() => console.log('Pressed')}>
                    Login
                </Button>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({

});

export default Login;
