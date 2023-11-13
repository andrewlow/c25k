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
	document.getElementById("workout").innerHTML = value
	
}
