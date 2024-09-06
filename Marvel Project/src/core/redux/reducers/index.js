import {combineReducers} from "redux"
import mainComponentReducers from "../../../components/MainComponent/MainComponentReducer"
import sectionReducer from "../../../components/SelectionMenuComponent/SectionReducer"

const reducers = combineReducers({
    mainComponentReducers,
    sectionReducer
})

export default reducers