const signupTab = document.getElementById('signup-tab');
const loginTab = document.getElementById('login-tab');
const signupForm = document.getElementById('signup-form');
const loginForm = document.getElementById('login-form');


const users = {};

signupTab.addEventListener('click', () => {
    signupTab.classList.add('active');
    loginTab.classList.remove('active');
    signupForm.classList.add('active');
    loginForm.classList.remove('active');
});

loginTab.addEventListener('click', () => {
    loginTab.classList.add('active');
    signupTab.classList.remove('active');
    loginForm.classList.add('active');
    signupForm.classList.remove('active');
});

document.getElementById('signupForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('signupEmail').value;
    const name = document.getElementById('name').value;
    const password = document.getElementById('signupPassword').value;

    const passwordPattern = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    if (!passwordPattern.test(password)) {
        alert('Password must contain at least 8 characters, including an uppercase letter, a number, and a special character.');
        return;
    }

    
    users[email] = password;
    alert('Signup successful!');
});

document.getElementById('loginForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('loginEmail').value;
    const name = document.getElementById('name').value;
    const password = document.getElementById('loginPassword').value;

    if (users[email] && users[email] === password) {
        window.location.href = `welcome.html?name=${encodeURIComponent(name)}`;
    } else {
        alert('Invalid email or password.');
    }
});