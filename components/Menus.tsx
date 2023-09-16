import { FC, useState, useEffect } from 'react'
import { View, Text } from 'react-native'
import axios from 'axios'

import MenuList from './MenuList'
import { Billboard } from '../types'
// import { categoryData } from '../constants'

interface Props {
	activeMenu: string
	changeMenu: (name: string) => void
	menus: Billboard[]
}

const Menus: FC<Props> = ({ activeMenu, changeMenu, menus }) => {	
	
	return (
		<View>
			{menus && menus?.length > 0 
			?
				<MenuList 
					activeMenu={activeMenu}
					changeMenu={changeMenu} 
					menus={menus} />
			:
				<Text>No menus found</Text>
			}
		</View>
	)
}

export default Menus