import ON_LOAD from '../actions';

export default function (state=null, action) {
    switch (action.type){
        case ON_LOAD:
            return Object.assign({}, state, {
                newData: [
                    ...state.newData,
                    {
                        data: action.data,
                        completed: false
                    }
                ]
            });
            break;
        default:
            return state;
    }
}