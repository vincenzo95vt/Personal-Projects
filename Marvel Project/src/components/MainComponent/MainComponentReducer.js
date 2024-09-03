import { SHOW_MARVEL_CHARACTER, SHOW_MARVEL_DATA } from "./MainComponentAction"

const initialValues = {
    data: [],
    character: undefined
}

const mainComponentReducers = (state= initialValues, action) => {
    switch (action.type) {
        case SHOW_MARVEL_DATA:
            return {
                ...state,
                data: action.payload
            }
            case SHOW_MARVEL_CHARACTER:
                return {
                    ...state,
                    character: action.payload
                }
            default:
                return state
        }
}

export default mainComponentReducers