const x = document.querySelector('.input');
const oper = document.querySelector('.operand');
const y = document.querySelector('.input2');
const plusButton = document.querySelector('.add')
const minusButton = document.querySelector('.minus');
const multButton = document.querySelector ('.mult');
const divButton = document.querySelector('.div');
const res = document.querySelector('.result');
const eq =document.querySelector('.equal');
const a= document.querySelector('.ac');

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
eq.addEventListener('click', equal);
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
a.addEventListener('click',Ac);
// functions
function additon(e) {
    const a = parseInt(x.textContent) + parseInt(y.textContent);
    res.textContent = a;
}
function Minus(e) {
    const m = parseInt(x.textContent) - parseInt(y.textContent);
    res.textContent = m;
}
function mult(e) {
    const k = parseInt(x.textContent) * parseInt(y.textContent);
    res.textContent = k;
}
function div(e) {
    if (parseInt(y.textContent) > 0) {
        const d = parseFloat(x.textContent) / parseFloat(y.textContent);
        res.textContent = d;
    }
    else {
        res.textContent = "division by zero"
    }
}
function on(e){
    if (x.textContent == "") {
        x.textContent = 1;
    } else if (y.textContent == "") {
        y.textContent = 1;
    }

}
function tw(e) {
    if (x.textContent == "") {
        x.textContent = 2;
    } else if (y.textContent == "") {
        y.textContent = 2;
    };

}
function thr(e) {
    if (x.textContent == "") {
        x.textContent = 3;
    } else if (y.textContent == "") {
        y.textContent = 3;
    };

}
function fur(e) {
    if (x.textContent == "") {
        x.textContent = 4;
    } else if (y.textContent == "") {
        y.textContent = 4;
    };

}
function fve(e) {
    if (x.textContent == "") {
        x.textContent = 5;
    } else if (y.textContent == "") {
        y.textContent = 5;
    };

}
function sx(e) {
    if (x.textContent == "") {
        x.textContent = 6;
    } else if (y.textContent == "") {
        y.textContent = 6;
    }

}
function svn(e) {
    if (x.textContent == "") {
        x.textContent = 7;
    } else if (y.textContent == "") {
        y.textContent = 7;
    }

}
function eght(e) {
    if (x.textContent == "") {
        x.textContent = 8;
    } else if (y.textContent == "") {
        y.textContent = 8;
    }

}
function nin(e) {
    if (x.textContent == "") {
        x.textContent = 9;
    } else if (y.textContent == "") {
        y.textContent = 9;
    };

}function zr(e){
    if (x.textContent == "") {
        x.textContent = 0;
    } else if (y.textContent == "") {
        y.textContent = 0;
    }
    
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
    if (oper.textContent === "+"){
        additon();
        x.textContent = "";
        y.textContent = "";
        oper.textContent = "";
    }
    else if (oper.textContent === "-"){
         Minus();
        x.textContent = "";
        y.textContent = "";
        oper.textContent = "";
    }
    else if (oper.textContent === "*"){
        mult();
        x.textContent = "";
        y.textContent = "";
        oper.textContent = "";     
    }
    else if  (oper.textContent === "/"){
        div();
        x.textContent = "";
        y.textContent = "";
        oper.textContent = "";
    }

}
function Ac(e){
    x.textContent = "";
    y.textContent = "";
    oper.textContent = "";
    res.textContent = "";
}
