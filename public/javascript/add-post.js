//FOR FUTURE DEVELOPMENT
//Personal trainers will add posts

async function newFormHandler(event) {
    event.preventDefault();

    const workout_name = document.querySelector('input[name="post-title"]').value;
    const workout_url = document.querySelector('input[name="post-url"]').value;

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

document.querySelector('.new-post-form').addEventListener('submit', newFormHandler);