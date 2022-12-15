import { useState } from "react";
import { useDispatch } from "react-redux";
import {filterGamesByTitle, filterGamesByPlatform} from "../../helpers/filterGames";

const Form = () => {
    const [inputs, setInputs] = useState([
        {
            id: "TITLE",
            value: "",
            label: "TITLE",
            filter: filterGamesByTitle
        },
        {
            id: "PLATFORM",
            value: "",
            label: "PLATFORM"
        }
    ]);

    const onInputChange = (event) => {
       let copy = [...inputs]
       copy.map(input => {
        if(input.id === event.target.id){
            input.value = event.target.value
        }
       });

       setInputs(copy)
    }
    const inputsToBeRendered = inputs.map(objectFromStateArray => {
       return <div>
        <label htmlFor={objectFromStateArray.id}>{objectFromStateArray.label}</label>
        <input onChange={onInputChange} id={objectFromStateArray.id} type="text" value={objectFromStateArray.value} />
    </div>
    })

    

    //Pas input state aan wanneer er een aanpassing is gemaakt in de input

   

    const submit = (event) => {
        event.preventDefault()
            console.log(filterGamesByPlatform("WII"))
    }

    return(
        <form onSubmit={submit}>
       { inputsToBeRendered}
            <button onClick={submit}>Zoeken</button>
        </form>
    )

    
}

export default Form