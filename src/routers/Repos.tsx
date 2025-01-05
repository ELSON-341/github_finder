import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import BackBtn from '../components/BackBtn'

import classes from './Repos.module.css'

import { RepoProps } from '../types/repo'

const Repos = () => {
    const { username } = useParams()

    const [repos, setrepos] = useState<RepoProps[] | [] | null>(null)
    const [isLoading, setIsLoader] = useState(false)

    useEffect(() => {
        setIsLoader(true)

        const loadRepos = async function(username: string) {
            const res = await fetch(`https://api.github.com/users/${username}/repos`)

            const data = await res.json()

            setIsLoader(false)

            console.log(data);
            
        }
        loadRepos(username)
    }, [])

    return (
        <div>
            <BackBtn/>
            Repos {username}
        </div>
    )
}

export default Repos