
let btnInfo = document.querySelector('.more-btn');
let hidden = document.querySelector('.row-hidden');


btnInfo.addEventListener('click', function () {
    if(hidden.style.display === 'none') {
        hidden.style.display = 'block';
    }else{
        hidden.style.display = 'none';
    }
});