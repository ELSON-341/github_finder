type SearchProps = {
  loadUser: (serName: string) => Promise<void>
}

import { useState, KeyboardEvent } from "react"

import { BsSearch } from "react-icons/bs"

import classes from "./Search.module.css"

const Search = ({loadUser}: SearchProps) => {
  const [UserName, setUserName] = useState("")

  const handleKeyDown = ( e: KeyboardEvent ) => {
    if (e.key === "Enter") {
      loadUser(UserName)
    }
  }

  return (
    <div className={classes.search}>
        <h2>Busca por um usuário:</h2>
        <p>Conheça seu melhores reppsitórios</p>
        <div className={classes.search_container}>
            <input type="text" placeholder="Digite o name do usuário" onChange={(e) => setUserName(e.target.value)} onKeyDown={handleKeyDown}/>
            <button onClick={() => loadUser(UserName)}>
                <BsSearch/> 
            </button>
        </div>
    </div>
  )
}

export default Search