import { Text, View } from 'react-native'
import { IconTicket } from '@tabler/icons-react-native'

import { st } from './styles'
import { colors } from '@/styles/theme'

type Props = {
    code: string
}

export function Coupon({ code }: Props) {
    return (
        <View style={st.container}>
            <Text style={st.title}>Utilize esse cupom</Text>

            <View style={st.content}>
                <IconTicket size={24} color={colors.green.light} />
                <Text style={st.code}>{code}</Text>

            </View>
        </View>
    )
}