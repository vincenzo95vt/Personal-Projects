export const SHOW_SECTION = "SHOW_SECTION"

export const showSection =  (section) => {
    return{
        type: SHOW_SECTION,
        payload: section
    }
}