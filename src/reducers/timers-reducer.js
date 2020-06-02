// Import actions 
import {NEW_TIMER, TOGGLE_TIMER} from '../actions/index'
import Timer from '../Timer'

const timerReducer = (state = [], action) => {
  switch (action.type) {
    case NEW_TIMER:
      // Add a new timer & return a copy of state
      const name = action.payload.name ? action.payload.name : `Timer ${state.length}`
      return [...state, new Timer(name)]

    case TOGGLE_TIMER:
      // Invert isRunning prop of timer at index, return copy of state
      const newState = state.map((timer, index) => {
        if (action.payload.index === index) {
          return {...timer, isRunning: !timer.isRunning}
        }
        return timer
      })
      return newState

    default:
      return state;
  }
}

export default timerReducer;