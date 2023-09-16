import { useState, useEffect } from 'react'
import { View, Text, ScrollView, Image, TextInput } from 'react-native'
import { StatusBar  } from 'expo-status-bar'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'	
import { BellAlertIcon, MagnifyingGlassIcon } from 'react-native-heroicons/outline'
import axios from 'axios'

import Menus from '../components/Menus'
import Recipes from '../components/Recipes'

export default function HomeScreen() {
	const [activeMenu, setActiveMenu] = useState("")
	const [menus, setMenus] = useState([])
	const [recipes, setRecipes] = useState([])

	const getMenus = async () => {
		try {			
			const resp = await axios.get("https://restaurant-admin-amber.vercel.app/api/e72de13c-c6a1-4026-88da-3ae7d0ea7e55/billboards")

			// console.log("/components/Menus.tsx / resp", resp.data)
			if (resp.data) {
				setMenus(resp.data)
			}
			
		} catch (error) {
			console.log('/getMenus/ error: ', error)
		}
	}

	const changeMenu = (menu: any) => {
		getRecipes(menu)
		setActiveMenu(menu)
		setRecipes([])
	}

	const getRecipes = async (category="Desserts") => {
		try {			
			const resp = await axios.get(`https://themealdb.com/api/json/v1/1/filter.php?c=${category}`)

			// console.log("/components/Recipes.tsx / resp", resp.data)
			if (resp.data.meals) {
				setRecipes(resp.data.meals)
			}
			
		} catch (error) {
			console.log('/getRecipes/ error: ', error)
		}
	}

	useEffect(() => {
		getMenus()
		getRecipes()
	}, [])

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

				{/* Menus */}
				<View>
					<Menus activeMenu={activeMenu} changeMenu={changeMenu} menus={menus}/>
				</View>

				{/* recipies */}
				<View>
					<Recipes recipes={recipes} menus={menus}/>
				</View>
			</ScrollView>
		</View>
	)
}