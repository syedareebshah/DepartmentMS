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

const ViewComplaints = ({ navigation }) => {
    const styles = useStyles()


    return (
        <ScrollView>
            <View style={styles.container}>
                <TouchableOpacity onPress={()=>{navigation.navigate('ComplaintDetails')}}>
                    <View style={styles.listItem}>
                        <Text style={styles.text}>Title</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
};



export default ViewComplaints;
