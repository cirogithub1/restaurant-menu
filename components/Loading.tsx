import { FC } from 'react'
import { View, ActivityIndicator, ActivityIndicatorProps } from 'react-native'

interface Props extends ActivityIndicatorProps{
	size?: 'small' | 'large' | number
	className: string
}

const Loading: FC<Props> = ({ size, className }) => {
	return (
		<View>
			<ActivityIndicator size={size} className={className} />
		</View>
	)
}

export default Loading