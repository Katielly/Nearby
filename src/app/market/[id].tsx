import { useLocalSearchParams, router, Redirect } from 'expo-router'
import { View, Text, Alert } from 'react-native'

import { api } from '@/services/api'
import { useEffect, useState } from 'react'

import Loading from '@/components/loading'
import { Cover } from '@/components/market/cover'
import { Details, PropsDetails } from '@/components/market/details'

type DataProps = PropsDetails & {
    cover: string
}

export default function Market() {
    const [data, setData] = useState<DataProps>()
    const [isLoading, setIsLoading] = useState(true)

    const params = useLocalSearchParams<{ id: string }>()

    async function fetchMarket() {
        try{
            const { data } = await api.get(`/markets/${params.id}`)
            setData(data)
            setIsLoading(false)
            console.log(data)
        } catch(error) {
            console.log(error)
            Alert.alert('Erro', 'Não foi possível carregar os dados', [
                { text: 'OK', onPress: () => router.back()}
            ])

        }
    }

    useEffect(() => {
        fetchMarket()
    }, [params.id])

    if(isLoading) {
        return <Loading />
    }

    if(!data) {
        return <Redirect href='/home' />
    }

    return (
        <View 
            style={{ 
                flex: 1, 
            }}
        >
            <Cover uri={data.cover} />
            <Details data={data} />
        </View>
    )
}