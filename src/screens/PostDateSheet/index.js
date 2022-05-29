import React, { useState } from 'react';
import { useForm, Controller } from "react-hook-form";

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

    const { control, handleSubmit, formState: { errors } } = useForm({
        defaultValues: {
            date: '',
            subject: '',
            time: '',
            class: '',
            vanue: '',
            remarks: ''
        }
    });
    const onSubmit = (data) => {
        console.log(data)
        setAdd(false)
        }



    return (
        <ScrollView>

            <View style={styles.container}>

                {add &&
                    <View>
                        <Controller
                            control={control}
                            rules={{
                                required: true,
                            }}
                            render={({ field: { onChange, onBlur, value } }) => (
                                <TextInput
                                    label="Date"
                                    mode='outlined'
                                    onBlur={onBlur}
                                    onChangeText={onChange}
                                    value={value}
                                />
                            )}
                            name="date"
                        />
                        {errors.date && <Text>This is required.</Text>}

                        <Controller
                            control={control}
                            rules={{
                                required: true,
                            }}
                            render={({ field: { onChange, onBlur, value } }) => (
                                <TextInput
                                    label="Subject"
                                    mode='outlined'
                                    onBlur={onBlur}
                                    onChangeText={onChange}
                                    value={value}
                                />
                            )}
                            name="subject"
                        />
                        {errors.subject && <Text>This is required.</Text>}


                        <Controller
                            control={control}
                            rules={{
                                required: true,
                            }}
                            render={({ field: { onChange, onBlur, value } }) => (
                                <TextInput
                                    label="Time"
                                    mode='outlined'
                                    onBlur={onBlur}
                                    onChangeText={onChange}
                                    value={value}
                                />
                            )}
                            name="time"
                        />
                        {errors.time && <Text>This is required.</Text>}

                        <Controller
                            control={control}
                            rules={{
                                required: true,
                            }}
                            render={({ field: { onChange, onBlur, value } }) => (
                                <TextInput
                                    label="Section/Semester"
                                    mode='outlined'
                                    onBlur={onBlur}
                                    onChangeText={onChange}
                                    value={value}
                                />
                            )}
                            name="class"
                        />
                        {errors.class && <Text>This is required.</Text>}

                        <Controller
                            control={control}
                            rules={{
                                required: true,
                            }}
                            render={({ field: { onChange, onBlur, value } }) => (
                                <TextInput
                                    label="Vanue"
                                    mode='outlined'
                                    onBlur={onBlur}
                                    onChangeText={onChange}
                                    value={value}
                                />
                            )}
                            name="vanue"
                        />
                        {errors.vanue && <Text>This is required.</Text>}

                        <Controller
                            control={control}
                            rules={{
                                required: true,
                            }}
                            render={({ field: { onChange, onBlur, value } }) => (
                                <TextInput
                                    label="Remarks"
                                    mode='outlined'
                                    onBlur={onBlur}
                                    onChangeText={onChange}
                                    value={value}
                                />
                            )}
                            name="remarks"
                        />
                        {errors.remarks && <Text>This is required.</Text>}


                        
                        <Button onPress={handleSubmit(onSubmit)}>
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
