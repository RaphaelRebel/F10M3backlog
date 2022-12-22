import { useSelector } from "react-redux"
import "./Display.css"
const Display = () => {

    //Normaal zal 'firstToBeRendered' op false staan
    let firstToBeRendered = false
    //Haal met useSelector de state op. Als je meerdere states hebt, moet je als return de gekozen state neerzetten. Bijv: return filterGamesReducer
    const filteredGame = useSelector(state => { return state })

    //Ga over alle filtered games en doe het volgende:
    const titlesToBeRendered = filteredGame.map(game => {
        if (firstToBeRendered === false) {
            //De eerste 'firstToBeRendered' zal op true komen te staan
            firstToBeRendered = true
            return (
                <section key={game.title} className="display">
                <h2>{game.title}</h2>
                <figure className="display__play">Play this!</figure>
            </section>
            )
        } else {
            //De rest zal zonder figure toegevoegd worden
            return <section className="display">
            <h2>{game.title}</h2>
            
        </section>
        }
    })

    return <h2>Game: {titlesToBeRendered}</h2>
}

export default Display