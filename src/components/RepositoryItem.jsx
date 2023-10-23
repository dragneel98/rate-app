import React from 'react'
import { View } from 'react-native';
import StyledText from './StyledText';
import { RepositoriesStats } from './RepositoriStats';
import { StyleSheet } from 'react-native-web';

const style = StyleSheet.create({
    container: {
        padding: 20,
        paddingBottom: 5,
        paddingTop: 5
    },
    language: {
        color: "red"
    }
})

export default function RepositoryItem(props) {
    return (
        <View style={style.container}>
            <StyledText fontSize="subheading" fontWeight="bold"> {props.fullName} </StyledText>
            <StyledText > {props.description} </StyledText>
            <StyledText > {props.language} </StyledText>
            <RepositoriesStats {...props}></RepositoriesStats>
        </View>
    )
}
