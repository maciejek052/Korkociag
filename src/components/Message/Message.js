import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import moment from "moment"
import 'moment/locale/pl'

const Message = ({ message, userID }) => {

    const usersMessage = () => {
        return message.chatMessageUserInfoId === userID
    }

    return (
        <View style={[styles.container,
        { backgroundColor: usersMessage() ? '#0975fd' : 'white' },
        { alignSelf: usersMessage() ? 'flex-end' : 'flex-start' }
        ]}>
            <Text style={{ color: usersMessage() ? 'white' : 'black' }}>{message.message}</Text>
            <Text style={[styles.time, { color: usersMessage() ? '#d3d3d3' : 'gray' }]}>{moment(message.createdAt).fromNow()}</Text>
        </View >
    )
}

export default Message
const styles = StyleSheet.create({
    container: {
        padding: 10,
        borderRadius: 10,
        maxWidth: '80%',
        alignSelf: 'flex-start',
        marginVertical: 1,
    },
    time: {
        alignSelf: 'flex-end'
    }
})