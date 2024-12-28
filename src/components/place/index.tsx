import { TouchableOpacity, TouchableOpacityProps, View, Text, Image } from "react-native";
import { st } from './styles'
import { colors } from '@/styles/theme'
import { IconTicket } from '@tabler/icons-react-native'

export type PlaceProps = {
    id: string,
    name: string,
    description: string,
    cupons: number,
    cover: string,
    address: string
}

type Props = TouchableOpacityProps & {
    data: PlaceProps
}

export function Place({ data, ...rest}: Props) {
    return (
        <TouchableOpacity style={st.container} {...rest}>
            <Image style={st.image} source={{ uri: data.cover}} />

            <View style={st.content}>
                <Text style={st.name}>{data.name}</Text>
                <Text style={st.description} numberOfLines={2}>{data.description}</Text>
                <View style={st.footer}>
                    <IconTicket size={16} color={colors.red.base} />
                    <Text style={st.tickets}>{data.cupons} cupons disponíveis</Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}