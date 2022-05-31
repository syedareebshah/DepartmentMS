import * as React from 'react';
import {View,Text} from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Notifications from '../screens/Notifications';
import DateSheet from '../screens/DateSheet';
import TimeTable from '../screens/TimeTable';
import TeacherProfile from '../screens/TeacherProfile';
import TeachersList from '../screens/TeachersList';
import Complaint from '../screens/Complaint';
import AdminHome from '../screens/AdminHome';


const Tab = createBottomTabNavigator();

function TabNav() {
  return (
    <Tab.Navigator screenOptions={{
      headerShown: false
    }}>
      <Tab.Screen name="Notification" component={Notifications}
      options={{
        tabBarShowLabel: false,
        tabBarIcon: () => {
            return (
                <View>
                    <Text>Notification</Text>
                </View>
            )
        }
    }}
      />
      <Tab.Screen name="DateSheet" component={DateSheet}
      options={{
        tabBarShowLabel: false,
        tabBarIcon: () => {
            return (
                <View>
                    <Text>DateSheet</Text>
                </View>
            )
        }
    }}
      />
      <Tab.Screen name="TimeTable" component={TimeTable} 
      options={{
        tabBarShowLabel: false,
        tabBarIcon: () => {
            return (
                <View>
                    <Text>TimeTable</Text>
                </View>
            )
        }
    }}
      />
      <Tab.Screen name="Teachers" component={TeachersList} 
      options={{
        tabBarShowLabel: false,
        tabBarIcon: () => {
            return (
                <View>
                    <Text>Teachers</Text>
                </View>
            )
        }
    }}
      />
      <Tab.Screen name="Complaint" component={Complaint} 
      options={{
        tabBarShowLabel: false,
        tabBarIcon: () => {
            return (
                <View>
                    <Text>Complaint</Text>
                </View>
            )
        }
    }}
     />
      
    </Tab.Navigator>
  );
}

export default TabNav;