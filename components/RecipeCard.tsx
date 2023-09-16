import { FC } from 'react'
import { View, Text, Pressable, Image, TouchableOpacity } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'	
import Animated, { FadeInDown } from 'react-native-reanimated'

interface Props {
	item: 	{
		name: string
		image: string
	}[] | any
	index: 	number
}

const RecipeCard: FC<Props> = ({ item, index }) => {

	const isEven = index%2 === 0

	return (
		// <Animated.View entering={FadeInDown.delay(index*100).duration(600).springify().damping(12)}>
		<View>
			<TouchableOpacity
				className={`flex justify-center mb-4 space-y-1 w-full ${isEven ? "pl-0 pr-2" : "pl-2 pr-0"}`}
			>
				<Image 
					className='bg-black/5 rounded-md w-full'
					source={{uri: item.strMealThumb}}
					style={{height: index%3===0 ? hp(25) : hp(35)}}
				/>

				<View>
					<Text
						className='font-semibold ml-2 text-neutral-600'
						style={{fontSize: hp(1.5)}}
					>
						{item.strMeal.length > 20 ? item.strMeal.substring(0, 20) + '...' : item.strMeal}
					</Text>
				</View>

			</TouchableOpacity>
		</View>
	)
}

export default RecipeCard