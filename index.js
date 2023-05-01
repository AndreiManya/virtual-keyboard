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
       ],
keysValue = {
    'Backquote': '`',
    'Digit1': '1', 
    'Digit2': '2', 
    'Digit3': '3',
    'Digit4': '4',
    'Digit5': '5',
    'Digit6': '6',
    'Digit7': '7',
    'Digit8': '8',
    'Digit9': '9',
    'Digit0': '0',
    'Minus': '-',
    'Equal': '=',
    'KeyQ': 'q',
    'KeyW': 'w',
    'KeyE': 'e',
    'KeyR': 'r',
    'KeyT': 't',
    'KeyY': 'y',
    'KeyU': 'u',
    'KeyI': 'i',
    'KeyO': 'o',
    'KeyP': 'p',
    'BracketLeft': '[',
    'BracketRight': ']',
    'Backslash': "|",
    'KeyA': 'a',
    'KeyS': 's',
    'KeyD': 'd',
    'KeyF': 'f',
    'KeyG': 'g',
    'KeyH': 'h',
    'KeyJ': 'j',
    'KeyK': 'k',
    'KeyL': 'l',
    'Semicolon': ';',
    'Quote': '"',
    'KeyZ': 'z',
    'KeyX': 'x',
    'KeyC': 'c',
    'KeyV': 'v',
    'KeyB': 'b',
    'KeyN': 'n',
    'KeyM': 'm',
    'Comma': ',',
    'Period': '.',
    'Slash': '/',
    'ArrowUp': '↑',
    'Space': ' ',
    'ArrowLeft': '←',
    'ArrowDown': '↓',
    'ArrowRight': '→'
    }; 
const clicked = (item) => { 
    item && item.classList.toggle('toggled');
    setTimeout(() => {
        item.classList.toggle('toggled');
    }, 500);
}
BODY.insertAdjacentHTML('beforeend', `<textarea class="area"></textarea>`);
BODY.insertAdjacentHTML('beforeend', `<section class="key-container"></section>`);
let keyContainer = document.querySelector('.key-container'),
    textArea = document.querySelector('.area');
textArea.setAttribute('rows', 8);
keys.forEach((e) => {
    let elem = document.createElement("span");
    elem.classList.add("key");
    elem.id = `${e.id}`;
    elem.innerText = e.value;
    elem.style = e.width ? e.width : 'width: 80px;';
    elem.addEventListener('click', (element) => {
        if (element.target.id === 'Delete') { 
            textArea.textContent = textArea.value.split('').reverse().splice(0, 2).reverse().join('');
        }
        textArea.focus();
        clicked(element.target);
        textArea.textContent = checkKeys(element.target.id) && textArea.value + keysValue[element.target.id];

    })
    keyContainer.appendChild(elem);
})
function checkKeys(key) {
    return ['Backquote', 'Digit1','Digit2','Digit3','Digit4','Digit5','Digit6','Digit7','Digit8','Digit9','Digit0','KeyQ', 'KeyW', 'KeyE', 'KeyR', 'KeyT', 'KeyY', 'KeyU', 'KeyI', 'KeyO', 'KeyP', 'Backslash',  'Minus', 'Equal','Delete','Backspace', 'Space', 'BracketLeft',
    'BracketRight',
    'KeyA',
    'KeyS',
    'KeyD',
    'KeyF',
    'KeyG',
    'KeyH',
    'KeyJ',
    'KeyK',
    'KeyL',
    'Semicolon',
    'Quote',
    'KeyZ',
    'KeyX',
    'KeyC',
    'KeyV',
    'KeyB',
    'KeyN',
    'KeyM',
    'Comma',
    'Period',
    'Slash',
    'ArrowUp',
    'Space',
    'ArrowLeft',
    'ArrowDown',
    'ArrowRight'].includes(key);
  }
document.addEventListener('keydown', (event) => {
    console.log(event.code)
    let item = document.querySelector(`#${event.code}`);
    clicked(item);
    textArea.focus();
  });
