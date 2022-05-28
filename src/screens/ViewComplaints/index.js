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

const ViewComplaints = () => {
    const styles = useStyles()


    return (
        <ScrollView>
            <View style={styles.container}>
                <View style={styles.listItem}>
                    <Text style={styles.text}>Title</Text>
                </View>
                <View style={styles.listItem}>
                    <Text style={styles.text}>Title</Text>
                </View>
            </View>
        </ScrollView>
    );
};



export default ViewComplaints;
