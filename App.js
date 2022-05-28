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
import { Provider as PaperProvider,TextInput } from 'react-native-paper';
import AdminHome from './src/screens/AdminHome';
import Login from './src/screens/AdminLogin';
import Welcome from './src/screens/WelcomeScreen';

const App = () => {


  return (
    <PaperProvider>
      <AdminHome />
    </PaperProvider>

  );
};

const styles = StyleSheet.create({

});

export default App;
