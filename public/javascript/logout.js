// login form handler
async function logout() {
    const response = await fetch('/api/users/logout', {
        method: 'post',
        headers: { 'Content-Type': 'application/json' }
    });
    // takes user to homepage if successful
    if (response.ok) {
        document.location.replace('/');
    } else {
        alert(response.statusText);
    }
}
// event listener for button
document.querySelector('#logout').addEventListener('click', logout);