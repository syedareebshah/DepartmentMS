import React from 'react';

import {
    ScrollView,
    Text,
    View,
    TouchableOpacity,
    Image

} from 'react-native';
import { useStyles } from './styles';


const TeacherProfile = ({ navigation }) => {
    const styles = useStyles()
    return (
        <ScrollView>
            <View style={styles.container}>
                <Image style={styles.img} source={require('../../assets/logo.png')} />
                <View style={styles.innerContaier}>
                    <Text style={styles.name}>Name</Text>
                    <Text style={styles.txt}>Position: <Text style={styles.innerTxt}>Assosiate Professor</Text></Text>
                    <Text style={styles.txt}>Qualification: <Text style={styles.innerTxt}>BS SE</Text></Text>
                    <Text style={styles.txt}>Email: <Text style={styles.innerTxt}>dummy@mail.com</Text></Text>
                </View>
            </View>
        </ScrollView>
    );
};



export default TeacherProfile;
