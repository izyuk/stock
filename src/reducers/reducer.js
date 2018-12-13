import { combineReducers } from 'redux';
import CategoryList from './categories';
import Categories from "../components/UI/pages/categories";

const allReducer = combineReducers({
    categories: CategoryList
});

export default allReducer;
