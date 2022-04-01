// comment form handler
async function commentFormHandler(event) {
    event.preventDefault();
    // declare variables
    const comment_text = document.querySelector('textarea[name="comment-body"]').value.trim();
    // gets workout name from URL and store as workout_id
    let workout_id = window.location.toString().split('/')[
        window.location.toString().split('/').length - 1  
    ];
    // if statements to determine which assigns the workout_id the correct number
    if (workout_id === 'Tricep%20Extensions') {
        workout_id = 1;
    }
    if (workout_id === 'Seated%20Overhead%20Press') {
        workout_id = 2;
    }
    if (workout_id === 'Tricep%20Press%20Down') {
        workout_id = 3;
    }
    if (workout_id === 'Chin%20Ups') {
        workout_id = 4;
    }
    if (workout_id === 'Bicep%20Curls') {
        workout_id = 5;
    }
    if (workout_id === 'Hammer%20Curls') {
        workout_id = 6;
    }
    if (workout_id === 'Calf%20Raises') {
        workout_id = 7;
    }
    if (workout_id === 'Barbell%20Squats') {
        workout_id = 8;
    }
    if (workout_id === 'Bulgarian%20Split%20Squats') {
        workout_id = 9;
    }
    if (workout_id === 'Hip%20Thrusts') {
        workout_id = 10;
    }
    if (workout_id === 'Hamstring%20Curls') {
        workout_id = 11;
    }
    if (workout_id === 'Reverse%20Lunge') {
        workout_id = 12;
    }
    if (workout_id === 'Incline%20Bench%20Press') {
        workout_id = 13;
    }
    if (workout_id === 'Bench%20Press') {
        workout_id = 14;
    }
    if (workout_id === 'Chest%20Fly') {
        workout_id = 15;
    }
    if (workout_id === 'Incline%20Cable%20Flyes') {
        workout_id = 16;
    }
    if (workout_id === 'Lying%20Pullovers') {
        workout_id = 17;
    }
    if (workout_id === 'Push%20Up') {
        workout_id = 18;
    }
    if (workout_id === 'Seated%20Lat%20Pulldown') {
        workout_id = 19;
    }
    if (workout_id === 'High%20Rows') {
        workout_id = 20;
    }
    if (workout_id === 'Seated%20High%20Back%20Row') {
        workout_id = 21;
    }
    if (workout_id === 'Shrugs') {
        workout_id = 22;
    }
    if (workout_id === 'Incline%20Reverse%20Fly') {
        workout_id = 23;
    }
    if (workout_id === 'Bent-Over%20Row') {
        workout_id = 24;
    }
    if (workout_id === 'Asyncronous%20Waves') {
        workout_id = 25;
    }
    if (workout_id === 'Forward%20Hurdle%20Run') {
        workout_id = 26;
    }
    if (workout_id === 'Lateral%20Hurdle%20Run') {
        workout_id = 27;
    }
    if (workout_id === 'Burpees') {
        workout_id = 28;
    }
    if (workout_id === 'Lateral%20Shuffle') {
        workout_id = 29;
    }
    if (workout_id === 'Front%20Plank') {
        workout_id = 30;
    }
    if (workout_id === 'Reverse%20Ab%20Crunch') {
        workout_id = 31;
    }
    if (workout_id === 'Sit-Up') {
        workout_id = 32;
    }
    if (workout_id === 'Vertical%20Toe%20Touch') {
        workout_id = 33;
    }
    if (workout_id === 'Medicine%20Ball%20Trunk%20Rotations') {
        workout_id = 34;
    }
    if (workout_id === 'Ab%20Rollout') {
        workout_id = 35;
    }

    // if there is text inside textarea
    if (comment_text) {
        const response = await fetch('/api/comments', {
            method: 'POST',
                body: JSON.stringify({
                    workout_id,
                    comment_text
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (response.ok) {
            document.location.reload();
        } else {
            alert(response.statusText);
        }
    }
}
// event listener for button
document.querySelector('.comment-form').addEventListener('submit', commentFormHandler);