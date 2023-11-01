import React from 'react'
import { Image, Platform, StyleSheet, View } from 'react-native';
import StyledText from './StyledText';
import { RepositoriesStats } from './RepositoriStats';
import { theme } from './theme';

const style = StyleSheet.create({
    container: {
        padding: 20,
        paddingBottom: 5,
        paddingTop: 5,
        marginVertical: 15,
    },
    header: {
        flexDirection: 'row',
        paddingVertical: 2,
    },
    header1: {
        paddingBottom: 2,
        alignItems: "center",

    },
    header2: {
        paddingLeft: 10,
        gap: 5,
        flex: 1,
        paddingBottom: 10,
    },
    description: {
        color: theme.colors.textSecondary
    },
    language: {
        padding: 5,
        alignSelf: "flex-start",
        backgroundColor: Platform.select({
            android: theme.colors.red,
            ios: "blue",
            default: "grey"
        }),
        borderRadius: 4,
        overflow: "hidden"
    },
    image: {
        width: 48,
        height: 48
    }
})
const ItemHeader = (props) => {
    return (
        <View style={style.header}>
            <View style={style.header1}>
                <Image style={style.image} source={{ uri: props.ownerAvatarUrl }}></Image>
            </View>
            <View style={style.header2}>
                <StyledText fontSize="subheading" fontWeight="bold"> {props.fullName} </StyledText>
                <StyledText style={style.description} > {props.description} </StyledText>
                <StyledText style={style.language}> {props.language} </StyledText>
            </View>
        </View>
    )
}
export default function RepositoryItem(props) {
    return (
        <View style={style.container}>
            <ItemHeader {...props}></ItemHeader>
            <RepositoriesStats {...props}></RepositoriesStats>
        </View>
    )
}
