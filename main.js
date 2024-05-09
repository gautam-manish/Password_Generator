
const inputBox = document.getElementById("inputBox");
const toCapital = document.getElementById("toCapital");
const toSmall = document.getElementById("toSmall");
const toNumber = document.getElementById("toNumber");
const toSymbol = document.getElementById("toSymbol");
const btn = document.getElementById("btn");
const result = document.getElementById("result");


btn.onclick = function () {

    function generatePassword(passwordLength, includeLowercase, includeUppercase, includeNumbers, includeSymbols) {

        const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
        const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        const numberChars = "0123456789";
        const symbolChars = "!@#$%&";

        let allowedChars = "";
        let password = "";

        allowedChars += includeLowercase ? lowercaseChars : "";
        allowedChars += includeUppercase ? uppercaseChars : "";
        allowedChars += includeSymbols ? symbolChars : "";
        allowedChars += includeNumbers ? numberChars : "";

        for (let i = 0; i < passwordLength; i++) {
            const randomIndex = Math.floor(Math.random() * allowedChars.length);
            password += allowedChars[randomIndex];
        }

        return password;
    }


    let passwordLength = inputBox.value;
    let includeLowercase;
    let includeUppercase;
    let includeNumbers;
    let includeSymbols;

    if (toCapital.checked) {
        includeUppercase = true;
    }
    if (toSmall.checked) {
        includeLowercase = true;
    }
    if (toNumber.checked) {
        includeNumbers = true;
    }
    if (toSymbol.checked) {
        includeSymbols = true;
    }

    const password = generatePassword(passwordLength, includeLowercase, includeUppercase, includeUppercase, includeSymbols, includeNumbers);

    result.textContent = `${password}`;
}

