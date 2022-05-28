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
import { Button } from 'react-native-paper';
import { useStyles } from './styles';

const Welcome = () => {
    const styles = useStyles()
    return (
        <ScrollView>
            <View style={styles.container}>
                    <Image style={styles.img} source={require('../../assets/logo.png')} />
                    <Button style={styles.btn} mode="contained" onPress={() => console.log('Pressed')}>
                        Continue as student
                    </Button>
                    <Button style={styles.btn} mode="contained" onPress={() => console.log('Pressed')}>
                        Continue as Admin
                    </Button>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({

});

export default Welcome;
