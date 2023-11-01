import React, { useEffect, useState } from 'react'
import { Text, View } from 'react-native';
import { FlatList } from 'react-native';
import RepositoryItem from './RepositoryItem';
import useRepositories from './hooks/useRepositories';

export default function RepositoriesList() {
    const { repositories } = useRepositories()
    return (
        <FlatList
            data={repositories}
            renderItem={({ item: repo }) => (
                <RepositoryItem {...repo}></RepositoryItem>
            )}
            keyExtractor={item => item.id} />
    )
}
