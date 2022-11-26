import { StatusBar } from 'expo-status-bar'
import { SafeAreaProvider } from 'react-native-safe-area-context'

import { AuthProvider } from '@/providers/AuthProvider/AuthProvider'

import { Navigation } from '@/navigation/Navigation'

export default function App() {
	return (
		<>
			<SafeAreaProvider>
				<AuthProvider>
					<Navigation />
				</AuthProvider>
			</SafeAreaProvider>
			<StatusBar style='auto' />
		</>
	)
}
