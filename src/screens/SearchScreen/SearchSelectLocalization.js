import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const SearchSelectLocalization = ({ route, navigation }) => {
    const { level, subject } = route.params
    return (
        <View style={styles.root}>
            <Text>{level}</Text>
            <Text>{subject}</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    root: {
        alignItems: 'center',
        padding: 20
    }
})
export default SearchSelectLocalization