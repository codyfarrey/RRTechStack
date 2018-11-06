import { combineReducers } from 'redux';
import LibraryReducer from './LibraryReducer';
import SelectionReducer from './SelectionReducer';

// This function will combine the reducers with the Store
// the reducers are the functions we've created that return data
// we are basically creating global states this way, we can access
// the data with the specific key names

export default combineReducers({
  libraries: LibraryReducer,
  selectedLibraryId: SelectionReducer,
});