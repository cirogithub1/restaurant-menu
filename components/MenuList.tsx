import { FC } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { ScrollView } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'	
import { Image } from 'react-native'
import Animated, { FadeInDown } from 'react-native-reanimated'

import { Billboard } from '../types'

interface Props {
	activeMenu: string
	changeMenu: (name: string) => void
	menus: Billboard[]
	// categories: {
	// 	name: string 
	// 	image: string
	// }[]
}

const MenuList: FC<Props> = ({ activeMenu, changeMenu, menus }) => {
	return (
		// <Animated.View entering={FadeInDown.duration(700).springify()}>
		<View >
		{/* <View > */}
			<ScrollView
				className='space-x-4'
				horizontal
				showsHorizontalScrollIndicator={false}
				contentContainerStyle={{paddingHorizontal: 15}}
			>
				{menus.map((menu, index) => {
					return (
						<TouchableOpacity
							key={index}
							className='flex items-center space-y-1'
							onPress={() => changeMenu(menu.name)}
						>
							<View className={`rounded-full p-1
								${menu.name===activeMenu ? "bg-yellow-300" : "bg-black/10"}`}>
								<Image 
									className='rounded-full'
									source={{uri: menu.imageUrl}}
									style= {{width: hp(12), height: hp(12)}}
								/>
							</View>

							<View>
								<Text
									className='text-neutral-600 text-center'
									style={{fontSize: hp(2)}}
								>
									{menu.name}
								</Text>						
							</View>
						</TouchableOpacity>
					)
				})}
			</ScrollView>
		</View>
	)
}

export default MenuList