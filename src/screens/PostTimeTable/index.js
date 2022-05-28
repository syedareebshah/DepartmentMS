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

const PostTimeTable = () => {
    const styles = useStyles()
    const [add, setAdd] = useState(false)

    console.log(add);


    return (
        <ScrollView>

            <View style={styles.container}>

                {add &&
                    <View>
                        <TextInput
                            label="Day"
                            mode='outlined'
                        />
                        <TextInput
                            label="Time"
                            mode='outlined'
                        />
                        <TextInput
                            label="Room/Floor"
                            mode='outlined'
                        />
                        <TextInput
                            label="Subject"
                            mode='outlined'
                        />
                        <TextInput
                            label="Teacher"
                            mode='outlined'
                        />
                        
                        <Button  onPress={() => setAdd(false)}>
                            Submit
                        </Button>

                    </View>
                }


                <Button style={styles.btn} mode="contained" onPress={() => setAdd(true)}>
                    Add New 
                </Button>

                <View style={styles.table}>
                        <Text style={styles.day}>Monday</Text>
                    <View style={styles.row}>
                        <View style={styles.subRow}>
                            <Text style={styles.heading}>Time</Text>
                            <Text style={styles.text}>8:00 AM</Text>
                        </View>
                        <View style={styles.subRow}>
                            <Text style={styles.heading}>Floor/Room</Text>
                            <Text style={styles.text}>R1,F2</Text>
                        </View>
                        <View style={styles.subRow}>
                            <Text style={styles.heading}>Subject</Text>
                            <Text style={styles.text}>OOP</Text>
                        </View>
                        <View style={styles.subRow}>
                            <Text style={styles.heading}>Teacher</Text>
                            <Text style={styles.text}>Sir Kareem</Text>
                        </View>

                        
                        

                    </View>


                </View>


            </View>
        </ScrollView>
    );
};



export default PostTimeTable;
