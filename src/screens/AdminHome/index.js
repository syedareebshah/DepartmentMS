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

const AdminHome = () => {
    const styles = useStyles()
    return (
        <ScrollView>

            <View style={styles.container}>
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



export default AdminHome;
