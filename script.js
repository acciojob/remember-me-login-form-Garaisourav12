//your JS code here. If required.
const loginForm = document.getElementById('loginForm');
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');
    const rememberCheckbox = document.getElementById('checkbox');
    const submitButton = document.getElementById('submit');
    const existingButton = document.createElement('button');
    existingButton.textContent = 'Login as existing user';
    existingButton.id = 'existing';
    existingButton.style.display = 'none';

    // Check if saved user details exist in localStorage
    if (localStorage.getItem('savedUsername') && localStorage.getItem('savedPassword')) {
      existingButton.style.display = 'block';
    }

    document.body.appendChild(existingButton);

    // Event listener for the form submission
    loginForm.addEventListener('submit', function(event) {
      event.preventDefault();
      const username = usernameInput.value;
      const password = passwordInput.value;

      if (rememberCheckbox.checked) {
        localStorage.setItem('savedUsername', username);
        localStorage.setItem('savedPassword', password);
      } else {
        localStorage.removeItem('savedUsername');
        localStorage.removeItem('savedPassword');
      }

      alert(`Logged in as ${username}`);

      // If there are saved details, show existing button
      if (localStorage.getItem('savedUsername') && localStorage.getItem('savedPassword')) {
        existingButton.style.display = 'block';
      }
    });

    // Event listener for the "Login as existing user" button
    existingButton.addEventListener('click', function() {
      const savedUsername = localStorage.getItem('savedUsername');
      alert(`Logged in as ${savedUsername}`);
    });