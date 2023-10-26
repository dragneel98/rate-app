import React from 'react'
import { StyleSheet, Text, View } from 'react-native';
import RepositoriesList from './RepositoriesList';
import AppBar from './AppBar';
import { NativeRouter, Navigate, Route, Routes } from 'react-router-native';
import Login from './Login';

export default function Main() {
    return (
        <NativeRouter>
            <View style={{ flexGrow: 1 }}>
                <AppBar></AppBar>
                <Routes>
                    <Route path='/' element={<RepositoriesList />} />
                    <Route path='/signin' element={<Login></Login>} />
                    <Route path='*' element={<Navigate to='/' />} />
                </Routes>
            </View>
        </NativeRouter>
    )
}
