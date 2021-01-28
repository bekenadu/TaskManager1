const x = document.querySelector('.input');
const oper = document.querySelector('.operand');
const y = document.querySelector('.input2');
const plusButton = document.querySelector('.add')
const minusButton = document.querySelector('.minus');
const multButton = document.querySelector ('.mult');
const divButton = document.querySelector('.div');
const res = document.querySelector('.result');
const eq =document.querySelector('.equal');

//numebers
const onee = document.querySelector('.one');
const twoo = document.querySelector('.two');
const three = document.querySelector('.three');
const fourr = document.querySelector('.four');
const fivee = document.querySelector('.five');
const sixx = document.querySelector('.six');
const sevenn = document.querySelector('.seven');
const eightt = document.querySelector('.eight');
const ninee = document.querySelector('.nine');
const zeroo = document.querySelector('.zero');
const percentt = document.querySelector('.percent');

// calling
eq.addEventListener('click',equal);
minusButton.addEventListener('click', su);
plusButton.addEventListener('click', ad);
multButton.addEventListener('click', mu);
divButton.addEventListener('click', di);
onee.addEventListener('click',on);
twoo.addEventListener('click', tw);
three.addEventListener('click',thr);
fourr.addEventListener('click', fur);
fivee.addEventListener('click', fve);
sixx.addEventListener('click',sx);
sevenn.addEventListener('click',svn);
eightt.addEventListener('click',eght);
ninee.addEventListener('click',nin);
zeroo.addEventListener('click',zr);
percentt.addEventListener('click',prc);
// functions
function additon(e) {
    const a = parseInt(x.value) + parseInt(y.value);
    res.textContent = a;
}
function Minus(e) {
    const m = parseInt(x.value) - parseInt(y.value);
    res.textContent = m;
}
function mult(e) {
    const k = parseInt(x.value) * parseInt(y.value);
    res.textContent = k;
}
function div(e) {
    if (parseInt(y.value) > 0) {
        const d = parseFloat(x.value) / parseFloat(y.value);
        res.textContent = d;
    }
    else {
        res.textContent = "division by zero"
    }
}
function on(e){
    if (x === null){
    x.textContent = 1;}
    else{
        y.textContent = 1;
    }

}
function tw(e) {
    y.textContent = 2;

}
function thr(e) {
    y.textContent = 3;

}
function fur(e) {
    y.textContent = 4;

}
function fve(e) {
    y.textContent = 5;

}
function sx(e) {
    x.textContent = 6;

}
function svn(e) {
    x.textContent = 7;

}
function eght(e) {
    x.textContent = 8;

}
function nin(e) {
    x.textContent = 9;

}function zr(e){
    x.textContent = 0;
    
}
function prc(e) {
    oper.textContent = "%";

}

function ad(e){
    oper.textContent="+" ;
}
function su(e){
    oper.textContent=" - " ;
}
function mu(e){
    oper.textContent= "*" ;
}
function di(e){ 
    oper.textContent = "/" ;
}
function equal(e){
    if (oper === "+"){
        const a = parseInt(x.value) + parseInt(y.value);
        res.textContent = a;
       // additon();
    }
    else if (oper === "-"){
        const m = parseInt(x.value) - parseInt(y.value);
        res.textContent = m;
       // Minus();
    }
    else if (oper === "*"){
        const k = parseInt(x.value) * parseInt(y.value);
        res.textContent = k;
        //  mult();     
    }
    else if  (oper === "/"){
        const d = parseFloat(x.value) / parseFloat(y.value);
        res.textContent = d;
     
        //  div();
    }

}
