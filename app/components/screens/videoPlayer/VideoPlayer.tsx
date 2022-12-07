import { Audio, ResizeMode, Video } from 'expo-av'
import React, { memo, useEffect, useRef } from 'react'

import { Layout } from '@/components/ui/layout/Layout'
import { Header } from '@/components/ui/layout/header/Header'

import { useTypedRoute } from '@/hooks/useTypedRoute'

import { getMediaSource } from '@/utils/getMediaSource'

export const VideoPlayer: React.FC = memo(() => {
	const {
		params: { videoUrl, title }
	} = useTypedRoute<'VideoPlayer'>()

	const videoRef = useRef<Video>(null)

	useEffect(() => {
		const enableAudio = async () => {
			await Audio.setAudioModeAsync({
				allowsRecordingIOS: false,
				playsInSilentModeIOS: true,
				staysActiveInBackground: false,
				shouldDuckAndroid: false
			})

			await videoRef.current?.stopAsync()
		}

		let ignore = enableAudio()
	}, [])

	useEffect(() => {
		const onStart = async () => {
			try {
				await videoRef.current?.presentFullscreenPlayer()
				await videoRef.current?.playAsync()
			} catch (e) {
				console.log(e)
			}
		}
		const ignore = onStart()
	}, [])

	return (
		<Layout className={'bg-black'}>
			<Header isAbsolute title={title} isBackButton />
			<Video
				ref={videoRef}
				className={'w-full h-full bg-black'}
				source={getMediaSource(videoUrl)}
				shouldPlay
				useNativeControls
				resizeMode={ResizeMode.CONTAIN}
			/>
		</Layout>
	)
})
