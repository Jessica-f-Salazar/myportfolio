document.querySelector('.input').addEventListener('change', function () {
    document.body.classList.toggle('dark-mode', this.checked);
});