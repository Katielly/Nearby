import { View, Text, Image } from 'react-native'
import { st } from './styles'

export function Welcome() {
    return (
        <View>
            <Image source={require('@/assets/logo.png')} style={st.logo} />
            <Text style={st.title}>Boas vindas ao Nearby</Text>
            <Text style={st.subtitle}>Tenha cupons de vantagem para usar em seus estabelicmentos favoritos.</Text>
        </View>
    )
}