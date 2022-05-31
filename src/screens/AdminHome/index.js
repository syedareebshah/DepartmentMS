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
                        <Text style={styles.text}>Manage Complaints</Text>
                    </TouchableOpacity>
                    <View style={styles.hr}></View>
                </View>
                <View style={styles.innerContainer}>
                    <TouchableOpacity onPress={()=>{navigation.navigate('Notifications')}}>
                        <Text style={styles.text}>Manage Notifications</Text>
                    </TouchableOpacity>
                    <View style={styles.hr}></View>
                </View>
                <View style={styles.innerContainer}>
                    <TouchableOpacity onPress={()=>{navigation.navigate('DateSheet')}}>
                        <Text style={styles.text}>Manage DateSheet</Text>
                    </TouchableOpacity>
                    <View style={styles.hr}></View>
                </View>
                <View style={styles.innerContainer}>
                    <TouchableOpacity onPress={()=>{navigation.navigate('TimeTable')}}>
                        <Text style={styles.text}>Manage TimeTable</Text>
                    </TouchableOpacity>
                    <View style={styles.hr}></View>
                </View>
                <View style={styles.innerContainer}>
                    <TouchableOpacity onPress={()=>{navigation.navigate('Teachers')}}>
                        <Text style={styles.text}>Manage Teachers</Text>
                    </TouchableOpacity>
                    <View style={styles.hr}></View>
                </View>
            </View>
        </ScrollView>
    );
};



export default AdminHome;
