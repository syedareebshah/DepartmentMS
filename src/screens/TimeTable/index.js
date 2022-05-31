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

const TimeTable = () => {
    const styles = useStyles()
    const [timeTable, setTimeTable] = useState([])
    console.log(timeTable);
    const flag = useSelector(payload => payload.login.isLoggedIn)

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
                    let id = documentSnapshot.ref._documentPath._parts[1]
                    tempArray.push({ ...documentSnapshot.data(), id: documentSnapshot.ref._documentPath._parts[1] })

                });
                setTimeTable(tempArray)
            });
    }

    const delData = ({id}) => {
        firestore()
            .collection('TimeTable')
            .doc(`${id}`)
            .delete()
            .then(() => {
                getTimeTable()
                alert("Deleted")
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
                                    {
                                        flag ?
                                        <View>
                                            <TouchableOpacity onPress={()=>{
                                                delData({id:obj.id}  
                                                )}}>
                                                <Text style={{textAlign:'center'}}>Delete</Text>
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



export default TimeTable;
