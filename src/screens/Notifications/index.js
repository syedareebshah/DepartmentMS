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

} from 'react-native';
import { Button, TextInput } from 'react-native-paper';
import { useStyles } from './styles';

const Notifications = () => {
    const styles = useStyles()

    return (
        <ScrollView>
            <View style={styles.container}>
                <View style={styles.listItem}>
                    <Text style={styles.text}>Notification</Text>
                </View>
                <View style={styles.listItem}>
                    <Text style={styles.text}>Notification</Text>
                </View>
            </View>
        </ScrollView>
    );
};



export default Notifications;
