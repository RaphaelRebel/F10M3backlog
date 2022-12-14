import {games} from "../data/games"

export const filterGames = (nameToBeSearched) => {
    return games.filter(game => {
        if(game.title.toUpperCase().indexOf(nameToBeSearched.toUpperCase()) !== -1 ){
            return game
        }
    })
}