(function () {
    'use strict';

    const loginForm = document.getElementById('login');
    const registerForm = document.getElementById('Register');
    const indicator = document.getElementById('btn');

    function showRegister() {
        if (!loginForm || !registerForm || !indicator) return;
        loginForm.style.display = 'none';
        registerForm.style.display = 'block';
        indicator.style.left = '9em';
    }

    function showLogin() {
        if (!loginForm || !registerForm || !indicator) return;
        loginForm.style.display = 'block';
        registerForm.style.display = 'none';
        indicator.style.left = '0';
    }

    window.register = showRegister;
    window.login = showLogin;
}());
