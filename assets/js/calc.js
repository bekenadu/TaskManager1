const x = document.querySelector('#firstNum');
const y = document.querySelector('#secondNum');
const plusButton = document.querySelector('#add')
const minusButton = document.querySelectorAll('#sub');
const multButton = document.querySelectorAll ('#mult');
const divButton = document.querySelectorAll('#div');
const res = document.querySelectorAll('#result');

//
plusButton.addEventListener('click', additon);
// minusButton.addEventListener('click', Minus );

function additon(e){
    const a =x.value + y.value;
    res.innerText  = a ;
}
function Minus(e){
    var m = x.value - y.value;
    res.textContent = m;
}    
