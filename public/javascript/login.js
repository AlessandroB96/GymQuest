// login form handler
async function loginFormHandler(event) {
    event.preventDefault();
    // declare variables
    const username = document.querySelector('#username-login').value.trim();
    const password = document.querySelector('#password-login').value.trim();
    // if there is a username and password it will post them
    if (username && password) {
        const response = await fetch('/api/users/login', {
            method: 'post',
            body: JSON.stringify({
                username,
                password
            }),
            headers: { 'Content-Type': 'application/json' }
        });

        if (response.ok) {
            document.location.replace('/dashboard')
        } else {
            alert(response.statusText);
        }
    }
}
// event listener for button
document.querySelector('.login-form').addEventListener('submit', loginFormHandler);