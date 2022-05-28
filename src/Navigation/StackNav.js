import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Welcome from '../screens/WelcomeScreen';
import Login from '../screens/AdminLogin';
import AdminHome from '../screens/AdminHome';
import PostNotification from '../screens/PostNotification';
import PostDateSheet from '../screens/PostDateSheet';
import PostTimeTable from '../screens/PostTimeTable';
import CreateTeacherProfile from '../screens/CreateTeacherProfile';
import ViewComplaints from '../screens/ViewComplaints';
import Notifications from '../screens/Notifications';
import NotificationDetails from '../screens/NotificationDetails';
import DateSheet from '../screens/DateSheet';
import TimeTable from '../screens/TimeTable';
import TeacherProfile from '../screens/TeacherProfile';

const Stack = createNativeStackNavigator();

function StackNav() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Dept. Management System" component={Welcome}
                    options={{
                        headerStyle: {
                            backgroundColor: 'blue',
                        },
                        headerTitleAlign: 'center',
                        headerTintColor: '#fff',
                        headerTitleStyle: {
                            fontWeight: 'bold',
                        },
                    }}
                />

                <Stack.Screen name="Login" component={Login}
                    options={{
                        headerStyle: {
                            backgroundColor: 'blue',
                        },
                        headerTintColor: '#fff',
                        headerTitleStyle: {
                            fontWeight: 'bold',
                        },
                    }}
                />

                <Stack.Screen name="AdminHome" component={AdminHome}
                    options={{
                        headerStyle: {
                            backgroundColor: 'blue',
                        },
                        headerTintColor: '#fff',
                        headerTitleStyle: {
                            fontWeight: 'bold',
                        },
                    }}
                />

                <Stack.Screen name="PostNotification" component={PostNotification}
                    options={{
                        headerStyle: {
                            backgroundColor: 'blue',
                        },
                        headerTintColor: '#fff',
                        headerTitleStyle: {
                            fontWeight: 'bold',
                        },
                    }}
                />

                <Stack.Screen name="PostDateSheet" component={PostDateSheet}
                    options={{
                        headerStyle: {
                            backgroundColor: 'blue',
                        },
                        headerTintColor: '#fff',
                        headerTitleStyle: {
                            fontWeight: 'bold',
                        },
                    }}
                />

                <Stack.Screen name="PostTimeTable" component={PostTimeTable}
                    options={{
                        headerStyle: {
                            backgroundColor: 'blue',
                        },
                        headerTintColor: '#fff',
                        headerTitleStyle: {
                            fontWeight: 'bold',
                        },
                    }}
                />

                <Stack.Screen name="CreateTeacherProfile" component={CreateTeacherProfile}
                    options={{
                        headerStyle: {
                            backgroundColor: 'blue',
                        },
                        headerTintColor: '#fff',
                        headerTitleStyle: {
                            fontWeight: 'bold',
                        },
                    }}
                />

                <Stack.Screen name="Complaints" component={ViewComplaints}
                    options={{
                        headerStyle: {
                            backgroundColor: 'blue',
                        },
                        headerTintColor: '#fff',
                        headerTitleStyle: {
                            fontWeight: 'bold',
                        },
                    }}
                />

                <Stack.Screen name="Notifications" component={Notifications}
                    options={{
                        headerStyle: {
                            backgroundColor: 'blue',
                        },
                        headerTintColor: '#fff',
                        headerTitleStyle: {
                            fontWeight: 'bold',
                        },
                    }}
                />
                <Stack.Screen name="Notification" component={NotificationDetails}
                    options={{
                        headerStyle: {
                            backgroundColor: 'blue',
                        },
                        headerTintColor: '#fff',
                        headerTitleStyle: {
                            fontWeight: 'bold',
                        },
                    }}
                />

                <Stack.Screen name="DateSheet" component={DateSheet}
                    options={{
                        headerStyle: {
                            backgroundColor: 'blue',
                        },
                        headerTintColor: '#fff',
                        headerTitleStyle: {
                            fontWeight: 'bold',
                        },
                    }}
                />

                <Stack.Screen name="TimeTable" component={TimeTable}
                    options={{
                        headerStyle: {
                            backgroundColor: 'blue',
                        },
                        headerTintColor: '#fff',
                        headerTitleStyle: {
                            fontWeight: 'bold',
                        },
                    }}
                />

                <Stack.Screen name="TeacherProfile" component={TeacherProfile}
                    options={{
                        headerStyle: {
                            backgroundColor: 'blue',
                        },
                        headerTintColor: '#fff',
                        headerTitleStyle: {
                            fontWeight: 'bold',
                        },
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default StackNav;