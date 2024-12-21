import { View, Alert } from 'react-native'
import { useEffect, useState } from 'react';
import { api } from '@/services/api'
import { Places } from '@/components/places'
import { PlaceProps } from '@/components/place';
import { Categories, CategoriesProps } from '@/components/categories';

type MarketsProps = PlaceProps & {

}

export default function Home() {
    //estado
    const [categories, setCategories] = useState<CategoriesProps>([])
    const [category, setCategory] = useState('')
    const [markets, setMarkets] = useState<MarketsProps[]>([])

    async function fetchCategories() {
        try{
            const {data} = await api.get('/categories');
            setCategories(data)
            setCategory(data[0].id)
        }catch(error) {
            console.error(error)
            Alert.alert('Categorias', 'Nao foi possivel carregar as categorias.')
        }
    }

    async function fetchMarkets() {
        try {
            if(!category) {
                return
            }
            const { data } = await api.get('/markets/category/' + category)
            setMarkets(data)
        } catch(error) {
            console.error(error)
            Alert.alert('Locais', 'Nao foi possivel carregar os locais.')
        }
    }

    //useEffect? carrega tela
    useEffect(() => {
        fetchCategories()
    }, [])

    //depende da categoria ser carregada
    useEffect(() => {
        fetchMarkets()
    }, [category])

    return (
        <View style={{ flex: 1, backgroundColor: '#CECECE'}}>
            <Categories data={categories} onSelect={setCategory} selected={category} />
            <Places data={markets} />
        </View>
    )
}