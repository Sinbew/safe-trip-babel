// class WordCounter{
//     constructor()
// }

const input = document.querySelector('.input');
const textArea = document.querySelector('.textarea');

input.addEventListener('input', handlerInput);

let int;

textArea.setAttribute('disabled', 'true');

function handlerInput(evt) {
  int = +evt.target.value;
  if (int <= 0) {
    evt.target.value = '';
  }
  if (int) {
    textArea.removeAttribute('disabled', 'false');
  } else {
    textArea.setAttribute('disabled', 'true');
  }

  setTimeout(() => {
    textArea.value = textArea.value
      .split(' ')
      .slice(0, int + countIgnoredWords(textArea.value.split(' ')))
      .join(' ');
  }, 1000);
}

textArea.addEventListener('keypress', onlyLetters);

function onlyLetters(evt) {
  if (evt.which < 48 || evt.which > 57) {
    return;
  } else {
    evt.preventDefault();
  }
}

textArea.addEventListener('input', textAreaInput);

function textAreaInput(evt) {
  const res = evt.target.value.split(' ');

  if (res.length === int + countIgnoredWords(res) + 1) {
    evt.target.setAttribute('disabled', 'true');
  }
}

function countIgnoredWords(words) {
  return words.filter(el => el === 'a' || el === 'an' || el === 'the').length;
}
