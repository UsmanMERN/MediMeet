import React from 'react'
import { StyleSheet } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
// Screen
import Appointment from '../Apponitment';
import LeaderBoard from '../LeaderBoard';
import Profile from '../Profile';
import HomeScreenNavigations from './HomeScreenNavigations';

const Tab = createBottomTabNavigator();
export default function FrontendNavigator() {
    return (
        <Tab.Navigator initialRouteName={"Home"} screenOptions={{ headerShown: false, }} styles={styles.container}>
            <Tab.Group >
                <Tab.Screen name="Home" component={HomeScreenNavigations} options={{ tabBarIcon: (({ color, size }) => (<Icon name="home" color={color} size={size} />)) }} />
                <Tab.Screen name="Appointment" component={Appointment} options={{ tabBarLabel: "Appointment", tabBarIcon: (({ color, size }) => (<Icon name="calendar-multiselect" color={color} size={size} />)) }} />
                <Tab.Screen name="Leaderboard" component={LeaderBoard} options={{ tabBarLabel: "LeaderBoard", tabBarIcon: (({ color, size }) => (<MaterialIcon name="leaderboard" color={color} size={size} />)) }} />
                <Tab.Screen name="profile" component={Profile} options={{ tabBarLabel: "Profile", tabBarIcon: (({ color, size }) => (<MaterialIcon name="supervised-user-circle" color={color} size={size} />)) }} />
            </Tab.Group>
        </Tab.Navigator>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        marginTop: 20
    }
})