import React from 'react';

import {
    ScrollView,
    Text,
    View,
    TouchableOpacity
} from 'react-native';
import { useStyles } from './styles';
import { TextInput, Button } from 'react-native-paper';


const PostNotification = () => {
    const styles = useStyles()
    return (
        <ScrollView>
            <View style={styles.container}>

                <TextInput
                    label="Title"
                    mode='outlined'
                />
                <TextInput
                    style={styles.textarea}
                    label="Subject"
                    mode='outlined'
                    multiline={true}
                    numberOfLines={20}
                />
                <TextInput
                    label="Regards"
                    mode='outlined'
                />

                <Button style={styles.btn} mode="contained" onPress={() => console.log('Pressed')}>
                    Post
                </Button>


            </View>
        </ScrollView>
    );
};



export default PostNotification;
