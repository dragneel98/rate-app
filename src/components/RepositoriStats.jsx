import React from 'react'
import { StyleSheet } from 'react-native'
import StyledText from './StyledText'
import { View } from 'react-native';

const parseThousands = value => {
    return value >= 1000
        ? `${Math.round(value / 100) / 10}K`
        : value
}
const style = StyleSheet.create({
    view: {
        flexDirection: "row",
        justifyContent: "space-around"
    }
})
export const RepositoriesStats = props => {
    return (
        <View style={style.view} >
            <View>
                <StyledText align="center" fontWeight="bold"> Stars </StyledText>
                <StyledText align="center" fontWeight="bold"> {parseThousands(props.stargazersCount)} </StyledText>
            </View>
            <View>
                <StyledText align="center" fontWeight="bold"> Forks </StyledText>
                <StyledText align="center" fontWeight="bold"> {parseThousands(props.forksCount)} </StyledText>
            </View>
            <View>
                <StyledText align="center" fontWeight="bold"> Review </StyledText>
                <StyledText align="center" fontWeight="bold"> {props.reviewCount} </StyledText>
            </View>
            <View>
                <StyledText align="center" fontWeight="bold"> Rating </StyledText>
                <StyledText align="center" fontWeight="bold"> {props.ratingAverage} </StyledText>
            </View>
        </View>
    )
}