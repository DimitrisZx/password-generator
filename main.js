const $genBtn = document.querySelector("#generator").addEventListener("click", genPass);
const $output = document.querySelector('#generated');

const possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

function genPass(e) {
  const isAlphanumeric = document.querySelector('#abc').checked;
  const $rangeOutput = document.querySelector('output');
  const passlenght = $rangeOutput.value;
  const password = [];
  // If ABC checkbox is checked to generated password will contain numbers and letter, both uppercase and lowercase. Else the password will be just numbers from 0-9.
  if (isAlphanumeric) {
    for (let i = 0; i <= passlenght; i++) {
      const passChar = possible[Math.floor(Math.random() * 62) + 1];
      password.push(passChar);
    }
  } else {
    for (let i = 0; i <= passlenght; i++) {
      const passChar = Math.floor(Math.random() * 9) + 1
      password.push(passChar);
    }
  }


  const finalPass = password.join('');
  $output.textContent = finalPass;
}
