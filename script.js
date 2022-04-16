const gmailInput = document.getElementById('gmail');
const header = document.querySelector('header');
const body = document.querySelector('body');
const hidden = document.querySelector('.text1');
const nav = hidden.offsetTop;
const chat = document.querySelector(".chat");
const mainChat=document.querySelector('.main_chat');
const x = document.querySelector('.x');
body.addEventListener("wheel", function(){
    if(window.scrollY >= nav){
        header.classList.add('hide');
    }else{
        header.classList.remove('hide')
    }
} );
gmailInput.addEventListener("focus", function(){
    gmailInput.style.border = '2px solid rgb(138,138,138)'
});
chat.addEventListener('click', function(){
    chat.classList.add('hide');
    mainChat.classList.add('flex');
})
x.addEventListener('click', function(){
    chat.classList.remove('hide');
    mainChat.classList.remove('flex');
})