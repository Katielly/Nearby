import { View, Text } from 'react-native'
import { IconPhone, IconMapPin, IconTicket } from '@tabler/icons-react-native'

import { st } from './styles'
import { Info } from '../info'

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
                <Info icon={IconTicket} description={`${data.coupons} cupons disponíveis`} />
                <Info icon={IconMapPin} description={data.address} />
                <Info icon={IconPhone} description={data.phone} />
            </View>

            <View style={st.group}>
                <Text style={st.title}>Regulamento</Text>
                {
                    data.rules.map((item) => (
                        <Text key={item.id} style={st.rule}>
                            {`\u2022  ${item.description}`}
                        </Text>
                    ))
                }

            </View>
        </View>
    )
}