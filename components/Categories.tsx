import { FC, useState, useEffect } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { ScrollView } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'	
import { Image } from 'react-native'
import Animated, { FadeInDown } from 'react-native-reanimated'

import { categoryData } from '../constants'
import { response } from 'express'
import axios from 'axios'

interface Props {
	activeCat: string
	setActiveCat: (name: string) => void
}

const Categories: FC<Props> = ({ activeCat, setActiveCat }) => {	
	const [categories, setCategories] = useState([])

	const options = {
		method: 'GET',
		Headers: {
			'Content-Type': 'application/json'
		}
	}
	const getCategories = async () => {
		try {
			const response = await fetch("http://192.168.1.72:3000/api/32b01bf4-7286-407c-9619-f858d626f830/billboards", options)
			const data = response.json()
			console.log(data)
			
		} catch (error) {
			console.log('/Categories/ error: ', error)
			
		}
	}

	useEffect(() => {
		getCategories()
	}, [])

	return (
		<Animated.View entering={FadeInDown.duration(700).springify()}>
			<ScrollView
				className='space-x-4'
				horizontal
				showsHorizontalScrollIndicator={false}
				contentContainerStyle={{paddingHorizontal: 15}}
			>
				{categoryData.map((cat, index) => {
					return (
						<TouchableOpacity
							key={index}
							className='flex items-center space-y-1'
							onPress={() => setActiveCat(cat.name)}
						>
							<View className={`rounded-full p-1
								${cat.name===activeCat ? "bg-yellow-400" : "bg-black/10"}`}>
								<Image 
									className='rounded-full'
									source={{uri: cat.image}}
									style= {{width: hp(12), height: hp(12)}}
								/>
							</View>

							<Text
								className='text-neutral-600'
								style={{fontSize: hp(1.6)}}
							>
								{cat.name}
							</Text>

						</TouchableOpacity>
					)
				})}				

			</ScrollView>
		</Animated.View>
	)
}

export default Categories