const filteredGamesReducer = (state, action) => {
    //Als de state undefined is, voeg er dan een lege array aan toe. Dit werkt hetzelfde als useEffect()
    if(state === undefined){
        return [];
    }
    //Als de type 'FILTEREDGAMES' is, geef dan de payload terug
    if(action.type === "FILTEREDGAMES"){
        return action.payload
    }

    //Geef vervolgens de nieuwe state terug. De nieuwe state word opgehaald door de useSelector functie
    return state
}

export default filteredGamesReducer