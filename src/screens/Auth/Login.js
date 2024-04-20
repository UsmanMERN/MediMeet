import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import bgImage from '../../assets/loginbg.png';
import Colors from '../../utils/Colors';

export default function Login() {
    return (
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                <Image source={bgImage} style={styles.image} />
            </View>
            <View style={styles.bottomTextContainer}>
                <Text style={styles.title}>Your Ultimate Doctor</Text>
                <Text style={styles.subtitle}>Book Your Appointments</Text>
                <Text style={styles.description}>Book your appointments effortlessly and manage your health journey.</Text>
                <TouchableOpacity style={styles.loginButton} >
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
        backgroundColor: Colors.white,
        padding: 25,
        width: "100%",
        height: "40%",
        borderTopEndRadius: 20,
        borderTopStartRadius: 20
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
        backgroundColor: "#6857E8",
        padding: 10,
        borderRadius: 99,
        marginTop: 25,
        paddingHorizontal: 30,
    },
    description: {
        color: "#000",
        textAlign: 'center',
        fontSize: 12
    }
});
