import React, { useState, useEffect } from 'react';

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
import firestore from '@react-native-firebase/firestore';

const Notifications = ({ navigation }) => {
    const styles = useStyles()
    const [notification, setNotifications] = useState([])

    useEffect(() => {
        getNotifications()
    }, [])

    const getNotifications = async () => {
        let tempArray = []
        firestore()
            .collection('Notifications')
            .get()
            .then(querySnapshot => {
                querySnapshot.forEach(documentSnapshot => {
                    tempArray.push(documentSnapshot.data())
                });
                setNotifications(tempArray)
            });
    }

    return (
        <ScrollView>
            <View style={styles.container}>
                {notification.map((obj, i) => {
                    return (
                        <View key={i} style={styles.listItem}>
                            <TouchableOpacity onPress={() => { navigation.navigate('NotificationDetails', {itemId:obj.uId })}}>
                                <Text style={styles.text}>{obj.title}</Text>
                            </TouchableOpacity>
                        </View>

                    )
                })}


            </View>
        </ScrollView>
    );
};



export default Notifications;
