//your JS code here. If required.
const loginForm = document.getElementById('loginForm');
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');
    const rememberCheckbox = document.getElementById('checkbox');
    const submitButton = document.getElementById('submit');
    const existingButton = document.createElement('button');
    existingButton.textContent = 'Login as existing user';
    existingButton.id = 'existing';
    existingButton.style.visibility = 'hidden';
	

    // Check if saved user details exist in localStorage
    if (localStorage.getItem('username') && localStorage.getItem('password')) {
      existingButton.style.visibility = 'visible';
    }

    document.body.appendChild(existingButton);

    // Event listener for the form submission
    loginForm.addEventListener('submit', function(event) {
      event.preventDefault();
      const username = usernameInput.value;
      const password = passwordInput.value;

      if (rememberCheckbox.checked) {
        localStorage.setItem('username', username);
        localStorage.setItem('password', password);
      } else {
        localStorage.removeItem('username');
        localStorage.removeItem('password');
		existingButton.style.visibility = 'hidden';
      }

      alert(`Logged in as ${username}`);

      // If there are saved details, show existing button
      if (localStorage.getItem('username') && localStorage.getItem('password')) {
        existingButton.style.visibility = 'visible';
      }
    });

    // Event listener for the "Login as existing user" button
    existingButton.addEventListener('click', function() {
      const savedUsername = localStorage.getItem('username');
      alert(`Logged in as ${savedUsername}`);
		
    });