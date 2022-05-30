import React, { useState, useEffect } from 'react';
import firestore from '@react-native-firebase/firestore';

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
    const [timeTable, setTimeTable] = useState([])
    console.log(timeTable);

    useEffect(() => {
        getTimeTable()
    }, [])

    const getTimeTable = async () => {
        let tempArray = []
        firestore()
            .collection('TimeTable')
            .get()
            .then(querySnapshot => {
                querySnapshot.forEach(documentSnapshot => {
                    tempArray.push(documentSnapshot.data())
                });
                setTimeTable(tempArray)
            });
    }


    return (
        <ScrollView>
            <View style={styles.container}>
                <View style={styles.table}>
                    {
                        timeTable.map((obj, i) => {
                            return (
                                <View key={i} style={styles.row}>
                                    <Text style={styles.day}>{obj.day}</Text>
                                    <View style={styles.subRow}>
                                        <Text style={styles.heading}>Time</Text>
                                        <Text style={styles.text}>{obj.time}</Text>
                                    </View>
                                    <View style={styles.subRow}>
                                        <Text style={styles.heading}>Floor/Room</Text>
                                        <Text style={styles.text}>{obj.roomFloor}</Text>
                                    </View>
                                    <View style={styles.subRow}>
                                        <Text style={styles.heading}>Subject</Text>
                                        <Text style={styles.text}>{obj.subject}</Text>
                                    </View>
                                    <View style={styles.subRow}>
                                        <Text style={styles.heading}>Teacher</Text>
                                        <Text style={styles.text}>{obj.teacher}</Text>
                                    </View>
                                </View>
                            )

                        })
                    }

                </View>
            </View>
        </ScrollView>
    );
};



export default TimeTable;
