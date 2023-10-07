let from = document.getElementById('from');

let btnSortear = document.getElementById('btnSortear');
let displaySorteado = document.getElementById('displaySorteado');
let newWindowId = document.getElementById('newWindowId');
let btnNovoSorteio = document.getElementById('btnNovoSorteio');
let mainId = document.getElementById('mainId');
let headerId = document.getElementById('headerId');
btnSortear.addEventListener('click',function(){

    let numberFrom = from.value;    
    let numberTo = to.value;

    if((numberFrom!='')&&(numberTo!='')){
        from.value = '';
        to.value = '';

        numberFrom = Math.floor(numberFrom);
        numberTo = Math.ceil(numberTo);

        let sorteado = Math.floor(Math.random() * (numberTo - numberFrom + 1) + numberFrom);

        newWindowId.classList.remove('setNewWindowInvisible')
        newWindowId.classList.add('setNewWindowVisible')

        displaySorteado.innerHTML = sorteado;

        headerId.style.display = 'none';
        mainId.style.display =  'none';
    }    

})

btnNovoSorteio.addEventListener('click',function(){

    newWindowId.classList.remove('setNewWindowVisible');
    newWindowId.classList.add('setNewWindowInvisible');

    headerId.style.display = 'flex';
    mainId.style.display = 'flex';

})




