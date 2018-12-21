import { combineReducers } from 'redux';
import CategoryList from './categories';
import UploadingFile from './uploading';
import Categories from "../components/UI/pages/categories";

const allReducer = combineReducers({
    categories: CategoryList,
    uploading_file: UploadingFile
});

export default allReducer;
