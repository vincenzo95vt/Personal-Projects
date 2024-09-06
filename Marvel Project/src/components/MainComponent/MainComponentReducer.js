import { SET_LOADING, SHOW_DETAILS, SHOW_MARVEL_CHARACTER, SHOW_MARVEL_DATA } from "./MainComponentAction"

const initialValues = {
    data: [],
    character: undefined,
    characterId: undefined,
    loading: false
}

const mainComponentReducers = (state= initialValues, action) => {
    switch (action.type) {
        case SHOW_MARVEL_DATA:
            return {
                ...state,
                data: action.payload,
                loading: false
            }
        case SHOW_MARVEL_CHARACTER:
            return {
                ...state,
                character: action.payload,
                loading: false
            }
        case SHOW_DETAILS: 
            return{
                ...state,
                characterId: action.payload,
                loading: false
            }
        case SET_LOADING:
            return{
                ...state,
                loading: action.payload
            }
        default:
            return state
    }
}

export default mainComponentReducers