import React from 'react'
import { ScrollView, StyleSheet, View } from 'react-native'
import StyledText from './StyledText'
import Constants from "expo-constants"
import { theme } from './theme'
import { Link, useLocation } from 'react-router-native'
import { TouchableWithoutFeedback } from 'react-native-web'

const style = StyleSheet.create({
    container: {
        paddingTop: Constants.statusBarHeight,
        backgroundColor: theme.appBar.primary,
        flexDirection: "row",
    },
    scroll: {
        paddingVertical: 10,
    },
    text: {
        color: theme.appBar.textSecondary,
        paddingHorizontal: 10,
    },
    active: {
        color: theme.appBar.textPrimary,
    }
})

const AppBarTab = ({ active, children, to }) => {
    const { pathname } = useLocation()
    active = pathname === to
    const textStyle = [
        style.text,
        active && style.active
    ]
    return (
        // se puede renderizar un componente en el link de esta forma
        // <Link to={to} component={TouchableWithoutFeedback}></Link>
        <Link to={to}>
            <StyledText style={textStyle}>{children}</StyledText>
        </Link>
    )
}

export default function AppBar() {
    return (
        <View style={style.container}>
            <ScrollView horizontal style={style.scroll}>
                <AppBarTab to={"/"}>repositories</AppBarTab>
                <AppBarTab to={"/signin"}>signin</AppBarTab>
            </ScrollView>
        </View>
    )
}
