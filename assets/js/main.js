(function () {
    function getById(id) {
        return document.getElementById(id);
    }

    function goBack() {
        window.history.back();
    }

    function showAuthForm(formName) {
        const loginForm = getById('login');
        const registerForm = getById('Register');
        const slider = getById('btn');

        if (!loginForm || !registerForm || !slider) {
            return;
        }

        const isRegister = formName === 'register';
        loginForm.style.display = isRegister ? 'none' : 'block';
        registerForm.style.display = isRegister ? 'block' : 'none';
        slider.style.left = isRegister ? '9em' : '0';
    }

    window.goBack = goBack;
    window.login = function () { showAuthForm('login'); };
    window.register = function () { showAuthForm('register'); };
})();
