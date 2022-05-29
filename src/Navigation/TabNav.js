import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Notifications from '../screens/Notifications';
import DateSheet from '../screens/DateSheet';
import TimeTable from '../screens/TimeTable';
import TeacherProfile from '../screens/TeacherProfile';
import TeachersList from '../screens/TeachersList';


const Tab = createBottomTabNavigator();

function TabNav() {
  return (
    <Tab.Navigator screenOptions={{
      headerShown: false
    }}>
      <Tab.Screen name="Notification" component={Notifications} />
      <Tab.Screen name="DateSheet" component={DateSheet} />
      <Tab.Screen name="TimeTable" component={TimeTable} />
      <Tab.Screen name="Teachers" component={TeachersList} />
    </Tab.Navigator>
  );
}

export default TabNav;