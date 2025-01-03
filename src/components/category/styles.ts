import { StyleSheet } from 'react-native'
import { colors, fontFamily } from '@/styles/theme'

export const st = StyleSheet.create({
    container: {
        height: 36,
        backgroundColor: colors.gray[100],
        borderRadius: 8,
        borderWidth: 1,
        borderColor: colors.gray[300],
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'center',
        paddingHorizontal: 12,
        gap: 10
    },
    name: {
        fontSize: 14,
        color: colors.gray[500],
        fontFamily: fontFamily.regular
    },
    containerSelected: {
        backgroundColor: colors.green.base,
        // borderWidth: 1,
        borderColor: colors.green.base
    },
    nameSelected: {
        color: colors.gray[100]
    }
})