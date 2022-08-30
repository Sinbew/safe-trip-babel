class WordCounter {
  constructor(words, limit) {
    this.words = words;
    this.limit = limit;
    this.counter = 0;
  }

  countWords() {
    this.counter =
      this.words.split(' ').filter(el => el === 'a' || el === 'an' || el === 'the').length +
      this.limit;
  }

  getCuttedWords() {
    this.words = this.words.split(' ').slice(0, this.counter).join(' ');
    return this.words;
  }

  setWords(words) {
    this.words = words;
  }

  setLimit(limit) {
    this.limit = limit;
  }
}

const cutter = new WordCounter('', 0);

const input = document.querySelector('.input');
const textArea = document.querySelector('.textarea');

input.addEventListener('input', handlerInput);

function handlerInput(evt) {
  cutter.setLimit(+evt.target.value);
  if (evt.target.value === '') {
    return;
  }
  if (+evt.target.value < 0) {
    evt.target.value = '';
  } else {
    cutter.countWords();
    textArea.value = cutter.getCuttedWords();
  }
}

textArea.addEventListener('input', textAreaInput);

function textAreaInput(evt) {
  cutter.setWords(evt.target.value);
  cutter.countWords();
  evt.target.value = cutter.getCuttedWords();
}

textArea.addEventListener('keypress', onlyLetters);

function onlyLetters(evt) {
  if ((evt.which > 64 && evt.which < 91) || (evt.which > 96 && evt.which < 123) || evt.which == 8) {
    return;
  }
  if (evt.which === 32) {
    return;
  } else {
    evt.preventDefault();
  }
}

// const input = document.querySelector('.input');
// const textArea = document.querySelector('.textarea');

// input.addEventListener('input', handlerInput);

// let int;

// textArea.setAttribute('disabled', 'true');

// function handlerInput(evt) {
//   int = +evt.target.value;
//   if (int <= 0) {
//     evt.target.value = '';
//   }
//   if (int) {
//     textArea.removeAttribute('disabled', 'false');
//   } else {
//     textArea.setAttribute('disabled', 'true');
//   }

//   setTimeout(() => {
//     textArea.value = textArea.value
//       .split(' ')
//       .slice(0, int + countIgnoredWords(textArea.value.split(' ')))
//       .join(' ');
//   }, 1000);
// }

// textArea.addEventListener('keypress', onlyLetters);

// function onlyLetters(evt) {
//   if (evt.which < 48 || evt.which > 57) {
//     return;
//   } else {
//     evt.preventDefault();
//   }
// }

// textArea.addEventListener('input', textAreaInput);

// function textAreaInput(evt) {
//   const res = evt.target.value.split(' ');

//   if (res.length === int + countIgnoredWords(res) + 1) {
//     evt.target.setAttribute('disabled', 'true');
//   }
// }

// function countIgnoredWords(words) {
//   return words.filter(el => el === 'a' || el === 'an' || el === 'the').length;
// }
