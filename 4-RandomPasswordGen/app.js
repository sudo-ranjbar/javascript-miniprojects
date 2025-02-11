
const passwordBox = document.getElementById("password")
const length = 12
const genBtn = document.getElementById("gen-btn")
const copyBtn = document.querySelector(".display img")

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const lowerCase = "abcdefghijklmnopqrstuvwxyz"
const number = "0123456789"
const symbols = "@#$%^&*()_+~|{}[]<>/-=?"
const allChars = upperCase + lowerCase + number + symbols

function createPassword() {

    passwordBox.value = ""

    let password = ""

    while (password.length < length) {
        password += allChars[Math.floor(Math.random() * allChars.length)]
    }

    passwordBox.value = password
}

function copyPassword() {
    // passwordBox.select()
    // document.execCommand("copy")
    navigator.clipboard.writeText(passwordBox.value);
    alert('copied')
}


genBtn.addEventListener("click", createPassword)
copyBtn.addEventListener('click', copyPassword)
