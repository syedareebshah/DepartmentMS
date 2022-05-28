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

const Login = ({navigation}) => {
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

                <Button style={styles.btn} mode="contained" onPress={() => navigation.navigate('AdminHome')}>
                    Login
                </Button>
            </View>
        </ScrollView>
    );
};



export default Login;
