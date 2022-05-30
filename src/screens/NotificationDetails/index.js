import React, { useState, useEffect } from 'react';
import firestore from '@react-native-firebase/firestore'
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

const NotificationDetails = ({route, navigation}) => {
    const { itemId } = route.params;
    console.log(itemId,"...");
    const styles = useStyles()
    let [results, setResult] = useState([])
    useEffect(() => {
        getData()
    }, [])

    const getData = () =>{
        firestore()
            .collection('Notifications')
            // Filter results
            .where('uId', '==', `${itemId}`)
            .get()
            .then(querySnapshot => {
               let result= querySnapshot.docs[0]._data
               setResult(result)     
            });
    }

    return (
        <ScrollView>
            <View style={styles.container}>
                <Text style={styles.heading}>{results.title}</Text>
                <Text style={styles.details}>
                {results.subject}
                 </Text>
                <Text style={styles.regards}>{results.regards}</Text>
            </View>
        </ScrollView>
    );
};



export default NotificationDetails;
