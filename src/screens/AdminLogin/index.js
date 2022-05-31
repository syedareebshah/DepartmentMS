import React from 'react';
import { useForm, Controller } from "react-hook-form";

import {
    ScrollView,
    StyleSheet,
    Text,
    Image,
    View,

} from 'react-native';
import { Button, TextInput } from 'react-native-paper';
import { useStyles } from './styles';
import {useDispatch} from 'react-redux'
import { loginFlag } from '../../redux/loginSlice';


const Login = ({ navigation }) => {
    const styles = useStyles()
    const dispatch = useDispatch()
    const { control, handleSubmit, formState: { errors } } = useForm({
        defaultValues: {
            email: '',
            password: ''
        }
    });
    const onSubmit = ({email, password})=> {
        if (email == 'admin@mail.com' && password == '123'){
            dispatch(loginFlag(true))
            navigation.navigate('AdminHome')
        }
        else{
            alert("wrong email/password")
        }
    }

    return (
        <ScrollView>

            <View style={styles.container}>
                <Image style={styles.img} source={require('../../assets/logo.png')} />

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

                

                <Controller
                    control={control}
                    rules={{
                        required: true,
                    }}
                    render={({ field: { onChange, onBlur, value } }) => (
                        <TextInput
                            label="Password"
                            mode='outlined'
                            onBlur={onBlur}
                            onChangeText={onChange}
                            value={value}
                        />
                    )}
                    name="password"
                />
                {errors.password && <Text>This is required.</Text>}

                

                <Button style={styles.btn} mode="contained" onPress={handleSubmit(onSubmit)}>
                    Login
                </Button>
            </View>
        </ScrollView>
    );
};



export default Login;
