import {games} from "../data/games"

 export const filterGamesByTitle = (nameToBeSearched) => {
    return games.filter(game => {

        if(game.title.toUpperCase().indexOf(nameToBeSearched.toUpperCase()) !== -1 ){
            return game
        }
        
    })
}

export const filterGamesByPlatform = (platformToBeSearched) => {
    return games.filter(game => {
       let found = false;
       game.platforms.forEach(platform => {
        if(platform === platformToBeSearched){
            found = true
        }
       })
       if(found === true){
        return game
       }
    })
}