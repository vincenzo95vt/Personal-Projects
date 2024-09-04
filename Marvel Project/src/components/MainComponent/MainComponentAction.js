export const SHOW_MARVEL_DATA = "SHOW_MARVEL_DATA"
export const SHOW_MARVEL_CHARACTER = "SHOW_MARVEL_CHARACTER"
export const SET_LOADING = "SET_LOADING"

export const showData = (data) => {
    return{
        type: SHOW_MARVEL_DATA,
        payload: data
    }
}

export const showMarvelCharacter = (character) => {
    return {
        type: SHOW_MARVEL_CHARACTER,
        payload: character
    }
}

export const setLoading = (loading) => {
    return {
        type: SET_LOADING,
        payload: loading
    }
}