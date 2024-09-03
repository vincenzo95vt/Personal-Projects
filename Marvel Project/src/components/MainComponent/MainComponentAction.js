export const SHOW_MARVEL_DATA = "SHOW_MARVEL_DATA"
export const SHOW_MARVEL_CHARACTER = "SHOW_MARVEL_CHARACTER"

export const showData = () => {
    return{
        type: SHOW_MARVEL_DATA,
        payload: data
    }
}

export const showMarvelCharacter = () => {
    return {
        type: SHOW_MARVEL_CHARACTER,
        payload: character
    }
}