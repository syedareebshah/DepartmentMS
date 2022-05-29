import React, { useState } from 'react';
import { useForm, Controller } from "react-hook-form";

import {
    ScrollView,
    Text,
    View,

} from 'react-native';
import { Button, TextInput } from 'react-native-paper';
import { useStyles } from './styles';

const PostTimeTable = () => {
    const styles = useStyles()
    const [add, setAdd] = useState(false)
    console.log(add);

    const { control, handleSubmit, formState: { errors } } = useForm({
        defaultValues: {
            day: '',
            time: '',
            roomFloor: '',
            subject: '',
            teacher: ''
        }
    });
    const onSubmit = (data) => {
        console.log(data);
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
                                    label="Day"
                                    mode='outlined'
                                    onBlur={onBlur}
                                    onChangeText={onChange}
                                    value={value}
                                />
                            )}
                            name="day"
                        />
                        {errors.day && <Text>This is required.</Text>}

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
                                    label="Room/Floor"
                                    mode='outlined'
                                    onBlur={onBlur}
                                    onChangeText={onChange}
                                    value={value}
                                />
                            )}
                            name="roomFloor"
                        />
                        {errors.roomFloor && <Text>This is required.</Text>}


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
                                    label="Teacher"
                                    mode='outlined'
                                    onBlur={onBlur}
                                    onChangeText={onChange}
                                    value={value}
                                />
                            )}
                            name="teacher"
                        />
                        {errors.teacher && <Text>This is required.</Text>}


                        <Button onPress={handleSubmit(onSubmit)}>
                            Submit
                        </Button>

                    </View>
                }


                <Button style={styles.btn} mode="contained" onPress={()=>{setAdd(true)}}>
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
