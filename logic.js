// js stuff

// The classic couch to 5k running plan
// https://zfcphp.arizona.edu/sites/default/files/images/Couch-to-5k%20Running%20Plan.pdf

// w => walk
// r => run
workouts = [
    // week 1
    ['w5', 'r1', 'w1.5', 'r1', 'w1.5', 'r1', 'w1.5', 'r1', 'w1.5', 'r1', 'w1.5', 'r1', 'w1.5', 'r1', 'w1.5', 'r1', 'w5'],
    ['w5', 'r1', 'w1.5', 'r1', 'w1.5', 'r1', 'w1.5', 'r1', 'w1.5', 'r1', 'w1.5', 'r1', 'w1.5', 'r1', 'w1.5', 'r1', 'w5'],
    ['w5', 'r1', 'w1.5', 'r1', 'w1.5', 'r1', 'w1.5', 'r1', 'w1.5', 'r1', 'w1.5', 'r1', 'w1.5', 'r1', 'w1.5', 'r1', 'w5'],
    // week 2
    ['w5', 'r1.5', 'w2', 'r1.5', 'w2', 'r1.5', 'w2', 'r1.5', 'w2', 'r1.5', 'w2', 'r1.5', 'w5'],
    ['w5', 'r1.5', 'w2', 'r1.5', 'w2', 'r1.5', 'w2', 'r1.5', 'w2', 'r1.5', 'w2', 'r1.5', 'w5'],
    ['w5', 'r1.5', 'w2', 'r1.5', 'w2', 'r1.5', 'w2', 'r1.5', 'w2', 'r1.5', 'w2', 'r1.5', 'w5'],
    // week 3
    ['w5', 'r1.5', 'w1.5', 'r3', 'w3', 'r1.5', 'w1.5', 'r3', 'w3', 'w5'],
    ['w5', 'r1.5', 'w1.5', 'r3', 'w3', 'r1.5', 'w1.5', 'r3', 'w3', 'w5'],
    ['w5', 'r1.5', 'w1.5', 'r3', 'w3', 'r1.5', 'w1.5', 'r3', 'w3', 'w5'],
    // week 4
    ['w5', 'r3', 'w1.5', 'r5', 'w2.5', 'r3', 'w1.5', 'r5', 'w5'],
    ['w5', 'r3', 'w1.5', 'r5', 'w2.5', 'r3', 'w1.5', 'r5', 'w5'],
    ['w5', 'r3', 'w1.5', 'r5', 'w2.5', 'r3', 'w1.5', 'r5', 'w5'],
    // week 5
    ['w5', 'r5', 'w3', 'r5', 'w3', 'r5', 'w5'],
    ['w5', 'r8', 'w5', 'r8', 'w5'],
    ['w5', 'r20', 'w5'],
    // week 6
    ['w5', 'r5', 'w3', 'r8', 'w3', 'r5', 'w5'],
    ['w5', 'r10', 'w3', 'r10', 'w5'],
    ['w5', 'r22', 'w5'],
    // week 7
    ['w5', 'r25', 'w5'],
    ['w5', 'r25', 'w5'],
    ['w5', 'r25', 'w5'],
    // week 8
    ['w5', 'r28', 'w5'],
    ['w5', 'r28', 'w5'],
    ['w5', 'r28', 'w5'],
    // week 9
    ['w5', 'r30', 'w5'],
    ['w5', 'r30', 'w5'],
    ['w5', 'r30', 'w5']
]

// Globals

// The configuration - also stored in localStorage
var config = {};

// One of the arrays from the workouts array
var session;

// Current session (1-27)
var sessionIndex;

// wall clock time for end of current segment, null if timer is paused
var endTime = null;

// If paused - timeLeft is how much time left to complete in seconds, null if no session active
var timeLeft = null

// pretty print the time (input in milliseconds, output is a string in minutes / seconds)
function prettyTime(millis) {
        seconds = millis / 1000
	min = Math.floor(seconds/60)
	sec = Math.floor(seconds - (min * 60))
        string = min.toString() + ":"
        if(sec < 10) {
          string = string + "0"
       }
        string = string + sec.toString()
       return string;
}

