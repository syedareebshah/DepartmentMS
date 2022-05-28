import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import { Provider as PaperProvider, TextInput } from 'react-native-paper';
import StackNav from './src/Navigation/StackNav';
import AdminHome from './src/screens/AdminHome';
import Login from './src/screens/AdminLogin';
import CreateTeacherProfile from './src/screens/CreateTeacherProfile';
import PostDateSheet from './src/screens/PostDateSheet';
import PostNotification from './src/screens/PostNotification';
import PostTimeTable from './src/screens/PostTimeTable';
import StudentHome from './src/screens/Notifications';
import ViewComplaints from './src/screens/ViewComplaints';
import Welcome from './src/screens/WelcomeScreen';
import Notifications from './src/screens/Notifications';
import NotificationDetails from './src/screens/NotificationDetails';
import DateSheet from './src/screens/DateSheet';
import TimeTable from './src/screens/TimeTable';
import TeacherProfile from './src/screens/TeacherProfile';

const App = () => {
  return (
    <PaperProvider>
      <StackNav />
    </PaperProvider>
  );
};



export default App;
