import {combineReducers} from 'redux';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {authReducer, ImageReducer, packageReducer, toastReducer, trainerReducer, userReducer} from './reducers'
import { workoutReducer } from './reducers/workoutReducer';

export const store = createStore(
    combineReducers({
        auth:authReducer,
        toast:toastReducer,
        user:userReducer,
        pkg:packageReducer,
        img: ImageReducer,
        wrkout:workoutReducer,
        trainer:trainerReducer
    }),
    {},
    applyMiddleware(thunk)
);