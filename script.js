// Script para alternar entre abrir e fechar o menu
document.getElementById('hamburger').addEventListener('click', function() {
    var menu = document.getElementById('menu');
    var hamburger = document.getElementById('hamburger');
    
    // Adiciona ou remove a classe 'open' no menu e no ícone
    menu.classList.toggle('open');
    hamburger.classList.toggle('open');
});
