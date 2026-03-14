const textInput = document.getElementById('textInput');
const output = document.getElementById('output');
const letterCount = document.getElementById('letterCount');
const consonantCount = document.getElementById('consonantCount');
const vowelCount = document.getElementById('vowelCount');


const savedText = localStorage.getItem('vowelText') || '';
textInput.value = savedText;
render(savedText);


textInput.addEventListener('input', e => {
  const text = e.target.value;
  const lastChar = text.slice(-1);
  localStorage.setItem('vowelText', text);
  render(text, lastChar);
})

// Bounce vowels only.
function render(text) {

  const lastIndex = text.length - 1;

  const highlighted = text
    .split('')
    .map((char, index) => {

      const isVowel = /[aeiouAEIOU]/.test(char);

        if (isVowel) {
          if (index === lastIndex) {
            return `<span class="vowel bounce">${char}</span>`;
        } 
          return `<span class="vowel">${char}</span>`;
        }

      return char;
    }).join('');

  output.innerHTML = highlighted;

  const lettersOnly = text.replace(/[^a-zA-Z]/g, '');
  letterCount.textContent = lettersOnly.length;

  const consonantsOnly = text.match(/[^aeiou\s\d\W]/gi) || [];
  consonantCount.textContent = consonantsOnly.length;

  const vowelsOnly = text.match(/[aeiou]/gi) || [];
  vowelCount.textContent = vowelsOnly.length;
}

// Bounce all the text.
// function render(text) {
//   const lastIndex = text.length - 1;

//   const highlighted = text
//     .split('')
//     .map((char, index) => {
//       // If it's the last character, add bounce
//       if (index === lastIndex) {
//         return `<span class="bounce">${char}</span>`;
//       }

//       // Otherwise, just render normally (or highlight vowels)
//       if (/[aeiouAEIOU]/.test(char)) {
//         return `<span class="vowel">${char}</span>`;
//       }

//       return char;
//     })
//     .join('');

//   output.innerHTML = highlighted;

//   letterCount.textContent = text.length;

//   const vowels = text.match(/[aeiou]/gi) || [];
//   vowelCount.textContent = vowels.length;
// }































// // ===== Select DOM Elements =====
//   const input = document.getElementById('textInput');
//   const output = document.getElementById('output');
//   const letterCount = document.getElementById('letterCount');
//   // ===== Load previous value from localStorage =====
//   const savedText = localStorage.getItem('vowelText') || '';
//   input.value = savedText;
//   render(savedText);

//   // ===== Event listener: input changes =====
//   input.addEventListener('input', (e) => {
//     const text = e.target.value;
//     localStorage.setItem('vowelText', text); // Save in localStorage
//     render(text);
//   });

//   // ===== Render function: highlights vowels + counts letters =====
//   function render(text) {
//     const highlighted = text.replace(/[aeiouAEIOU]/g, (vowel) => `<span class="vowel">${vowel}</span>`);
//     output.innerHTML = highlighted;
//     letterCount.textContent = text.length;
//   }