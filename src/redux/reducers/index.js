import { combineReducers } from 'redux';
import courses from './coursereducer';
import authors from './authorReducer';
import apiCallInProgress from './apiStatusReducer';



const rootreducer = combineReducers({
    courses,
    authors,
    apiCallInProgress
})

export default rootreducer;