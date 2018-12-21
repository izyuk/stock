export default function (state = {}, action) {
    switch (action.type) {
        case "UPLOADING_FILE":
            return Object.assign(state, {
                file: {
                    name: action.payload.name,
                    size: action.payload.size,
                    progress: action.payload.progress
                }
            });
        default:
            return state
    }
}
