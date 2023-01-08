import { View, Text, TextInput, StyleSheet } from 'react-native'
import React from 'react'

const BasicInput = ({ value, setValue, placeholder, secureTextEntry, keyboardType }) => {
    return (
        <View style={styles.container}>
            <TextInput
                value={value}
                onChangeText={setValue}
                placeholder={placeholder}
                style={styles.input}
                keyboardType={keyboardType}
                secureTextEntry={secureTextEntry} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        width: '100%',

        borderColor: '#e8e8e8',
        borderWidth: 1,
        borderRadius: 5, // 10

        paddingHorizontal: 10,
        paddingVertical: 10, // maybe will need to be changed
        marginVertical: 5
    },
    input: {}
})

export default BasicInput