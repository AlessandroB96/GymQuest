// new form handler
async function newFormHandler(event) {
    event.preventDefault();
    // declare variables
    const workout_name = document.querySelector('input[name="post-title"]').value;
    const workout_url = document.querySelector('input[name="post-url"]').value;
    // posts new post with title and content
    const response = await fetch(`/api/workouts`, {
        method: 'POST',
        body: JSON.stringify({
            workout_name,
            workout_url
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
// event listener for button
document.querySelector('.new-post-form').addEventListener('submit', newFormHandler);