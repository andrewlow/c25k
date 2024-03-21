// js stuff


// https://zfcphp.arizona.edu/sites/default/files/images/Couch-to-5k%20Running%20Plan.pdf

workouts = [
// week 1
['w5', 'r1', 'w1.5', 'r1', 'w1.5', 'r1', 'w1.5', 'r1', 'w1.5', 'r1', 'w1.5', 'r1', 'w1.5', 'r1', 'w1.5', 'r1', 'w5'],
['w5', 'r1', 'w1.5', 'r1', 'w1.5', 'r1', 'w1.5', 'r1', 'w1.5', 'r1', 'w1.5', 'r1', 'w1.5', 'r1', 'w1.5', 'r1', 'w5'],
['w5', 'r1', 'w1.5', 'r1', 'w1.5', 'r1', 'w1.5', 'r1', 'w1.5', 'r1', 'w1.5', 'r1', 'w1.5', 'r1', 'w1.5', 'r1', 'w5'],
// week 2
['w5', 'r1.5', 'w2', 'r1.5', 'w2', 'r1.5', 'w2', 'r1.5', 'w2', 'r1.5', 'w2', 'r1.5', 'w5' ],
['w5', 'r1.5', 'w2', 'r1.5', 'w2', 'r1.5', 'w2', 'r1.5', 'w2', 'r1.5', 'w2', 'r1.5', 'w5' ],
['w5', 'r1.5', 'w2', 'r1.5', 'w2', 'r1.5', 'w2', 'r1.5', 'w2', 'r1.5', 'w2', 'r1.5', 'w5' ],
// week 3
['w5', 'r1.5', 'w1.5', 'r3', 'w3', 'r1.5', 'w1.5', 'r3', 'w3', 'w5' ],
['w5', 'r1.5', 'w1.5', 'r3', 'w3', 'r1.5', 'w1.5', 'r3', 'w3', 'w5' ],
['w5', 'r1.5', 'w1.5', 'r3', 'w3', 'r1.5', 'w1.5', 'r3', 'w3', 'w5' ],
// week 4
['w5', 'r3', 'w1.5', 'r5', 'w2.5', 'r3', 'w1.5', 'r5', 'w5'],
['w5', 'r3', 'w1.5', 'r5', 'w2.5', 'r3', 'w1.5', 'r5', 'w5'],
['w5', 'r3', 'w1.5', 'r5', 'w2.5', 'r3', 'w1.5', 'r5', 'w5'],
// week 5
['w5', 'r5', 'w3', 'r5', 'w3', 'r5', 'w5' ],
['w5', 'r8', 'w5', 'r8', 'w5' ],
['w5', 'r20', 'w5' ],
// week 6
['w5', 'r5', 'w3', 'r8', 'w3', 'r5', 'w5' ],
['w5', 'r10', 'w3', 'r10', 'w5'],
['w5', 'r22', 'w5' ],
// week 7
['w5', 'r25', 'w5' ],
['w5', 'r25', 'w5' ],
['w5', 'r25', 'w5' ],
// week 8
['w5', 'r28', 'w5' ],
['w5', 'r28', 'w5' ],
['w5', 'r28', 'w5' ],
// week 9
['w5', 'r30', 'w5' ],
['w5', 'r30', 'w5' ],
['w5', 'r30', 'w5' ]]


// Action fired when the workout slider is moved
function changeWorkout() {
	value = document.getElementById("workout-range").value.toString();
	document.getElementById("workout").innerHTML = 'Workout ' + value
	
}
// button pressed
function buttonClick() {
// figure state out by what is in the text
value = document.getElementById("button").innerHTML
console.log(value.indexOf("Run"))
if(value.indexOf("Run") == -1) {

document.getElementById("button").innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-play-fill" viewbox="0 0 16 16" id="button-svg"> <path d= "m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"> </path></svg> Run'


} else {
 document.getElementById("button").innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-pause-btn-fill" viewBox="0 0 16 16"> <path d="M5.5 3.5A1.5 1.5 0 0 1 7 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5zm5 0A1.5 1.5 0 0 1 12 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5z"/> </svg> Pause'

}
}

// Fire the change workout to update the value
changeWorkout()
