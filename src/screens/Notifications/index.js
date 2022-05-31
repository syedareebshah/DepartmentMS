import React, { useState, useEffect } from 'react';

import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    Image,
    ActivityIndicator,
    View,
    TouchableOpacity

} from 'react-native';
import { Button, TextInput } from 'react-native-paper';
import { useStyles } from './styles';
import firestore from '@react-native-firebase/firestore';
import { loginFlag } from '../../redux/loginSlice'
import { useDispatch, useSelector } from 'react-redux'

const Notifications = ({ navigation }) => {
    const styles = useStyles()
    const [notification, setNotifications] = useState([])

    const flag = useSelector(payload => payload.login.isLoggedIn)
    console.log(flag);

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
                    let id = documentSnapshot.ref._documentPath._parts[1]
                    tempArray.push({ ...documentSnapshot.data(), id: documentSnapshot.ref._documentPath._parts[1] })

                });
                setNotifications(tempArray)
            });
    }

    const delData = ({ id }) => {
        firestore()
            .collection('Notifications')
            .doc(`${id}`)
            .delete()
            .then(() => {
                alert("Deleted")
                getNotifications()
            });
    }


    return (
        <ScrollView>
            <View style={styles.container}>
                {notification.map((obj, i) => {
                    return (
                        <View key={i} style={styles.listItem}>
                            <TouchableOpacity onPress={() => { navigation.navigate('NotificationDetails', { itemId: obj.uId }) }}>
                                <Text style={styles.text}>{obj.title}</Text>
                            </TouchableOpacity>
                            {
                                flag ?
                                    <TouchableOpacity onPress={() => {
                                        delData({ id: obj.id }
                                        )
                                    }}>
                                        <Text style={{ textAlign: 'center' }}>Delete</Text>
                                    </TouchableOpacity>
                                    :
                                    null
                            }

                        </View>

                    )
                })}


            </View>
        </ScrollView>
    );
};



export default Notifications;
