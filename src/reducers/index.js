import { combineReducers } from 'redux';
import ProjectReducer from './projects';
import ActiveProject from './proj-active';

const allReducer = combineReducers({
    projs: ProjectReducer,
    active: ActiveProject
});

export default allReducer;