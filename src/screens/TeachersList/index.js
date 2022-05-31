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
import { Button, TextInput, } from 'react-native-paper';
import { useStyles } from './styles';

const TeachersList = ({ navigation }) => {
    const styles = useStyles()
    const [teacher, setTeacher] = useState([])
    console.log(teacher);
    const flag = useSelector(payload => payload.login.isLoggedIn)


    useEffect(() => {
        getTeachers()
    }, [])

    const getTeachers = async () => {
        let tempArray = []
        firestore()
            .collection('TeacherProfiles')
            .get()
            .then(querySnapshot => {
                querySnapshot.forEach(documentSnapshot => {
                    let id = documentSnapshot.ref._documentPath._parts[1]
                    tempArray.push({ ...documentSnapshot.data(), id: documentSnapshot.ref._documentPath._parts[1] })

                });
                setTeacher(tempArray)
            });
    }

    const delData = ({id}) => {
        firestore()
            .collection('TeacherProfiles')
            .doc(`${id}`)
            .delete()
            .then(() => {
                alert("Deleted")
            });
    }



    return (
        <ScrollView>
            <View style={styles.container}>
                {
                    teacher.map((obj, i) => {
                        return (
                            <View key={i} style={styles.listItem}>
                                <TouchableOpacity onPress={() => { navigation.navigate('TeacherProfile', { itemId: obj.uId }) }}>
                                    <Text style={styles.text}>{obj.name}</Text>
                                </TouchableOpacity>
                                {
                                    flag ?
                                        <TouchableOpacity onPress={()=>{delData({id:obj.id})}}>
                                            <Text>Delete</Text>
                                        </TouchableOpacity>
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



export default TeachersList;
