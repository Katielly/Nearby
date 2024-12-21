import { Text, Pressable, PressableProps } from 'react-native'
import { st } from './styles'
import { categoriesIcons } from '@/utils/categories-icons'
import { colors } from '@/styles/theme'

type Props = {
    iconId: string,
    isSelected?: boolean,
    name: string
}

export function Category({ name, iconId, isSelected = false, ...rest} : Props) {
    const Icon = categoriesIcons[iconId]
    
    return (
        //o rest tem que passar para o componente para pegar o evento onPress
        <Pressable style={[st.container, isSelected && st.containerSelected]} {...rest}>
            <Icon size={16} color={colors.gray[isSelected ? 100 : 400]} />
            <Text style={[st.name, isSelected && st.nameSelected]}>{name}</Text>
        </Pressable>
    )
}