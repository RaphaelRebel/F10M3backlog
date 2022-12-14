import { useState } from "react"
import { useDispatch } from "react-redux";
import {filterGames} from "../../helpers/filterGames";
import filteredGamesReducer from "../../reducers/filterGamesReducer";
import "./Search.css"

const Search = () => {

    const [input, setInput] = useState("");
    const dispatch = useDispatch()

    //Pas input state aan wanneer er een aanpassing is gemaakt in de input
    const onInputChange = (event) => {
        setInput(event.target.value);
    }

    const onKeyDown = (event) => {
        if(event.keyCode === 13){
           dispatch({
            type: 'FILTEREDGAMES',
            payload: filterGames(input)
           }) 
           
        }
    }

    return (
        <>
            <div>
                <label htmlFor="test">Test</label>
                <input onKeyDown={onKeyDown} onChange={onInputChange} id="test" type="text" value={input} />
            </div>
        </>
    )
}

export default Search