import React,{useEffect,useState} from 'react';
import firestore from '@react-native-firebase/firestore'

import {
    ScrollView,
    Text,
    View,
    TouchableOpacity,
    Image

} from 'react-native';
import { useStyles } from './styles';


const TeacherProfile = ({ route,navigation }) => {
    const { itemId } = route.params;
    console.log(itemId,"...");
    const styles = useStyles()
    let [results, setResult] = useState([])
    console.log(results);
    useEffect(() => {
        getData()
    }, [])

    const getData = () =>{
        firestore()
            .collection('TeacherProfiles')
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
                <Image style={styles.img} source={require('../../assets/logo.png')} />
                <View style={styles.innerContaier}>
                    <Text style={styles.name}>{results.name}</Text>
                    <Text style={styles.txt}>Position: <Text style={styles.innerTxt}>{results.post}</Text></Text>
                    <Text style={styles.txt}>Qualification: <Text style={styles.innerTxt}>{results.qualification}</Text></Text>
                    <Text style={styles.txt}>Email: <Text style={styles.innerTxt}>{results.email}</Text></Text>
                </View>
            </View>
        </ScrollView>
    );
};



export default TeacherProfile;
