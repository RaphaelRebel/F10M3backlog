

 export const filterGamesByTitle = (nameToBeSearched, toBeSearchedArray) => {
    console.log('Title: ', toBeSearchedArray)
    return toBeSearchedArray.filter(game => {

        if(game.title.toUpperCase().indexOf(nameToBeSearched.toUpperCase()) !== -1 ){
            return game
        }
        
    })
}
export const filterGamesByType = (typeToBeSearched, toBeSearchedArray) => {
    console.log('Type: ', toBeSearchedArray)
    
    return toBeSearchedArray.filter(game => {

        if(game.title.toUpperCase().indexOf(typeToBeSearched.toUpperCase()) !== -1 ){
            return game
        }
        
    })
 }

export const filterGamesByPlatform = (platformToBeSearched, toBeSearchedArray) => {
    console.log('Platform: ', toBeSearchedArray)
    return toBeSearchedArray.filter(game => {
       let found = false;
       game.platforms.forEach(platform => {
        if(platform.toUpperCase() === platformToBeSearched.toUpperCase()){
            found = true
        }
       })
       if(found === true){
        return game
       }
    })
}
