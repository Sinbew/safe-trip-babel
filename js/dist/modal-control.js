'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var WordCounter = function () {
  function WordCounter(words, limit) {
    _classCallCheck(this, WordCounter);

    this.words = words;
    this.limit = limit;
    this.counter = 0;
    this.currentWords = 0;
  }

  _createClass(WordCounter, [{
    key: 'countWords',
    value: function countWords() {
      this.counter = this.words.split(' ').filter(function (el) {
        return el === 'a' || el === 'an' || el === 'the';
      }).length + this.limit;
    }
  }, {
    key: 'getCuttedWords',
    value: function getCuttedWords() {
      this.words = this.words.split(' ').slice(0, this.counter).join(' ');
      return this.words;
    }
  }, {
    key: 'setWords',
    value: function setWords(words) {
      this.words = words;
      this.setCurrentWords();
    }
  }, {
    key: 'getLimit',
    value: function getLimit() {
      return this.limit;
    }
  }, {
    key: 'setLimit',
    value: function setLimit(limit) {
      this.limit = limit;
    }
  }, {
    key: 'setCurrentWords',
    value: function setCurrentWords() {
      if (this.words.trim().split(' ')[0] === '') {
        this.currentWords = 0;
      } else {
        this.currentWords = this.words.trim().split(' ').length - this.words.split(' ').filter(function (el) {
          return el === 'a' || el === 'an' || el === 'the';
        }).length;
      }
    }
  }, {
    key: 'getCurrentWords',
    value: function getCurrentWords() {
      return this.currentWords;
    }
  }]);

  return WordCounter;
}();

var cutter = new WordCounter('', 0);

var input = document.querySelector('.input');
var textArea = document.querySelector('.textarea');
var limitInfo = document.querySelector('.counter');

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
  setLimitInfo();
}

textArea.addEventListener('input', textAreaInput);

function textAreaInput(evt) {
  cutter.setWords(evt.target.value);
  cutter.countWords();
  evt.target.value = cutter.getCuttedWords();
  setLimitInfo();
}

textArea.addEventListener('keypress', onlyLetters);

function onlyLetters(evt) {
  if (evt.which > 64 && evt.which < 91 || evt.which > 96 && evt.which < 123 || evt.which == 8) {
    return;
  }
  if (evt.which === 32) {
    return;
  } else {
    evt.preventDefault();
  }
}

function setLimitInfo() {
  limitInfo.textContent = (cutter.getCurrentWords() ? cutter.getCurrentWords() : '0') + ' / ' + (cutter.getLimit() ? cutter.getLimit() : '0');
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