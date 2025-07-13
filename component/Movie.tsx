import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'
import { icons } from '@/React Native Movie App (assets)/constants/icons'

const Movie = ({ id, title, poster_path,vote_average, release_date }: Movie) => {
    return (


        <Link href={`/movies/${id}`} asChild>
            <TouchableOpacity className='w-[30%]'>
                <Image source={{
                    uri: poster_path ? `https://image.tmdb.org/t/p/w500${poster_path}` : `https://placeholder.co/600*400/1a1a1a/ffffff.png`
                }}
                    className='w-full h-52 rounded-lg'
                    resizeMode='cover' />
                <Text className='text-white' numberOfLines={1}>{title}</Text>
                <View className='flex-row items-center justify-start gap-x-1 mt-1'>
                    <Image source={icons.star} className='size-4' />
                    <Text className='text-xs text-white font-bold  uppercase'>{Math.round(vote_average)}</Text>
                </View>
                <View className='flex-row justify-between items-center'>
                    <Text className='text-light-300 font-medium mt-1'>{release_date.split('-')[0]}</Text>
                    {/* <Text className='text-light-300 font-medium mt-1'>MOVIE</Text> */}

                     </View>
            </TouchableOpacity>

        </Link>


    )
}

export default Movie