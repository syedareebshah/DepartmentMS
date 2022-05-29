import React from 'react';

import {
    ScrollView,
    Text,
    View,
    TouchableOpacity

} from 'react-native';
import { useStyles } from './styles';
import { TextInput, Button } from 'react-native-paper'


const Complaint = ({ navigation }) => {
    const styles = useStyles()
    return (
        <ScrollView>
            <View style={styles.container}>
                <TextInput
                    label="Title"
                    mode='outlined'
                />
                <TextInput
                    label="Subject..."
                    mode='outlined'
                    multiline={true}
                    numberOfLines={15}
                />
                <TextInput
                    label="Your Name"
                    mode='outlined'
                />
                <Button style={styles.btn} mode="contained" onPress={() => navigation.navigate('AdminHome')}>
                    Submit
                </Button>
            </View>
        </ScrollView>
    );
};



export default Complaint;
