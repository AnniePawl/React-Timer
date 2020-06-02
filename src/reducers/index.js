// Redux helper function to combine and export our reducers 

import {combineReducers} from 'redux'; 
import timerReducer from './timers-reducer';
import selectTimerReducer from './select-timer-reducer';

export default combineReducers( {
  timers: timerReducer,  //array
  selectedTimer: selectTimerReducer, // number
})

