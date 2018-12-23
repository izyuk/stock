export default function (state = {}, action) {
    switch (action.type) {
        case "UPLOADING_FILE":
            return Object.assign(state, {
                file: action.payload
            });
        default:
            return state
    }
}
