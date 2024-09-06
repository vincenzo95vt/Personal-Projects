import { SHOW_SECTION } from "./SectionAction"

const initialValues = {
    section: undefined
}

const sectionReducer = (state = initialValues, action) => {
    switch (action.type) {
        case SHOW_SECTION:
            return {
                ...state,
                section: action.payload
            }
        default:
            return state
    }
}

export default sectionReducer