
import Search from '../Search/Search';
import SearchButton from "../SearchButton/SearchButton"

const Form = () => {

    const submit = (event) => {
        event.preventDefault()
    }

    return(
        <form onSubmit={submit}>
            <Search />
            <SearchButton />
        </form>
    )
}

export default Form