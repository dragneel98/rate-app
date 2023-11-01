import { useQuery } from "@apollo/client"
import { useEffect, useState } from "react"
import { GET_REPOSITORIES } from "../../graphql/queries"


export default function useRepositories() {
    const { data = {}, loading, refetch } = useQuery(GET_REPOSITORIES)
    const { repositories = null } = data
    const repoNodes = repositories ? repositories.edges.map(edges => edges.node) : []

    // const [repositories, setRepositories] = useState()

    // const getRepo = async () => {
    //     const res = await global.fetch("http://192.168.0.165:5000/api/repositories")
    //     const json = await res.json()
    //     setRepositories(json)
    // }
    // const repoNodes = repositories ? repositories.edges.map(edges => edges.node) : []
    // useEffect(() => {
    //     getRepo()
    // }, [])

    return { repositories: repoNodes, loading, refetch }
}
