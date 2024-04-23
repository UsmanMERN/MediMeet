import React, { useEffect, useState } from 'react';
import { Dimensions, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import bgImage from '../../assets/loginbg.png';
import Colors from '../../utils/Colors';

import { GoogleSignin } from '@react-native-google-signin/google-signin';
import auth from '@react-native-firebase/auth';
import { storeData } from '../../utils/Store';
import Snackbar from 'react-native-snackbar';
import { useAuthContext } from '../../context/AuthContext';
import { useNavigation } from '@react-navigation/native';

export default function Login() {
    const { dispatch } = useAuthContext()
    const navigation = useNavigation();

    const [isLoading, setIsLoading] = useState(false)



    useEffect(() => {
        GoogleSignin.configure({
            webClientId: '960809366441-mvq3ad623n6m88rbukvr6ussgrbr4ppt.apps.googleusercontent.com',
        });
    }, [])

    async function handleLogin() {
        try {
            setIsLoading(true)
            await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true });

            const { idToken } = await GoogleSignin.signIn();

            const googleCredential = auth.GoogleAuthProvider.credential(idToken);

            await auth().signInWithCredential(googleCredential);

            const currentUser = auth().currentUser;

            if (currentUser) {
                await storeData("login", 'true');

                await dispatch({ type: "LOGIN", payload: currentUser });

                Snackbar.show({
                    text: 'Login Successfully',
                    duration: Snackbar.LENGTH_SHORT,
                    backgroundColor: Colors.PRIMARY,
                    textAlign: 'center',
                });
            } else {
                console.error("Unable to retrieve current user after sign-in.");
            }
        } catch (error) {
            console.error("Error occurred during Google sign-in:", error);
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                <Image source={bgImage} style={styles.image} />
            </View>
            <View style={styles.bottomTextContainer}>
                <Text style={styles.title}>Your Ultimate Doctor</Text>
                <Text style={styles.subtitle}>Book Your Appointments</Text>
                <View style={styles.descriptionContainer}>
                    <Text style={styles.description}>Book your appointments effortlessly and manage your health journey.</Text>
                </View>
                <TouchableOpacity style={styles.loginButton} onPress={handleLogin} disabled={isLoading}>
                    <Text style={styles.loginText}>Sign in with Google</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 50,
        alignItems: 'center',
        backgroundColor: "#e5e5e5",
        position: 'relative',
    },
    imageContainer: {
        marginBottom: 20,
    },
    image: {
        width: 300,
        height: 500,
        objectFit: 'contain',
        resizeMode: 'contain',
        borderRadius: 30
    },
    bottomTextContainer: {
        alignItems: 'center',
        marginTop: -70,
        backgroundColor: Colors.WHITE,
        padding: 25,
        width: "100%",
        height: "40%",
        borderTopEndRadius: 20,
        borderTopStartRadius: 20,
        position: 'absolute',
        bottom: 0,
    },
    title: {
        fontSize: 18,
        color: "#000",
        marginVertical: 5,
        fontSize: 25,
        fontWeight: 'bold'
    },
    subtitle: {
        color: "#000",
        fontSize: 18,
        marginBottom: 15,
        fontWeight: 'bold'
    },
    loginButton: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
        justifyContent: 'center',
        backgroundColor: Colors.PRIMARY,
        padding: 10,
        borderRadius: 99,
        marginTop: 25,
        paddingHorizontal: 30,
        width: Dimensions.get('screen').width * 0.6
    },
    loginText: {
        color: Colors.WHITE,
        fontWeight: 'bold',
        fontSize: 12,
    },
    description: {
        color: "#000",
        textAlign: 'center',
        fontSize: 12,
    },
    descriptionContainer: {
        width: Dimensions.get('screen').width
    }
});
