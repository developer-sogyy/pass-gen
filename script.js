const lowercase = 'abcdefghijklmnopqrstuvwxyz'.split('');
const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
const special_char_ = '#!/*_.?-+;)(<>{}[]|'.split('');
const numbers_ = '0123456789'.split('');

let passLen = 9;
let uppercaseEl = false;
let lowercaseEl = false;
let numbersEl = false;
let specialcharEl = false;

function submit() {
    const charactersEl = document.getElementById('number').value;
    const passEl = document.getElementById('pass');
    const copyBut = document.getElementById('copy');

    uppercaseEl = document.getElementById('uppercase').checked;
    lowercaseEl = document.getElementById('lowercase').checked;
    numbersEl = document.getElementById('numbers').checked;
    specialcharEl = document.getElementById('spec_chars').checked;
    finalPass = "";
    if (uppercaseEl || lowercaseEl || numbersEl || specialcharEl) {
        passLen = charactersEl;

        if (passLen > 1000) {
            passLen = 1000;
            //charactersEl = 1000;
        } else if (passLen < 4) {
            passLen = 4;
            //charactersEl = "4";
        }
    
        
        for (i = 0; i < passLen; i++) {
            finalPass = finalPass + getRandomChar();
        }
    
        
    }
    passEl.innerHTML = finalPass.toString();
    copyBut.hidden = false;
}

function getRandomChar() {
    
    done = false;

    do {
        rchar = Math.floor(Math.random() * 3 + 0.5);

        switch (rchar) {
            case 0:
                if (specialcharEl) {
                    done = true;
                }
                break;
            case 1:
                if (numbersEl){
                    done = true;
                }
                break;
            case 2:
                if (uppercaseEl) {
                    done = true;
                }
                break;
            case 3:
                if (lowercaseEl) {
                    done = true;
                }
                break;
            default:

        }
    } while (!done);

    switch (rchar) {
        case 0:
            randomNumber = Math.floor(Math.random() * special_char_.length);
            letter = special_char_[randomNumber];
            break;
        case 1:
            randomNumber = Math.floor(Math.random() * numbers_.length);
            letter = numbers_[randomNumber];
            break;
        case 2:
            randomNumber = Math.floor(Math.random() * uppercase.length);
            letter = uppercase[randomNumber];
            break;
        case 3:
            randomNumber = Math.floor(Math.random() * lowercase.length);
            letter = lowercase[randomNumber];
            break;
    }

    return letter;
}

function copy() {
    const pass = document.getElementById("pass");

    stringText = pass.innerHTML;

    navigator.clipboard.writeText(stringText);
  
    alert("Copied the text: " + stringText);
  }
