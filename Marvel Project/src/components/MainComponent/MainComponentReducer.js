import { SET_LOADING, SHOW_MARVEL_CHARACTER, SHOW_MARVEL_DATA } from "./MainComponentAction"

const initialValues = {
    data: [],
    character: undefined,
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