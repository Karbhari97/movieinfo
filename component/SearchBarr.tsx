import { View, Image, TextInput } from 'react-native'
import React from 'react'
import { icons } from '@/React Native Movie App (assets)/constants/icons'

interface Props {
    placeholder: string,
    onPress?: () => void
}

const SearchBarr = ({ onPress, placeholder }: Props) => {
    return (
        <View className='flex-row items-center bg-white rounded-full px-5 py-5 h-4 ml-1 mr-1'>
            <Image source={icons.search} className='size-5' tintColor="#ab8bff" resizeMode='contain' />
            <TextInput
                onChangeText={() => { }}
                onPress={onPress}
                placeholder={placeholder}
                placeholderTextColor="#a8bfdb"
                className='flex-1 ml-2 text-white'
            />

        </View>
    )
}

export default SearchBarr