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

const ViewComplaints = ({ navigation }) => {
    const styles = useStyles()
    const [complaints, setComplaints] = useState([])
    console.log(complaints);

    useEffect(() => {
        getComplaints()
    }, [])

    const getComplaints = async () => {
        let tempArray = []
        firestore()
            .collection('Complaints')
            .get()
            .then(querySnapshot => {
                console.log(querySnapshot);
                querySnapshot.forEach(documentSnapshot => {
                    console.log(documentSnapshot);
                    tempArray.push(documentSnapshot.data())
                });
                setComplaints(tempArray)
            });
       
    }



    return (
        <ScrollView>
            <View style={styles.container}>
                {
                    complaints.map((obj,i) => {
                        return (
                            <TouchableOpacity key={i} onPress={() => { navigation.navigate('ComplaintDetails',{itemId:obj.uId}) }}>
                                <View style={styles.listItem}>
                                    <Text style={styles.text}>{obj.title}</Text>
                                </View>
                            </TouchableOpacity>
                        )
                    })
                }

            </View>
        </ScrollView>
    );
};



export default ViewComplaints;
