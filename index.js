const BODY = document.querySelector('body'),
keys = [
        {value: '`', id: 'Backquote'}, 
        {value:'1', id: 'Digit1'}, 
        {value:'2', id: 'Digit2'}, 
        {value:'3', id: 'Digit3'}, 
        {value:'4', id: 'Digit4'},
        {value:'5', id: 'Digit5'}, 
        {value:'6', id: 'Digit6'},
        {value:'7', id: 'Digit7'},
        {value:'8', id: 'Digit8'},
        {value:'9', id: 'Digit9'},
        {value:'0', id: 'Digit0'},
        {value:'-', id: 'Minus'},
        {value:'=', id: 'Equal'},
        {value:'Backspace', width: 'width: 185px', id: 'Backspace'},
        {value: 'Tab', width: 'width: 95px', id: 'Tab'}, 
        {value:'q', id: 'KeyQ'}, 
        {value:'w', id: 'KeyW'}, 
        {value:'e', id: 'KeyE'}, 
        {value:'r', id: 'KeyR'},
        {value:'t', id: 'KeyT'}, 
        {value:'y', id: 'KeyY'},
        {value:'u', id: 'KeyU'},
        {value:'i', id: 'KeyI'},
        {value:'o', id: 'KeyO'},
        {value:'p', id: 'KeyP'},
        {value:'[', id: 'BracketLeft'},
        {value:']', id: 'BracketRight'},
        {value:"|", id: 'Backslash'},
        {value:'Del', id: 'Delete'},
        {value:'CapsLock', width: 'width: 196px', id: 'CapsLock'},
        {value:'a', id: 'KeyA'},
        {value:'s', id: 'KeyS'},
        {value:'d', id: 'KeyD'},
        {value:'f', id: 'KeyF'},
        {value:'g', id: 'KeyG'},
        {value:'h', id: 'KeyH'},
        {value:'j', id: 'KeyJ'},
        {value:'k', id: 'KeyK'},
        {value:'l', id: 'KeyL'},
        {value:';', id: 'Semicolon'},
        {value:'"', id: 'Quote'},
        {value:'Enter', width: 'width: 165px', id: 'Enter'},
        {value:'Shift', width: 'width: 196px', id: 'ShiftLeft'},
        {value:'z', id: 'KeyZ'},
        {value:'x', id: 'KeyX'},
        {value:'c', id: 'KeyC'},
        {value:'v', id: 'KeyV'},
        {value:'b', id: 'KeyB'},
        {value:'n', id: 'KeyN'},
        {value:'m', id: 'KeyM'},
        {value:',', id: 'Comma'},
        {value:'.', id: 'Period'},
        {value:'/', id: 'Slash'},
        {value:'↑', id: 'ArrowUp'},
        {value:'Shift', width: 'width: 165px', id: 'ShiftRight'},
        {value:'Ctr', id: 'ControlLeft'},
        {value:'Win', id: 'MetaLeft'},
        {value:'Alt', id: 'AltLeft'},
        {value:'', width: 'width: 650px', id: 'Space'},
        {value:'Alt', id: 'AltRight'},
        {value:'←', id: 'ArrowLeft'},
        {value:'↓', id: 'ArrowDown'},
        {value:'→', id: 'ArrowRight'},
        {value:'Ctrl', id: 'ControlRight'}
       ]; 
const clicked = (item) => { 
    item && item.classList.toggle('toggled');
    setTimeout(() => {
        item.classList.toggle('toggled');
    }, 500);
}
BODY.insertAdjacentHTML('beforeend', `<textarea class="area"></textarea>`);
BODY.insertAdjacentHTML('beforeend', `<section class="key-container"></section>`);
let keyContainer = document.querySelector('.key-container');
keys.forEach((e) => {
    let elem = document.createElement("span");
    elem.classList.add("key");
    elem.id = `${e.id}`;
    elem.innerText = e.value;
    elem.style = e.width ? e.width : 'width: 80px;';
    elem.addEventListener('click', () => {
        clicked(elem);
    })
    keyContainer.appendChild(elem);
})

document.addEventListener('keydown', (event) => {
    // if (event.code == 'KeyZ' && (event.ctrlKey || event.metaKey)) {
    //   alert('Undo!')
    // }
    let item = document.querySelector(`#${event.code}`);
    clicked(item);
    console.log(item)
  });