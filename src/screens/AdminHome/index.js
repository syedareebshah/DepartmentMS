import React from 'react';

import {
    ScrollView,
    Text,
    View,
    TouchableOpacity

} from 'react-native';
import { useStyles } from './styles';


const AdminHome = ({navigation}) => {
    const styles = useStyles()
    return (
        <ScrollView>
            <View style={styles.container}>
                <View style={styles.innerContainer}>
                    <TouchableOpacity onPress={()=>{navigation.navigate('PostNotification')}}>
                        <Text style={styles.text}>Post Notification</Text>
                    </TouchableOpacity>
                    <View style={styles.hr}></View>
                </View>

                <View style={styles.innerContainer}>
                    <TouchableOpacity onPress={()=>{navigation.navigate('PostTimeTable')}}>
                        <Text style={styles.text}>Post Time Table</Text>
                    </TouchableOpacity>
                    <View style={styles.hr}></View>
                </View>

                <View style={styles.innerContainer}>
                    <TouchableOpacity onPress={()=>{navigation.navigate('PostDateSheet')}}>
                        <Text style={styles.text}>Post DateSheet</Text>
                    </TouchableOpacity>
                    <View style={styles.hr}></View>
                </View>

                <View style={styles.innerContainer}>
                    <TouchableOpacity onPress={()=>{navigation.navigate('CreateTeacherProfile')}}>
                        <Text style={styles.text}>Create Teacher's Profile</Text>
                    </TouchableOpacity>
                    <View style={styles.hr}></View>
                </View>

                <View style={styles.innerContainer}>
                    <TouchableOpacity onPress={()=>{navigation.navigate('Complaints')}}>
                        <Text style={styles.text}>View Complaints</Text>
                    </TouchableOpacity>
                    <View style={styles.hr}></View>
                </View>
            </View>
        </ScrollView>
    );
};



export default AdminHome;
