import { useEffect } from 'react'

import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { RootStackParamList } from '../App'

import { View, Text, Image } from 'react-native'
import { StatusBar } from 'expo-status-bar'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'	
import Animated, { Easing, useSharedValue, withSpring, withTiming } from 'react-native-reanimated'

type NavigationProps = NativeStackNavigationProp<
	RootStackParamList, 
	"Home">

export default function WelcomeScreen() {
	const ringPaddingIn = useSharedValue(0)
	const ringPaddingOut = useSharedValue(0)
	const fontSize1 = useSharedValue(0)

	const navigation = useNavigation<NavigationProps>()

	useEffect(() => {
		ringPaddingIn.value = 0
		ringPaddingOut.value = 0
		fontSize1.value = 0

		setTimeout(() => ringPaddingIn.value = withSpring(ringPaddingIn.value + hp(5)), 300)
		setTimeout(() => ringPaddingOut.value = withSpring(ringPaddingOut.value + hp(5.5)), 600)
		setTimeout(() => fontSize1.value = withSpring(fontSize1.value + hp(7)), 700)

		setTimeout(() => navigation.navigate("Home"), 3000)
	}, [])	

	return (
		<View className='flex-1 justify-center items-center space-y-10 bg-gray-900'>
			<StatusBar style='light' />

			{/* logo with rings */}
			<Animated.View className='bg-white/20  rounded-full' style={{padding: ringPaddingOut}}>
				<Animated.View className='bg-white/20 rounded-full' style={{padding: ringPaddingIn}}>
					<Image
						className='rounded-full'
						source={require('../assets/lantreopotes_logo.jpg')}
						style={{ width: hp(20), height: hp(20) }} />
				</Animated.View>
			</Animated.View>

			<View className='flex items-center space-y-2'>
				<Animated.Text 
					className='font-bold text-yellow-400 text-6xl tracking-widest'
					style={{fontSize: fontSize1}}
				>
					Bistro
				</Animated.Text>

				<Text 
					className='font-medium text-white text-lg tracking-widest'
					style={{fontSize: hp(2)}}
				>
					Partager c'est mieux
				</Text>
			</View>
		</View>
	)
}