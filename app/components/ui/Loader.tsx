import {FC, memo} from 'react'
import { ActivityIndicator } from 'react-native'

const Loader: FC =memo( () => {
	return <ActivityIndicator size='large' color='#BF3335' />
})

export default Loader
