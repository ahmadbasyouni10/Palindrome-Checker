const check = document.getElementById('check-btn');
const results = document.getElementById('result');

function palindromeChecker() {
  const palindromeInput = document.getElementById('text-input').value;
  if (palindromeInput == "") {
    alert("Please input a value")
    return;
  }
  const cleanInp = palindromeInput.toLowerCase().replace(/[^a-zA-Z0-9]/g, '');
  const reverseInput = cleanInp.split('').reverse().join('');
  if (reverseInput === cleanInp) {
    results.innerHTML = `${palindromeInput} is a palindrome`;
  }
  else {
    results.innerHTML = `<strong>${palindromeInput}</strong> is not a palindrome`;
  }
  }

check.addEventListener("click", palindromeChecker)
