import React, { useState } from 'react';

import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    Image,
    View,
    TouchableOpacity

} from 'react-native';
import { Button, TextInput } from 'react-native-paper';
import { useStyles } from './styles';

const Notifications = ({navigation}) => {
    const styles = useStyles()

    return (
        <ScrollView>
            <View style={styles.container}>
                <View style={styles.listItem}>
                    <TouchableOpacity onPress={()=>{navigation.navigate('NotificationDetails')}}>
                        <Text style={styles.text}>Notification</Text>
                    </TouchableOpacity>
                </View>
                
            </View>
        </ScrollView>
    );
};



export default Notifications;
