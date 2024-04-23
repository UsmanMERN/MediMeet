import React from 'react';
import { StyleSheet, Text, View, Image, Button } from 'react-native';
import { useAuthContext } from 'context/AuthContext';
import firebase from 'firebase/app';
import 'firebase/auth';

export default function Home() {
    const { user } = useAuthContext();

    const handleLogout = async () => {
        try {
            await firebase.auth().signOut();
        } catch (error) {
            console.error('Error signing out:', error);
        }
    };

    return (
        <View style={styles.container}>
            <View style={styles.profileContainer}>
                <Image
                    source={{ uri: user.photoURL }}
                    style={styles.profileImage}
                />
                <Text style={styles.userName}>Welcome to mediMeet {user.displayName}!</Text>
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
    },
});
