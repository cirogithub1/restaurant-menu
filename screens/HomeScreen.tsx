import { useState } from 'react'
import { View, Text, ScrollView, Image, TextInput } from 'react-native'
import { StatusBar  } from 'expo-status-bar'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'	
import { BellAlertIcon, MagnifyingGlassIcon } from 'react-native-heroicons/outline'

import Categories from '../components/Categories'

export default function HomeScreen() {
	const [activeCat, setActiveCat] = useState("")

	return (
		<View className='flex-1 bg-white'>
			<StatusBar style='dark'/>
			<ScrollView
				className='space-y-6 pt-8'
				showsVerticalScrollIndicator={false}
				contentContainerStyle={{paddingBottom: 50}}
			>
				{/* avater and bell icon */}
				<View className='mx-4 flex-row justify-between items-center mb-2'>
					<Image 
						source={require("../assets/Avatar-Profile.png")}
						style={{height: hp(5), width: hp(5)}}
					/>

					<BellAlertIcon size={hp(4)} color={"gray"}/>
				</View>

				{/* greetings and punchline */}
				<View className='mx-4 space-y-2 mb-2'>
					<Text className='text-neutral-600'>Hi Ciro</Text>

					<View>
						<Text
							className='front-semibold text-neutral-600'
							style={{fontSize: hp(3.8)}}
						>Your Choice</Text>
					</View>

					<Text
						className='front-semibold text-neutral-600'
						style={{fontSize: hp(3.8)}}
					>
						Come to enjoy <Text className='text-yellow-400'>with us</Text>
					</Text>
				</View>

				{/* search */}
				<View className='mx-4 flex-row items-center rounded-full bg-black/5 p-1'>
					<TextInput 
						className='flex-1 rounded-full px-3 h-8'
						placeholder='Search'
						placeholderTextColor={"gray"}
						style={{fontSize: hp(1.9)}}
					/>

					<View className='bg-white rounded-full p-2'>
						<MagnifyingGlassIcon size={hp(2.5)} strokeWidth={3} color={"gray"}/>
					</View>
				</View>

				{/* categories */}
				<View>
					<Categories activeCat={activeCat} setActiveCat={setActiveCat} />
				</View>

			</ScrollView>
			<Text>Home Screen</Text>
		</View>
	)
}