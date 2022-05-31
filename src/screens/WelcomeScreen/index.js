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
import {useDispatch} from 'react-redux'
import { loginFlag } from '../../redux/loginSlice';

const Welcome = ({navigation}) => {
    const styles = useStyles()
    const dispatch = useDispatch()
    const handleStudent = ()=>{
        dispatch(loginFlag(false))
        navigation.navigate('TabNav')
    }
    return (
        <ScrollView>
            <View style={styles.container}>
                    <Image style={styles.img} source={require('../../assets/logo.png')} />
                    <Button style={styles.btn} mode="contained" onPress={handleStudent}>
                        Continue as student
                    </Button>
                    <Button style={styles.btn} mode="contained" onPress={() => navigation.navigate('Login')}>
                        Continue as Admin
                    </Button>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({

});

export default Welcome;
