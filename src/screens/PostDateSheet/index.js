import React, { useState } from 'react';

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

const PostDateSheet = () => {
    const styles = useStyles()
    const [add, setAdd] = useState(false)

    console.log(add);


    return (
        <ScrollView>

            <View style={styles.container}>

                {add &&
                    <View>
                        <TextInput
                            label="Date"
                            mode='outlined'
                        />
                        <TextInput
                            label="Subject"
                            mode='outlined'
                        />
                        <TextInput
                            label="Time"
                            mode='outlined'
                        />
                        <TextInput
                            label="Section/Semester"
                            mode='outlined'
                        />
                        <TextInput
                            label="Vanue"
                            mode='outlined'
                        />
                        <TextInput
                            label="Remarks"
                            mode='outlined'
                        />
                        <Button  onPress={() => setAdd(false)}>
                            Submit
                        </Button>

                    </View>
                }


                <Button style={styles.btn} mode="contained" onPress={() => setAdd(true)}>
                    Add New Exam
                </Button>

                <View style={styles.table}>
                    <View style={styles.row}>
                        <View style={styles.subRow}>
                            <Text style={styles.heading}>Date</Text>
                            <Text style={styles.text}>20-1-2003</Text>
                        </View>

                        <View style={styles.subRow}>
                            <Text style={styles.heading}>Subject</Text>
                            <Text style={styles.text}>Pak Studies</Text>
                        </View>

                        <View style={styles.subRow}>
                            <Text style={styles.heading}>Time</Text>
                            <Text style={styles.text}>10:00 AM</Text>
                        </View>

                        <View style={styles.subRow}>
                            <Text style={styles.heading}>Section/Semester</Text>
                            <Text style={styles.text}>SE,IT</Text>
                        </View>

                        <View style={styles.subRow}>
                            <Text style={styles.heading}>Vanue</Text>
                            <Text style={styles.text}>cs dept, room 4 ground floor</Text>
                        </View>

                        <View style={styles.subRow}>
                            <Text style={styles.heading}>Remarks</Text>
                            <Text style={styles.text}>some details if any</Text>
                        </View>

                    </View>


                </View>


            </View>
        </ScrollView>
    );
};



export default PostDateSheet;
