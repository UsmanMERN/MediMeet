import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

import AppNavigator from './src/AppNavigator/AppNavigator'
import AuthContextProvier from "./src/context/AuthContext"

export default function App() {
  return (
    <AuthContextProvier>
      <AppNavigator />
    </AuthContextProvier>
  )
}

const styles = StyleSheet.create({})