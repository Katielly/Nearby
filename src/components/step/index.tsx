import { View, Text } from 'react-native'
import { IconProps } from '@tabler/icons-react-native'

import { colors } from '@/styles/theme'
import { st } from './styles'

type Props = {
    title: string,
    description: string,
    icon: React.ComponentType<IconProps>
}

export function Step({ title, description, icon: Icon}: Props) {
    return (
        <View style={st.container}>
            {Icon && <Icon size={32} color={colors.red.base} />}

            <View style={st.details}>
                <Text style={st.title}>{title}</Text>
                <Text style={st.subtitle}>{description}</Text>
            </View>
        </View>
    )
}