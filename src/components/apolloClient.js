import { ApolloClient } from "apollo-boost";

export default function createApolloClient() {
    return new ApolloClient({
        uri: "http://192.168.0.165:5000/graphql"
    })
}
