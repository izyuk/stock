export default function (state = {}, action) {
    switch (action.type) {
        case "UPDATE_PAGE_LIST":
            return Object.assign(state, {
                pages: {
                    categories: action.payload
                    // name: action.payload.name
                }
            });
        default:
            return state
    }
}
