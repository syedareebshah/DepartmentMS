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

const CreateTeacherProfile = () => {
    const styles = useStyles()



    return (
        <ScrollView>
            <View style={styles.container}>
                <TextInput
                    label="Name"
                    mode='outlined'
                />
                <TextInput
                    label="Designation"
                    mode='outlined'
                />
                <TextInput
                    label="Qualification"
                    mode='outlined'
                />
                <TextInput
                    label="Email Address"
                    mode='outlined'
                />
                <Button style={styles.btn} mode="contained" onPress={() => console.log('Pressed')}>
                    Post
                </Button>
            </View>
        </ScrollView>
    );
};



export default CreateTeacherProfile;
