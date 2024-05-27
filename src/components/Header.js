import React, { useState } from 'react';
import { Image, StyleSheet, Text, TextInput, View, TouchableOpacity, Platform } from 'react-native';
import { useAuthContext } from '../context/AuthContext';
import Colors from '../utils/Colors';
import Icon from "react-native-vector-icons/Ionicons";
import MaterialIcon from "react-native-vector-icons/MaterialCommunityIcons";

const Header = () => {
    const { user } = useAuthContext();
    const [searchValue, setSearchValue] = useState('');

    const getGreeting = () => {
        const hours = new Date().getHours();
        if (hours < 12) return "Good Morning";
        if (hours < 18) return "Good Afternoon";
        return "Good Evening";
    };

    const handleSearchChange = (text) => {
        setSearchValue(text);
    };

    const handleSearchSubmit = () => {
        console.log('Search Value:', searchValue);
    };
    return (
        <View style={styles.headerContainer}>
            <View style={styles.topBar}>
                <Image source={user?.photoURL ? { uri: user.photoURL } : require('../assets/images/avatar.png')} style={styles.avatar} />
                <View>
                    <Text style={styles.welcomeTxt}>{getGreeting()},</Text>
                    <Text style={styles.nameTxt}>{user?.displayName}</Text>
                </View>
                <TouchableOpacity style={styles.notificationIcon}>
                    <MaterialIcon name="bell-outline" size={30} color={Colors.WHITE} />
                </TouchableOpacity>
            </View>

            <View style={styles.searchContainer}>
                <TextInput
                    placeholder='Search Appointments'
                    placeholderTextColor={Colors.GRAY}
                    style={styles.searchBarText}
                    value={searchValue}
                    onChangeText={handleSearchChange}
                    onSubmitEditing={handleSearchSubmit}
                />
                <TouchableOpacity>
                    <Icon name="search-circle" style={styles.searchIcon} size={40} />
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    headerContainer: {
        padding: 20,
        backgroundColor: Colors.PRIMARY,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        ...Platform.select({
            ios: {
                shadowColor: 'black',
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.8,
                shadowRadius: 2,
            },
            android: {
                elevation: 3,
            },
        }),
    },
    topBar: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
    },
    avatar: {
        height: 50,
        width: 50,
        borderRadius: 25,
        marginRight: 10,
    },
    welcomeTxt: {
        color: Colors.WHITE,
        fontSize: 14,
    },
    nameTxt: {
        color: Colors.WHITE,
        fontSize: 18,
        fontWeight: 'bold',
    },
    notificationIcon: {
        marginLeft: 'auto',
    },
    searchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: Colors.WHITE,
        borderRadius: 20,
        paddingVertical: 10,
        paddingHorizontal: 15,
        ...Platform.select({
            ios: {
                shadowColor: 'black',
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.8,
                shadowRadius: 2,
            },
            android: {
                elevation: 3,
            },
        }),
    },
    searchBarText: {
        flex: 1,
        color: "#000",
    },
    searchIcon: {
        color: Colors.PRIMARY,
    },
});

export default Header;
