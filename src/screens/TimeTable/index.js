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

const TimeTable = () => {
    const styles = useStyles()
    
    return (
        <ScrollView>
            <View style={styles.container}>
                <View style={styles.table}>
                    <Text style={styles.day}>Monday</Text>
                    <View style={styles.row}>
                        <View style={styles.subRow}>
                            <Text style={styles.heading}>Time</Text>
                            <Text style={styles.text}>8:00 AM</Text>
                        </View>
                        <View style={styles.subRow}>
                            <Text style={styles.heading}>Floor/Room</Text>
                            <Text style={styles.text}>R1,F2</Text>
                        </View>
                        <View style={styles.subRow}>
                            <Text style={styles.heading}>Subject</Text>
                            <Text style={styles.text}>OOP</Text>
                        </View>
                        <View style={styles.subRow}>
                            <Text style={styles.heading}>Teacher</Text>
                            <Text style={styles.text}>Sir Kareem</Text>
                        </View>
                    </View>
                </View>
            </View>
        </ScrollView>
    );
};



export default TimeTable;
