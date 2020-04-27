import { combineReducers } from 'redux';
import courses from './coursereducer';
import authors from './authorReducer';



const rootreducer = combineReducers({
    courses,
    authors
})

export default rootreducer;