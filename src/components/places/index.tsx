import { useRef } from 'react'
import { router } from 'expo-router'
import { Text, useWindowDimensions } from 'react-native'
import BottomSheet, { BottomSheetFlatList } from '@gorhom/bottom-sheet'

import { st } from './styles'
import { Place, PlaceProps } from '../place'

type Props = {
    data: PlaceProps[]
}

export function Places({ data }: Props) {
    const dimensions = useWindowDimensions()
    const bottomSheetRef = useRef<BottomSheet>(null)

    const snapPoints = {
        min: 278,
        max: dimensions.height - 128
    }

    return (
        <BottomSheet 
            ref={bottomSheetRef} 
            snapPoints={[snapPoints.min, snapPoints.max]}
            handleIndicatorStyle={st.indicator}
            backgroundStyle={st.container}
            enableOverDrag={false}
        >
            <BottomSheetFlatList 
                data={data} 
                keyExtractor={(item) => item.id} 
                renderItem={({ item }) => <Place data={item} onPress={() => router.navigate(`/market/${item.id}`)} /> }
                contentContainerStyle={st.content}
                ListHeaderComponent={() => (
                    <Text style={st.title}>Explore locais perto de voce</Text>
                )}
                showsVerticalScrollIndicator={false}
            />
        </BottomSheet>
    )
}