// based on the current session and index, decode walk or run and the duration
function decodeSession() {
    current = session[sessionIndex]
    mode = current[0]
    duration = current
    mode = current[0]
    duration = current.substring(1)
    return [mode, Number(duration)]
}

// next segment - move to the next part of current session
function nextSegment() {
    sessionIndex = sessionIndex + 1;
    if (sessionIndex > session.length) {
        // we are at the end.. congratulations
        // workout done
    } else {
        // start next segment 
        activity = decodeSession()
        // kick off timer
        timeLeft = activity[1] * 60
    }
    startTimer()
    announceActivity(activity)
}

// start timer - assumes timer is stopped
function startTimer() {
    done = new Date()
    done.setSeconds(done.getSeconds() + timeLeft)
    endTime = done
}

// Announce the activity - and start the timers etc
function announceActivity(array) {
    var mode
    duration = array[1]

    if (array[0] == 'w') {
        // walk
        mode = 'walk'
    } else {
        // assume it is run
        mode = 'run'
    }
    let utterance = new SpeechSynthesisUtterance(mode + " for " + duration.toString() + " minutes");
    speechSynthesis.speak(utterance);
}

// Action fired when the workout slider is moved
function changeWorkout() {
    // TO-DO stop active timer if happening
    value = document.getElementById("workout-range").value
    config.workout = value
    valueString = value.toString()
    // write storage
    localStorage.setItem('c25k', JSON.stringify(config))

    document.getElementById("workout").innerHTML = 'Workout ' + valueString
    // load up the workout data
    session = workouts[config.workout - 1]
    sessionIndex = 0
}
// button pressed
function buttonClick() {
    // figure state out by what is in the text
    value = document.getElementById("button").innerHTML
    if (value.indexOf("Run") == -1) {
        // Change to Pause phase, display Run button
        document.getElementById("button").innerHTML = '\
		<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" \
		class="bi bi-play-fill" viewbox="0 0 16 16" id="button-svg"> \
		<path d= "m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 \
		 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"> </path></svg> Run'
        // is timer running? pause it
        if(endTime != null) {
           // calculate delta, convert to seconds and remember it
        now = new Date()
        delta = endTime - now
        endTime = null
        timeLeft = delta / 1000
        }
    } else {
        // Change to Run phase, display Pause button
        document.getElementById("button").innerHTML = '\
		<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" \
		class="bi bi-pause-btn-fill" viewBox="0 0 16 16"> \
		<path d="M5.5 3.5A1.5 1.5 0 0 1 7 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5zm5 \
		0A1.5 1.5 0 0 1 12 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5z"/> </svg> Pause'

        // Ok, we are in motion - restart the timer or start a new session
        if (timeLeft == null) {
            // no timer was running
            sessionIndex = sessionIndex - 1
            nextSegment()
        } else {
            // just resume the timer
            // which is recalculate the endTime
    done = new Date()
    done.setSeconds(done.getSeconds() + timeLeft)
    endTime = done
	}

    }
}

// This will cause the button element to initialize the SVG code
buttonClick()

// Get, or create local storage for persistent data
data = localStorage.getItem('c25k')
if (data == null) {
    config.workout = 1
    // write storage
    localStorage.setItem('c25k', JSON.stringify(config))
} else {
    config = JSON.parse(data)
}

// Set the workout slider to represent the config.workout
document.getElementById('workout-range').value = config.workout

// Fire the change workout to update the display
changeWorkout()

// kick off the interval timer - every 1 seconds
setInterval(function() {
    // if the timer is not active, do nothing
    if (endTime != null) {
        now = new Date()
        delta = endTime - now
	if(delta < 0) {
nextSegment()
	} else {
        document.title = "[" + prettyTime(delta) + "] Couch to 5k"
}
    }
}, 1000)
