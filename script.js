const letters_ = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
const numbers_ = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
const special_char_ = ["#", "!", "/", "*", "_", ".", "?"];

let passLen = 9;

function submit() {
    const charactersEl = document.getElementById('number').value;
    const passEl = document.getElementById('pass');
    let password;

    passLen = charactersEl;

    if (passLen > 10) {
        passLen = 10;
    }

    randomNumber = Math.floor(Math.random() * letters_.length);
    password = letters_[randomNumber];
    const pass1 = password;

    randomNumber = Math.floor(Math.random() * letters_.length);
    password = letters_[randomNumber];
    const pass2 = password.toLowerCase();

    randomNumber = Math.floor(Math.random() * letters_.length);
    password = letters_[randomNumber];
    const pass3 = password.toLowerCase();

    randomNumber = Math.floor(Math.random() * numbers_.length);
    password = numbers_[randomNumber];
    const pass4 = password;

    randomNumber = Math.floor(Math.random() * numbers_.length);
    password = numbers_[randomNumber];
    const pass5 = password;

    randomNumber = Math.floor(Math.random() * letters_.length);
    password = letters_[randomNumber];
    const pass6 = password.toLowerCase();

    randomNumber = Math.floor(Math.random() * numbers_.length);
    password = numbers_[randomNumber];
    const pass7 = password;

    randomNumber = Math.floor(Math.random() * special_char_.length);
    password = special_char_[randomNumber];
    const pass8 = password;

    randomNumber = Math.floor(Math.random() * letters_.length);
    password = letters_[randomNumber];
    const pass9 = password.toLowerCase();

    randomNumber = Math.floor(Math.random() * numbers_.length);
    password = numbers_[randomNumber];
    const pass10 = password;

    randomNumber = Math.floor(Math.random() * letters_.length);
    password = letters_[randomNumber];
    const pass11 = password.toLowerCase();

    oldpass = '';
    for (i = passLen; i > 0; i--) {
        randomNumber = Math.floor(Math.random() * passLen);
    
        if (randomNumber == 0) {
        finalPass = oldpass + pass1;
        } else if (randomNumber == 1) {
            finalPass = oldpass + pass2;
        } else if (randomNumber == 2) {
            finalPass = oldpass + pass3;
        } else if (randomNumber == 3) {
            finalPass = oldpass + pass4;
        } else if (randomNumber == 4) {
            finalPass = oldpass + pass5;
        } else if (randomNumber == 5) {
            finalPass = oldpass + pass6;
        } else if (randomNumber == 6) {
            finalPass = oldpass + pass7;
        } else if (randomNumber == 7) {
            finalPass = oldpass + pass8;
        } else if (randomNumber == 8) {
            finalPass = oldpass + pass9;
        } else if (randomNumber == 9) {
            finalPass = oldpass + pass10;
        } else if (randomNumber == 10) {
            finalPass = oldpass + pass11;
        }

        oldpass = finalPass;
    }

    passEl.innerHTML = finalPass.toString();
}