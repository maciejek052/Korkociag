import { View, Text, TouchableOpacity, Image, StyleSheet, useWindowDimensions, Alert } from 'react-native'
import React, { useState, useEffect } from 'react'
import { useForm, Controller } from 'react-hook-form'
import { useNavigation } from '@react-navigation/native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import * as ImagePicker from 'expo-image-picker';
import Ionicons from '@expo/vector-icons/Ionicons'
import CustomInput from '../../components/CustomInput'
import { useSelector, useDispatch } from 'react-redux'
import { Auth, Storage, API, graphqlOperation } from 'aws-amplify'
import { fetchUser } from '../../redux/userInformation'

import * as mutations from '../../graphql/mutations'
import * as queries from '../../graphql/queries'

const EMAIL_REGEX = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/
const PHONE_REGEX = /^\+.*$/

const EditProfileScreen = () => {

    const { user, loading } = useSelector((state) => state.userInformation)
    const { height } = useWindowDimensions();
    const navigation = useNavigation()

    const [version, setVersion] = useState(0)

    useEffect(() => {
        const fun = async () => {
            const quer = await API.graphql(graphqlOperation(queries.getUserInfo, { id: user.attributes.sub }))
            //setVersion(quer.data.getUserInfo._version)
        }
        fun()
    }, [])

    const { control, handleSubmit, formState: { errors } } = useForm({
        defaultValues: {
            username: user?.attributes?.preferred_username,
            fullname: user?.attributes?.name,
            email: user?.attributes?.email,
            phonenumber: user?.attributes?.phone_number,
            location: user?.attributes?.address,
        }
    })

    const pfpFilename = 'profilePictures/' + user.username + '_profilePict.png'

    const fetchResourceFromURI = async uri => {
        const response = await fetch(uri);
        //console.log(response);
        const blob = await response.blob();
        return blob;
    };

    const [uploadStatus, setUploadStatus] = useState('')
    const [imgFromPicker, setImgFromPicker] = useState(null)
    const [s3result, setS3result] = useState(null)
    const [image, setImage] = useState(null)



    const isPfpChanged = s3result ? { picture: s3result } : {}

    const dispatch = useDispatch();


    const uploadImgToS3 = async () => {
        if (imgFromPicker) {

        }
    };

    const pressedEdit = async (data) => {
        try {
            const user = await Auth.currentAuthenticatedUser()

            console.log(isPfpChanged)

            await Auth.updateUserAttributes(user, {
                ...isPfpChanged,
                'preferred_username': data.username,
                'name': data.fullname,
                'email': data.email,
                'phone_number': data.phonenumber,
                'address': data.location,
            })


            const editObj = {
                id: user.attributes.sub,
                name: data.fullname,
                phone_number: data.phonenumber,
                address: data.location,
                ...isPfpChanged,
            }

            const editDbUserInfo = await API.graphql({
                query: mutations.updateUserInfo, variables: {
                    input: editObj
                }
            })
            console.log(editObj)
            // Alert.alert('Sukces', "Edytowano profil użytkownika")
            dispatch(fetchUser());
            navigation.goBack()

        } catch (e) {
            Alert.alert('Błąd', e.message)
            console.log(e)
        }
    }

    const changeProfilePict = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [1, 1],
            quality: 0.7,
            maxHeight: 500,
        });

        // console.log(result);

        if (!result.cancelled) {
            setImgFromPicker(result)
            try {
                console.log('uploading picture to s3 server')
                //console.log(result)
                const img = await fetchResourceFromURI(result.uri);
                
                const res = await Storage.put(pfpFilename, img, {
                    level: 'public',
                    acl: 'public-read',
                    contentType: result.type,
                    progressCallback(uploadProgress) {
                        setUploadStatus('Dodawanie obrazka: ' + uploadProgress.loaded + '/' + uploadProgress.total)
                        console.log(
                            `Progress: ${uploadProgress.loaded}/${uploadProgress.total}`,
                        );
                    },
                })
                const url = await Storage.get(res.key)
                setS3result(url.substring(0, url.indexOf('?') + 1))
                
            } catch (e) {
                Alert.alert("Błąd przy dodawaniu zdjęcia", e.message)
            }
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
                    {imgFromPicker ? <Image source={{ uri: imgFromPicker.uri }} style={{ width: 200, height: 200, borderRadius: 400 }} /> :
                        <Image source={{ uri: user.attributes?.picture }} style={{ width: 200, height: 200, borderRadius: 400 }} />}
                    <Text style={styles.changePfpText} onPress={changeProfilePict}>
                        Wybierz zdjęcie profilowe
                    </Text>
                    <Text style={styles.changePfpText} onPress={uploadImgToS3}>
                        Wrzuć zdjęcie na serwer
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
                            pattern: { value: PHONE_REGEX, message: "Numer telefonu musi mieć kod kraju, np +48" }
                        }}
                    />

                    <Text style={styles.textDescription}>Lokalizacja</Text>
                    <CustomInput
                        name="location"
                        control={control}
                    />
                </View>
                <Text style={{ textAlign: 'center' }}>{uploadStatus}</Text>
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