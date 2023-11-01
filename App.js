import React from 'react'
import Main from "./src/components/main";
import { StatusBar } from 'expo-status-bar';
import createApolloClient from './src/components/apolloClient';
import { ApolloProvider } from '@apollo/client';

const apolloClient = createApolloClient()

export default function App() {
  return (
    <ApolloProvider client={apolloClient}>
      <StatusBar style='ligth' />
      <Main></Main>
    </ApolloProvider>
  )

}

