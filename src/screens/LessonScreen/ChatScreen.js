import { View, Text, KeyboardAvoidingView, StyleSheet, FlatList, TextInput, Platform, Alert, ActivityIndicator } from 'react-native'
import React, { useState, useEffect } from 'react'
import Ionicons from '@expo/vector-icons/Ionicons'
import { API, graphqlOperation } from 'aws-amplify'
import { useHeaderHeight } from "@react-navigation/elements";
import Constants from 'expo-constants';
import Message from '../../components/Message'
import * as queries from '../../graphql/queries'
import * as mutations from '../../graphql/mutations'
import * as subscriptions from '../../graphql/subscriptions'

const ChatScreen = ({ route, navigation }) => {

    const headerHeight = useHeaderHeight();
    const { user, lessonObj } = route.params

    const [message, setMessage] = useState('')
    const [fetched, setFetched] = useState(false)
    const [chat, setChat] = useState([])

    useEffect(() => {
        API.graphql(graphqlOperation(queries.listMessagesByLesson, {
            lessonofferID: lessonObj.id,
            sortDirection: "DESC"
        })).then((q) => {
            setChat(q.data?.listMessagesByLesson.items)
            setFetched(true)
        });

        const sub = API.graphql(graphqlOperation(subscriptions.onCreateChatMessage, {
            filter: { lessonofferID: { eq: lessonObj.id } }
        })).subscribe({
            next: ({ value }) => {
                setChat((m) => [value.data.onCreateChatMessage, ...m])
            },
            error: (e) => {
                Alert.alert("Błąd w subskrybcji nowych wiadomości", e.message)
                console.log(e)
            }
        })
        return () => sub.unsubscribe()
    }, [])


    const sendMessage = async () => {
        if (message && message.trim() != '') {
            const newMessage = {
                lessonofferID: lessonObj.id,
                chatMessageUserInfoId: user.attributes.sub,
                message: message
            }
            setMessage('')
            try {
                const q = await API.graphql(graphqlOperation(mutations.createChatMessage, { input: newMessage }))
                console.log(q)
            } catch (e) {
                Alert.alert("Błąd przy wysyłaniu wiadomości", e.message)
                console.log(e)
            }
        }
    }
    return (
        <KeyboardAvoidingView style={styles.root}
            behavior={Platform.OS === 'ios' ? 'padding' : 'null'}
            keyboardVerticalOffset={Platform.OS === "ios" ? headerHeight + Constants.statusBarHeight + 50 : 0} >
            {
                fetched ?
                    <FlatList
                        refreshing={fetched}
                        data={chat}
                        renderItem={({ item }) =>
                            <Message message={item} userID={user.attributes.sub} />}
                        style={styles.list}
                        inverted
                    />
                    :
                    <ActivityIndicator />
            }
            <View style={styles.inputBox}>
                <TextInput style={styles.input} placeholder='Napisz wiadomość'
                    value={message} onChangeText={setMessage} />
                <Ionicons name='arrow-up-circle' size={40} style={styles.btn} onPress={sendMessage} />
            </View>
        </KeyboardAvoidingView>
    )
}

export default ChatScreen

const styles = StyleSheet.create({
    root: {
        flex: 1,

    },
    list: {
        padding: 10
    },
    inputBox: {
        padding: 10,
        flexDirection: 'row',
        alignItems: 'center'
    },
    input: {
        flex: 1,
        backgroundColor: 'white',
        paddingHorizontal: 10,
        paddingVertical: 10,
        marginVertical: 5
    },
    btn: {
        paddingHorizontal: 5,
    }
})