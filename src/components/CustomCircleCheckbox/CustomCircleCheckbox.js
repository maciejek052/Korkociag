import { View, Text, Pressable} from 'react-native'
import React from 'react'

const CustomCircleCheckbox = ({onPress, bgColor, text, width, height, fgColor}) => {
    return (
        <Pressable
            onPress={onPress}
            style={{
                width: width,
                height: height,
                justifyContent: 'center',
                alignItems: 'center',
                padding: 10,
                borderRadius: 100
            }}
            backgroundColor={bgColor}>
            <Text style={{color: fgColor}}>{text}</Text>
        </Pressable>
    )
}

export default CustomCircleCheckbox