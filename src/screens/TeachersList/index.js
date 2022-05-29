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
import { Button, TextInput, } from 'react-native-paper';
import { useStyles } from './styles';

const TeachersList = ({navigation}) => {
    const styles = useStyles()

    return (
        <ScrollView>
            <View style={styles.container}>
                <View style={styles.listItem}>
                    <TouchableOpacity onPress={()=>{navigation.navigate('TeacherProfile')}}>
                    <Text style={styles.text}>Teacher Name</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.listItem}>
                    <Text style={styles.text}>Teacher Name</Text>
                </View>
            </View>
        </ScrollView>
    );
};



export default TeachersList;
