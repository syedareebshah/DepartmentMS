import React from 'react';

import {
    ScrollView,
    Text,
    View,
    TouchableOpacity

} from 'react-native';
import { useStyles } from './styles';


const AdminHome = () => {
    const styles = useStyles()
    return (
        <ScrollView>
            <View style={styles.container}>
                <View style={styles.innerContainer}>
                    <TouchableOpacity>
                        <Text style={styles.text}>Post Notification</Text>
                    </TouchableOpacity>
                    <View style={styles.hr}></View>
                </View>

                <View style={styles.innerContainer}>
                    <TouchableOpacity>
                        <Text style={styles.text}>Post Time Table</Text>
                    </TouchableOpacity>
                    <View style={styles.hr}></View>
                </View>

                <View style={styles.innerContainer}>
                    <TouchableOpacity>
                        <Text style={styles.text}>Post DateSheet</Text>
                    </TouchableOpacity>
                    <View style={styles.hr}></View>
                </View>

                <View style={styles.innerContainer}>
                    <TouchableOpacity>
                        <Text style={styles.text}>Create Teacher's Profile</Text>
                    </TouchableOpacity>
                    <View style={styles.hr}></View>
                </View>

                <View style={styles.innerContainer}>
                    <TouchableOpacity>
                        <Text style={styles.text}>View Complaints</Text>
                    </TouchableOpacity>
                    <View style={styles.hr}></View>
                </View>
            </View>
        </ScrollView>
    );
};



export default AdminHome;
