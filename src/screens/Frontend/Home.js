import React from 'react';
import { StyleSheet, Text, View, Image, Button } from 'react-native';
import auth from '@react-native-firebase/auth';
import Snackbar from 'react-native-snackbar';

import { useAuthContext } from '../../context/AuthContext';
import { useNavigation } from '@react-navigation/native';
import { storeData } from '../../utils/Store';
import Colors from '../../utils/Colors';

export default function Home() {
    const navigation = useNavigation();
    const { user, dispatch } = useAuthContext();

    const handleLogout = () => {
        auth().signOut()
            .then(() => {
                storeData("login", 'false');
                dispatch({ type: "LOGOUT", payload: {} });
                Snackbar.show({
                    text: 'Logout Successfully',
                    duration: Snackbar.LENGTH_SHORT,
                    backgroundColor: Colors.WHITE,
                    textAlign: 'center',
                    textColor: Colors.PRIMARY
                })
            })
            .catch(error => {
                console.error('Error signing out:', error);
            });
    };

    console.log('user', user)
    return (
        <View style={styles.container}>
            <View style={styles.profileContainer}>
                <Image source={{ uri: user?.photoURL || "'https://dummyimage.com/200x200/000/fff'" }} style={styles.profileImage} />
                <Text style={styles.userName}>Welcome to mediMeet {user?.displayName}!</Text>
            </View>
            <Button title="Logout" onPress={handleLogout} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    profileContainer: {
        alignItems: 'center',
        marginBottom: 20,
    },
    profileImage: {
        width: 100,
        height: 100,
        borderRadius: 50,
        marginBottom: 10,
    },
    userName: {
        fontSize: 18,
        fontWeight: 'bold',
        color: "#000"
    },
});
