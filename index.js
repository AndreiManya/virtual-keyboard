const BODY = document.querySelector('body'),
keys = [
        {value: '`'}, 
        {value:'1'}, 
        {value:'2'}, 
        {value:'3'}, 
        {value:'4'},
        {value:'5'}, 
        {value:'6'},
        {value:'7'},
        {value:'8'},
        {value:'9'},
        {value:'0'},
        {value:'-'},
        {value:'='},
        {value:'Backspace', width: 'width: 185px'},
        {value: 'Tab', width: 'width: 95px'}, 
        {value:'q'}, 
        {value:'w'}, 
        {value:'e'}, 
        {value:'r'},
        {value:'t'}, 
        {value:'y'},
        {value:'u'},
        {value:'i'},
        {value:'o'},
        {value:'p'},
        {value:'['},
        {value:']'},
        {value:"|"},
        {value:'Del'},
        {value:'CapsLock', width: 'width: 196px'},
        {value:'a'},
        {value:'s'},
        {value:'d'},
        {value:'f'},
        {value:'g'},
        {value:'h'},
        {value:'j'},
        {value:'k'},
        {value:'l'},
        {value:';'},
        {value:'"'},
        {value:'Enter', width: 'width: 165px'},
        {value:'Shift', width: 'width: 196px'},
        {value:'z'},
        {value:'x'},
        {value:'c'},
        {value:'v'},
        {value:'b'},
        {value:'n'},
        {value:'m'},
        {value:','},
        {value:'.'},
        {value:'/'},
        {value:'↑'},
        {value:'Shift', width: 'width: 165px'},
        {value:'Ctr'},
        {value:'Win'},
        {value:'Alt'},
        {value:'', width: 'width: 650px'},
        {value:'Alt'},
        {value:'←'},
        {value:'↓'},
        {value:'→'},
        {value:'Ctrl'}
       ]; 

BODY.insertAdjacentHTML('beforeend', `<textarea class="area"></textarea>`);
BODY.insertAdjacentHTML('beforeend', `<section class="key-container"></section>`);
let keyContainer = document.querySelector('.key-container');
keys.forEach((e) => {
    let elem = document.createElement("span");
    elem.classList.add("key");
    elem.innerText = e.value;
    elem.style = e.width ? e.width : 'width: 80px;';
    keyContainer.appendChild(elem);
})