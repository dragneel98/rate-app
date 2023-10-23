import React from 'react'
import { StyleSheet } from 'react-native'
import { Text } from 'react-native';
import { theme } from './theme';

const styles = StyleSheet.create({
    text: {
        color: theme.colors.textPrimary,
        fontSize: theme.fontSizes.body,
        fontWeight: theme.fontWeights.normal,
        fontFamily: theme.fonts.main
    },
    colorPrimary: {
        color: theme.colors.primary
    },
    colorSecondary: {
        color: theme.colors.textSecondary
    },
    bold: {
        fontWeight: theme.fontWeights.bold
    },
    subheading: {
        fontSize: theme.fontSizes.subheading
    },
    align: {
        textAlign: "center"
    }
})

export default function StyledText({ align, children, color, fontSize, fontWeight, style, ...restOfProps }) {
    const textStyles = [
        styles.text,
        color === "primary" && styles.colorPrimary,
        color === "secondary" && styles.colorSecondary,
        fontSize === "subheading" && styles.subheading,
        fontWeight === "bold" && styles.bold,
        align === "center" && styles.align
    ]
    return (
        <Text style={textStyles} {...restOfProps}>
            {children}
        </Text>
    )
}
