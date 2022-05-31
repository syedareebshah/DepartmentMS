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
    TouchableOpacity

} from 'react-native';
import { Button, TextInput } from 'react-native-paper';
import { useStyles } from './styles';
import { loginFlag } from '../../redux/loginSlice'
import { useDispatch, useSelector } from 'react-redux'

const DateSheet = () => {
    const styles = useStyles()
    const [add, setAdd] = useState(false)
    const [datSheet, setDatSheet] = useState([])
    const flag = useSelector(payload => payload.login.isLoggedIn)

    console.log(add, datSheet);

    useEffect(() => {
        getDateSheet()
    }, [])

    const getDateSheet = async () => {
        let tempArray = []
        firestore()
            .collection('DateSheet')
            .get()
            .then(querySnapshot => {
                querySnapshot.forEach(documentSnapshot => {
                    tempArray.push(documentSnapshot.data())
                });
                setDatSheet(tempArray)
            });
    }


    return (
        <ScrollView>
            <View style={styles.container}>

                <View style={styles.table}>
                    {
                        datSheet.map((obj, i) => {
                            return (
                                <View key={i} style={styles.row}>
                                    <View style={styles.subRow}>
                                        <Text style={styles.heading}>Date</Text>
                                        <Text style={styles.text}>{obj.date}</Text>
                                    </View>

                                    <View style={styles.subRow}>
                                        <Text style={styles.heading}>Subject</Text>
                                        <Text style={styles.text}>{obj.subject}</Text>
                                    </View>

                                    <View style={styles.subRow}>
                                        <Text style={styles.heading}>Time</Text>
                                        <Text style={styles.text}>{obj.time}</Text>
                                    </View>

                                    <View style={styles.subRow}>
                                        <Text style={styles.heading}>Section/Semester</Text>
                                        <Text style={styles.text}>{obj.classs}</Text>
                                    </View>

                                    <View style={styles.subRow}>
                                        <Text style={styles.heading}>Vanue</Text>
                                        <Text style={styles.text}>{obj.vanue}</Text>
                                    </View>

                                    <View style={styles.subRow}>
                                        <Text style={styles.heading}>Remarks</Text>
                                        <Text style={styles.text}>{obj.remarks}</Text>
                                    </View>
                                    {flag ?
                                        <View style={styles.subRow}>
                                            <TouchableOpacity>
                                            <Text>Delete</Text>
                                            </TouchableOpacity>
                                        </View>
                                        :
                                        null
                                    }

                                </View>
                            )

                        })
                    }

                </View>
            </View>
        </ScrollView>
    );
};



export default DateSheet;
