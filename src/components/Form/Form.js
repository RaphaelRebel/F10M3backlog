import { useState } from "react";
//Haal useDispatch op
import { useDispatch } from "react-redux";

//Haal de functies uit de helpers
import { filterGamesByTitle, filterGamesByPlatform, filterGamesByType } from "../../helpers/filterGames";

import { games } from "../../data/games"

import "./Form.css"


const Form = () => {
    //Maak een state aan met een array van objects
    const [inputs, setInputs] = useState([
        {
            id: "TITLE",
            value: "",
            label: "Title",
            filter: filterGamesByTitle
        },
        {
            id: "PLATFORM",
            value: "",
            label: "Platform",
            filter: filterGamesByPlatform
        },
        {
            id: "TYPE",
            value: "",
            label: "Type",
            filter: filterGamesByType
        },
    ]);

    //Maak van useDispatch een variabel
    let dispatch = useDispatch()


    //Pas de value aan naar wat er word ingetypt in de gekozen input:
    const onInputChange = (event) => {
        //Sla de state 'input' op. Zet er een [... ] omheen zodat je echt een kopie maakt
        let copy = [...inputs]
        //Ga over alle copy (inputs) heen en werk aan het volgende:
        copy.map(input => {
            //Als de id van de input die gekozen is gelijk staat aan 1 van de id inputs in de state 'input', verander het volgende:
            if (input.id === event.target.id) {
                //Stop het event target value (hetgene dat is ingetypt) in de input value
                input.value = event.target.value
            }
        });
        //Zet de nieuwe copy terug in de state 'input'
        setInputs(copy)
    }

    //Ga over alle inputs heen
    const inputsToBeRendered = inputs.map(objectFromStateArray => {

        //De array heet niet meer 'inputs', maar 'objectFromStateArray'

        //Geef per object het volgende terug
        return <div key={objectFromStateArray.id} className="form__wrapper">
            <label className="form__label" htmlFor={objectFromStateArray.id}>{objectFromStateArray.label}</label>
            <input className="form__input" onChange={onInputChange} id={objectFromStateArray.id} type="text" value={objectFromStateArray.value} />
        </div>
    })



    //Pas input state aan wanneer er een aanpassing is gemaakt in de input
    const submit = (event) => {
        //Stop het formulier met de pagina refreshen
        event.preventDefault();

        //Haal games uit de data en maak er een variabel (result) van
        let result = games
        //Pas voor elke input het volgende aan:
        inputs.forEach(input => {
            //Stop van de state 'input' de filter in. Zorg er vervolgens voor dat in de filter (waar een functie in zit dat twee waarden verwacht) als eerst de value (wat er in is getypt) word meegegeven.
            result = input.filter(input.value, result)
        })

        //Geef aan de dispatch waar de type 'FILTEREDGAMES' is als payload 'result'. Zo wordt de array gegeven aan de store
        dispatch({
            type: "FILTEREDGAMES",
            payload: result
        })
    }

    //HTML enzo
    return (
        <form className="form" onSubmit={submit}>
            <div className="form__inputsWrapper">
                {inputsToBeRendered}
            </div>
            <button className="form__search" onClick={submit}>Zoeken</button>

        </form>

    )


}

export default Form