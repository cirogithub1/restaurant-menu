import { View, Text } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'	
import MasonryList from "@react-native-seoul/masonry-list"

import { mealData } from '../constants'
import RecipeCard from './RecipeCard'
import { Billboard } from '../types'
import Loading from './Loading'

interface Props {
	recipes: any
	menus: Billboard[]
}

export default function Recipes({recipes, menus}:Props) {
	
	return (
		<View className='mx-4 space-y-3'>
			<Text
				className='font-semibold text-neutral-600'
				style={{fontSize: hp(3)}}
			>
				Recipes
			</Text>

			<View>
				{menus?.length === 0 || recipes?.length === 0 
				? (
					<Loading size={"large"} className="mt-20"/>
				)
				: (
					<MasonryList
						data={recipes}
						keyExtractor={(item): string => item.idMeal}
						numColumns={2}
						showsVerticalScrollIndicator={false}
						renderItem={({item, i}) => <RecipeCard item={item} index={i} />}
						// refreshing={isLoadingNext}
						// onRefresh={() => refetch({first: ITEM_CNT})}
						onEndReachedThreshold={0.5}
						// onEndReached={() => loadNext(ITEM_CNT)}
					/>
				)}
			</View>
		</View>
	)
}