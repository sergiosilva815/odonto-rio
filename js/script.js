//alert(js carregado);
// console.log('Teste de console');
let menu = document.querySelector('.menu');
let btnMenu = document.querySelector('.btn-menu');


// console.log(menu);
//console.log(btnMenu);

//função que será acionada a partir do evento
function menuMobile() {
    //alert('Função acionada!');
    menu.classList.toggle('menu-open');
}
function closeMenu() {
    menu.classList.remove('menu-open');
}






//Evento -> São ações que o usuario executa no navegador
//Adicionando um evento ao btnMenu.(nome do evento,função q vai ser executada)
btnMenu.addEventListener('click', menuMobile);
// adicionar um evento ao clicar no menu
menu.addEventListener('click', closeMenu);







//sole.log(menu);
//console.log(btnMenu);