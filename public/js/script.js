// Start togglePassword icon change JS
var togglePassword = document.querySelector('.togglePassword');
var  password = document.querySelector('.id_password');
if(togglePassword != null){
    togglePassword.addEventListener('click', function (e) {
        // toggle the type attribute
        var type = password.getAttribute('type') === 'password' ? 'text' : 'password';
        password.setAttribute('type', type);
        // toggle the eye slash icon
        this.classList.toggle('hide-icon');
    });
};


