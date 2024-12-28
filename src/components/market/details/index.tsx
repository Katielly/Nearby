import { View, Text } from 'react-native'
import { IconPhone, IconMapPin, IconTicket } from '@tabler/icons-react-native'

import { st } from './styles'

export type PropsDetails = {
    name: string,
    description: string,
    address: string,
    phone: string,
    coupons: number,
    rules: {
        id: string,
        description: string
    }[]
}

type Props = {
    data: PropsDetails
}

export function Details({data}: Props) {
    return (
        <View style={st.container}>
            <Text style={st.name}>{data.name}</Text>
            <Text style={st.description}>{data.description}</Text>

            <View style={st.group}>
                <Text style={st.title}>Informações</Text>


            </View>
        </View>
    )
}