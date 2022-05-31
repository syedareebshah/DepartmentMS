import React, { useState } from 'react';
import { useForm, Controller } from "react-hook-form";
import firestore from '@react-native-firebase/firestore';

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
import {useSelector} from 'react-redux'
import { loginFlag } from '../../redux/loginSlice';

const CreateTeacherProfile = () => {
    const styles = useStyles()
    const { control, handleSubmit, formState: { errors } } = useForm({
        defaultValues: {
            name: '',
            post: '',
            qualification: '',
            email: ''
        }
    });
    const adminFlag = useSelector(payload => payload.login.isLoggedIn)
    console.log(adminFlag,"........");
    const uId = new Date().getTime().toString()
    console.log(uId);
    const onSubmit = ({name, post, qualification,email}) =>
    {
        firestore()
            .collection('TeacherProfiles')
            .add({
                name,
                post,
                qualification,
                email,
                uId
            })
            .then(() => {
                alert("Profile Created")
            });

    }


    return (
        <ScrollView>
            <View style={styles.container}>
                <Controller
                    control={control}
                    rules={{
                        required: true,
                    }}
                    render={({ field: { onChange, onBlur, value } }) => (
                        <TextInput
                            label="Name"
                            mode='outlined'
                            onBlur={onBlur}
                            onChangeText={onChange}
                            value={value}
                        />
                    )}
                    name="name"
                />
                {errors.name && <Text>This is required.</Text>}

                <Controller
                    control={control}
                    rules={{
                        required: true,
                    }}
                    render={({ field: { onChange, onBlur, value } }) => (
                        <TextInput
                            label="Designation"
                            mode='outlined'
                            onBlur={onBlur}
                            onChangeText={onChange}
                            value={value}
                        />
                    )}
                    name="post"
                />
                {errors.post && <Text>This is required.</Text>}

                <Controller
                    control={control}
                    rules={{
                        required: true,
                    }}
                    render={({ field: { onChange, onBlur, value } }) => (
                        <TextInput
                            label="Qualification"
                            mode='outlined'
                            onBlur={onBlur}
                            onChangeText={onChange}
                            value={value}
                        />
                    )}
                    name="qualification"
                />
                {errors.qualification && <Text>This is required.</Text>}

                <Controller
                    control={control}
                    rules={{
                        required: true,
                    }}
                    render={({ field: { onChange, onBlur, value } }) => (
                        <TextInput
                            label="Email"
                            mode='outlined'
                            onBlur={onBlur}
                            onChangeText={onChange}
                            value={value}
                        />
                    )}
                    name="email"
                />
                {errors.email && <Text>This is required.</Text>}


                <Button style={styles.btn} mode="contained" onPress={handleSubmit(onSubmit)}>
                    Post
                </Button>
            </View>
        </ScrollView>
    );
};



export default CreateTeacherProfile;
