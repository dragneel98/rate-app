import React, { useEffect, useState } from 'react'
import { Text, View } from 'react-native';
import { FlatList } from 'react-native';
import repositories from '../data/repositories';
import RepositoryItem from './RepositoryItem';

export default function RepositoriesList() {
    const [repositories, setRepositories] = useState()

    const getRepo = async () => {
        const res = await global.fetch("http://localhost:5000/api/repositories")
        const json = await res.json()
        setRepositories(json)
        console.log(json);
    }

    useEffect(() => {
        getRepo()
    }, [])


    return (
        <FlatList
            data={repositories}
            renderItem={({ item: repo }) => (
                <RepositoryItem {...repo}></RepositoryItem>
            )}
            keyExtractor={item => item.id} />
    )
}
