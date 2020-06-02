## Time Object 

1. **Build a Timer object**
    1. Create a Timer Class
    1. Assign name, time, and isRunning properties to the class
2. Define the Actions of a Timer
  - Data can only be modified thru acttion
  - Each action should be defined as const w/ string value 
  - Each action needs an action creator (function that returns object w/ type and payload when value needs to accompany action)

3. Define the Reducers of a Timer
4. Allow users to create a Timer
5. Allow users to see a list of Timers
6. Users should be able to start/stop the clock on their Timers
7. Style the app
8. Allow Timers to persist

Timer Properties <br>
- name of timer (string)
- time in milliseconts (number)
- isRunning, tracks whether timer is running or paused (boolean )