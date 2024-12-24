type SearchProps = {
  loadUser: (serName: string) => Promise<void>
}

import { useState } from "react"

import { BsSearch } from "react-icons/bs"

const Search = ({loadUser}: SearchProps) => {
  const [UserName, setUserName] = useState("")

  return (
    <div>
        <h2>Busca por um usuário:</h2>
        <p>Conheça seu melhores reppsitórios</p>
        <div>
            <input type="text" placeholder="Digite o name do usuário" onChange={(e) => setUserName(e.target.value)}/>
            <button onClick={() => loadUser(UserName)}>
                <BsSearch/>
            </button>
        </div>
    </div>
  )
}

export default Search