import { View, Text, TouchableOpacity, Image, StyleSheet, useWindowDimensions } from 'react-native'
import React, { useState, useEffect } from 'react'
import { useForm, Controller } from 'react-hook-form'
import { useNavigation } from '@react-navigation/native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import * as ImagePicker from 'expo-image-picker';
import Ionicons from '@expo/vector-icons/Ionicons'
import ProfilePicture from '../../../assets/images/sydney.jpg'
import CustomInput from '../../components/CustomInput'

const EMAIL_REGEX = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/
const PHONE_REGEX = /^\d{9}$/

const EditProfileScreen = () => {
    const { height } = useWindowDimensions();
    const navigation = useNavigation()
    const { control, handleSubmit, formState: { errors } } = useForm({
        defaultValues: {
            username: "jan_kowalski",
            fullname: "Jan Kowalski",
            email: "jan_kowalski@wp.pl",
            phonenumber: "123123123",
            location: "Wiejska 45a, Białystok"
        }
    })
    //const [image, setImage] = useState({ProfilePicture})
    const [image, setImage] = useState(null)
    const pressedEdit = () => {
        navigation.goBack();
    }

    const changeProfilePict = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        console.log(result);

        if (!result.cancelled) {
            setImage(result.uri);
        }
    }

    return (
        <KeyboardAwareScrollView>
            <View style={styles.root}>
                <View
                    style={styles.topButtons}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Ionicons name="close-outline" style={{ fontSize: 35 }} />
                    </TouchableOpacity>
                    <Text style={{ fontSize: 16, fontWeight: 'bold' }}>Edytuj profil</Text>
                    <TouchableOpacity
                        onPress={handleSubmit(pressedEdit)}>
                        <Ionicons name="checkmark" style={{ fontSize: 35, color: '#3493D9' }} />
                    </TouchableOpacity>
                </View>
                <View style={styles.profilePictBox}>
                    {image ? <Image source={{ uri: image }} style={{ width: 200, height: 200, borderRadius: 400 }} /> :
                        <Image source={ProfilePicture} style={{ width: 200, height: 200, borderRadius: 400 }} />}
                    <Text style={styles.changePfpText} onPress={changeProfilePict}>
                        Zmień zdjęcie profilowe
                    </Text>
                </View>
                <View style={styles.textBoxes}>
                    <Text style={styles.textDescription}>Nazwa użytkownika</Text>
                    <CustomInput
                        name="username"
                        control={control} rules={{ required: 'Nazwa użytkownika jest wymagana' }}
                    />
                    <Text style={styles.textDescription}>Imię i nazwisko</Text>
                    <CustomInput
                        name="fullname"
                        control={control} rules={{ required: 'Imię i nazwisko jest wymagane' }}
                    />
                    <Text style={styles.textDescription}>E-mail</Text>
                    <CustomInput
                        name="email"
                        control={control} rules={{
                            required: 'Adres e-mail jest wymagany',
                            pattern: { value: EMAIL_REGEX, message: "Adres e-mail jest nieprawidłowy" }
                        }} />
                    <Text style={styles.textDescription}>Numer telefonu</Text>
                    <CustomInput
                        name="phonenumber"
                        control={control} rules={{
                            required: 'Numer telefonu jest wymagany',
                            pattern: { value: PHONE_REGEX, message: "Numer telefonu jest nieprawidłowy" }
                        }}
                    />

                    <Text style={styles.textDescription}>Lokalizacja</Text>
                    <CustomInput
                        name="location"
                        control={control}
                    />

                </View>
            </View>
        </KeyboardAwareScrollView>
    )
}

const styles = StyleSheet.create({
    root: {

    },
    topButtons: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 10,
        paddingVertical: 20
    },
    profilePictBox: {
        adding: 20,
        alignItems: 'center'
    },
    profilePict: {
        maxWidth: 200,
        height: 200,
        borderRadius: 400
    },
    changePfpText: {
        color: "#3B71F3",
        fontWeight: 'bold'
    },
    textBoxes: {
        padding: 20
    },
    textDescription: {
        paddingHorizontal: 5
    }
})

export default EditProfileScreen