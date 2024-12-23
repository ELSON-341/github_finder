import { BsSearch } from "react-icons/bs"

const Search = () => {
  return (
    <div>
        <h2>Busca por um usuário:</h2>
        <p>Conheça seu melhores reppsitórios</p>
        <div>
            <input type="text" placeholder="Digite o name do usuário"/>
            <button>
                <BsSearch/>
            </button>
        </div>
    </div>
  )
}

export default Search