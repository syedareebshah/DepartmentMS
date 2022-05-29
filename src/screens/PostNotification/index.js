import React from 'react';
import { useForm, Controller } from "react-hook-form";

import {
    ScrollView,
    Text,
    View,
    TouchableOpacity
} from 'react-native';
import { useStyles } from './styles';
import { TextInput, Button } from 'react-native-paper';


const PostNotification = () => {
    const styles = useStyles()

    const { control, handleSubmit, formState: { errors } } = useForm({
        defaultValues: {
            title: '',
            subject: '',
            regards: ''
        }
    });
    const onSubmit = data => console.log(data);

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
                            label="Title"
                            mode='outlined'
                            onBlur={onBlur}
                            onChangeText={onChange}
                            value={value}
                        />
                    )}
                    name="title"
                />
                {errors.title && <Text>This is required.</Text>}

                <Controller
                    control={control}
                    rules={{
                        required: true,
                    }}
                    render={({ field: { onChange, onBlur, value } }) => (
                        <TextInput
                            label="Subject"
                            mode='outlined'
                            multiline={true}
                            style={styles.textarea}

                            numberOfLines={20}
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
                            label="Regards"
                            mode='outlined'
                            onBlur={onBlur}
                            onChangeText={onChange}
                            value={value}
                        />
                    )}
                    name="regards"
                />
                {errors.regards && <Text>This is required.</Text>}


                <Button style={styles.btn} mode="contained" onPress={handleSubmit(onSubmit)}>
                    Post
                </Button>


            </View>
        </ScrollView>
    );
};



export default PostNotification;
