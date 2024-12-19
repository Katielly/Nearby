import { View, Text, ActivityIndicator } from 'react-native'

import { st } from './styles'
import { colors } from '@/styles/colors'

export default function Loading() {
    return (
        <ActivityIndicator color={colors.green.base} style={st.container} />
    )
}