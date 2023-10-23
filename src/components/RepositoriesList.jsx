import React from 'react'
import { Text, View } from 'react-native';
import { FlatList } from 'react-native';
import repositories from '../data/repositories';
import RepositoryItem from './RepositoryItem';

export default function RepositoriesList() {
    return (
        <FlatList
            data={repositories}
            renderItem={({ item: repo }) => (
                <RepositoryItem {...repo}></RepositoryItem>
            )}
            keyExtractor={item => item.id} />
    )
}
