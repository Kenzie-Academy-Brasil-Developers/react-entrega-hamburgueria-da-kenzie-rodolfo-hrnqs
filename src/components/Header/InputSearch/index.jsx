import { useState } from "react"
import { StyledInputSearch } from "./style"

export const InputSearch = ({ setSearch }) => {
    const [searchInput, setSearchInput] = useState("")

    const submit = (e) => {
        e.preventDefault()
        setSearch(searchInput)
        setSearchInput("")
    }
    return(
        <StyledInputSearch>
            <form onSubmit={submit}>
                <input type="text" value={searchInput} onChange={(e) => setSearchInput(e.target.value)} placeholder="Digitar Pesquisa" />
                <button type="submit">Pesquisar</button>
            </form>
        </StyledInputSearch>
    )     
}