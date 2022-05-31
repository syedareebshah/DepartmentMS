import React, { useState, useEffect } from 'react';
import firestore from '@react-native-firebase/firestore';
import { loginFlag } from '../../redux/loginSlice'
import { useDispatch, useSelector } from 'react-redux'

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
    const flag = useSelector(payload => payload.login.isLoggedIn)


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
                    let id = documentSnapshot.ref._documentPath._parts[1]
                    tempArray.push({ ...documentSnapshot.data(), id: documentSnapshot.ref._documentPath._parts[1] })

                });
                setComplaints(tempArray)
            });

    }

    const delData = ({ id }) => {
        firestore()
            .collection('Complaints')
            .doc(`${id}`)
            .delete()
            .then(() => {
                alert("Deleted")
                getComplaints()
            });
    }



    return (
        <ScrollView>
            <View style={styles.container}>
                {
                    complaints.map((obj, i) => {
                        return (
                            <View key={i}>
                                <TouchableOpacity key={i} onPress={() => { navigation.navigate('ComplaintDetails', { itemId: obj.uId }) }}>
                                    <View style={styles.listItem}>
                                        <Text style={styles.text}>{obj.title}</Text>
                                    </View>
                                </TouchableOpacity>
                                {flag ?
                                    <View>
                                        <TouchableOpacity onPress={() => {
                                        delData({ id: obj.id }
                                        )
                                    }}>
                                            <Text style={{ textAlign: 'center' }}>Delete</Text>
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
        </ScrollView>
    );
};



export default ViewComplaints;
