import React from 'react'
import { StyleSheet, Text, View } from 'react-native';
import Constants from "expo-constants"
import RepositoriesList from './RepositoriesList';

export default function Main() {
    return (
        <View style={{ marginTop: Constants.statusBarHeight, flexGrow: 1 }}>
            <RepositoriesList></RepositoriesList>
        </View>
    )
}
