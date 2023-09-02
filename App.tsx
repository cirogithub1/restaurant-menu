import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'	
import HomeScreen from './screens/HomeScreen'
import WelcomeScreen from './screens/WelcomeScreen'


export type RootStackParamList = {
  Home: undefined
  Welcome: undefined
 
}
const Stack = createNativeStackNavigator<RootStackParamList>()

function App() {
	return (
		<NavigationContainer>
			<Stack.Navigator 
				initialRouteName='Welcome' 
				screenOptions={{ headerShown: false }}
			>
				<Stack.Screen 
					name="Home" 
					component={HomeScreen} />
				
				<Stack.Screen 
					name="Welcome" 
					component={WelcomeScreen} />
				
			</Stack.Navigator>
		</NavigationContainer>
	)
}

export default App