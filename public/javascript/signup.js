// sign up form handler
async function signupFormHandler(event) {
    event.preventDefault();
    // declare variables
    const username = document.querySelector('#username-signup').value.trim();
    const email = document.querySelector('#email-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();
    // if there is a username, email, and password it will post them
    if (username && email && password) {
        const response = await fetch('/api/users', {
            method: 'post',
            body: JSON.stringify({
                username,
                email,
                password
            }),
            headers: { 'Content-Type': 'application/json' }
        });
        // sends user to dashboard if successful
        if (response.ok) {
            document.location.replace('/dashboard')
        } else {
            alert(response.statusText);
        }
    }
}
// event listener for button
document.querySelector('.signup-form').addEventListener('submit', signupFormHandler);