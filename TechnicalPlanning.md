## Time Object 

1. **Build a Timer object**
    1. Create a Timer Class
    1. Assign name, time, and isRunning properties to the class
2. **Define the Actions of a Timer**
  - Data can only be modified thru action
  - Each action should be defined as const w/ string value 
  - Each action needs an action creator (function that returns object w/ type and payload when value needs to accompany action)
3. **Define the Reducers of a Timer**
  - Determine how many reducers needed to accomplish goals 
  - Build reducer to handle changes in state
4. Allow users to create a Timer
  - Field to input name 
  - Button to save timer
5. Allow users to see a list of Timers
  - Create list-timers component to house list of timers 
  - Create timer-view component to describe what time looks like
  - In timer-view, allow display ofname, time, and start/stop button 
  - Start/ stop button should change text when click for now 
  - Display progress so far in browser
6. Users should be able to start/stop the clock on their Timers 
    - Track delta time for each timer 
    - Create update action that updates time 
    - Insure reducers knows how ot properly handle update actionn 
    - Tell store to run update so view can display accurate time 
7. Style the app
8. Allow Timers to persist

Timer Properties <br>
- name of timer (string)
- time in milliseconts (number)
- isRunning, tracks whether timer is running or paused (boolean )