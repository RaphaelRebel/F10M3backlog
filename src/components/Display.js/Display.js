import { useSelector } from "react-redux"

const Display = () => {

    const filteredGame = useSelector(state => {return state})

    const titlesToBeRendered = filteredGame.map(game => {
        return <h2>{game.title}</h2>
    })

    return <h2>Game: {titlesToBeRendered}</h2>
}

export default Display