import {
	Feather,
	MaterialCommunityIcons,
	MaterialIcons
} from '@expo/vector-icons'

export type TypeFeatherIconNames = keyof typeof Feather.glyphMap
export type TypeMaterialIconNames = keyof typeof MaterialIcons.glyphMap
export type TypeMaterialCommunityIconNames =
	keyof typeof MaterialCommunityIcons.glyphMap
