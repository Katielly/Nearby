import { View, Text } from 'react-native'
import { IconMapPin, IconQrcode, IconTicket } from '@tabler/icons-react-native'
import { st } from './styles'
import { Step } from '../step'

export function Steps() {
    return (
        <View style={st.container}>
            <Text style={st.title}>Veja como funciona:</Text>
            
            <Step 
                title='Encontre estabelecimentos'
                description='Veja locais perto de voce que sao parceiros Nearby'
                icon={IconMapPin}
            />

            <Step 
                title='Ative o cupom com QR Code'
                description='Escaneie o código no estabelecimento para usar o beneficio'
                icon={IconQrcode}
            />

            <Step 
                title='Garanta vantagens perto de voce'
                description='Ative cupons onde estiver, em diferentes tipos de estabelicmento'
                icon={IconTicket}
            />
        </View>
    )
}