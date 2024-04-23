import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

import AppNavigator from './src/AppNavigator/AppNavigator'
import AuthContextProvier from "./src/context/AuthContext"
import { NavigationContainer } from '@react-navigation/native'

export default function App() {
  return (
    <NavigationContainer>
      <AuthContextProvier>
        <AppNavigator />
      </AuthContextProvier>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({})