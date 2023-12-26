const textInput = document.getElementById('text-input')
const checkButton = document.getElementById('check-btn')
const result = document.getElementById('result')

checkButton.addEventListener("click", () => {
  const originalText = textInput.value;

  if(originalText === ""){
    alert('Please input a value')
    return;
  }

  const text = originalText.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
  const reverseText = text.split('').reverse().join('')

  const isPalindrome = text === reverseText;
  result.innerText = isPalindrome ? `${originalText} is a palindrome` : `${originalText} is not a palindrome`
});