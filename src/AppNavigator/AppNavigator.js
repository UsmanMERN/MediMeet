import React, { useCallback, useEffect, useState } from 'react';
import { ActivityIndicator, StyleSheet, View } from 'react-native';
import auth from '@react-native-firebase/auth';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// context
import { useAuthContext } from '../context/AuthContext';

// utils
import { getData } from '../utils/Store';
import Colors from '../utils/Colors';

// screens
import Home from '../screens/Frontend/Home';
import Login from '../screens/Auth/Login';

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
    const { isAuthenticated, dispatch } = useAuthContext();
    const [isLoading, setIsLoading] = useState(true);

    const fetchUserAndCheckLoginStatus = useCallback(async () => {
        try {
            const unsubscribe = auth().onAuthStateChanged(async (firebaseUser) => {
                const result = await getData('login');
                if (result === 'true') {
                    dispatch({ type: "LOGIN", payload: firebaseUser });
                }
                unsubscribe();
                setIsLoading(false);
            });
        } catch (error) {
            console.error('Error in fetching user or checking login status:', error);
        }
    }, [dispatch]);

    useEffect(() => {
        fetchUserAndCheckLoginStatus();
    }, [fetchUserAndCheckLoginStatus, dispatch]);

    if (isLoading) {
        return (
            <View style={styles.container}>
                <ActivityIndicator size="large" color={Colors.PRIMARY} />
            </View>
        )
    }
    return (
        <Stack.Navigator initialRouteName='Login' screenOptions={{ headerShown: false }}>
            {isAuthenticated ? (
                <Stack.Screen name="Home" component={Home} options={{ title: 'Home' }} />
            ) : (
                <Stack.Screen name="Login" component={Login} options={{ title: 'Login' }} />
            )}
        </Stack.Navigator>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.WHITE
    },
});
