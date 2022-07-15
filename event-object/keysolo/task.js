class Game {
  constructor(container) {
    this.container = container;
    this.wordElement = container.querySelector('.word');
    this.winsElement = container.querySelector('.status__wins');
    this.lossElement = container.querySelector('.status__loss');
   // this.word = this.renderWord(word)
    //this.timesElement = container.querySelector('.status__times');

    this.reset();
    
    this.registerEvents();
    //this.timesElementA();
}
  
  reset() {
    this.setNewWord();
    this.winsElement.textContent = 0;
    this.lossElement.textContent = 0;
    //this.timesElement.textContent = 5;
   // times(this.wordElement.textContent);
  }

  
  registerEvents() {

document.addEventListener("keyup", (e) => {
  
  let stritSymbol = e.key;

  let currentKey = e.key.charCodeAt();
  let currentSymbol = document.querySelector('.symbol_current');
  let currentNum = currentSymbol.innerHTML.charCodeAt();
  console.log(currentKey, currentSymbol);
  if(currentKey == currentNum) {
    
    this.success();
    currentSymbol.classList.remove('symbol_current'); 
  } else {
  currentSymbol.classList.add('word_incorrect');
  this.fail();
}

});
    
  }

  success() {
    this.currentSymbol.classList.add('symbol_correct');
    this.currentSymbol = this.currentSymbol.nextElementSibling;
    
    if (this.currentSymbol !== null) {
      this.currentSymbol.classList.add('symbol_current');
      return;
    }

    if (++this.winsElement.textContent === 10) {
      alert('Победа!');
      this.reset();
    }
    this.setNewWord();
  }

  fail() {
    if (++this.lossElement.textContent === 5) {
      alert('Вы проиграли!');
      this.reset();
    }
    this.setNewWord();
  }

  setNewWord() {
    //clearInterval(times())
    const word = this.getWord();

    this.renderWord(word); 
    times(this.wordElement.textContent);
  }

  getWord() {
    const words = [
        'bob',
        'awesome',
        'netology',
        'hello',
        'kitty',
        'rock',
        'youtube',
        'popcorn',
        'cinema',
        'love',
        'javascript'
      ],
      index = Math.floor(Math.random() * words.length);

    return words[index];
  }

  renderWord(word) {
    const html = [...word]
      .map(
        (s, i) =>
          `<span class="symbol ${i === 0 ? 'symbol_current': ''}">${s}</span>`
      )
      .join('');
    this.wordElement.innerHTML = html;

    this.currentSymbol = this.wordElement.querySelector('.symbol_current');
    
  }
}

let gaming = new Game(document.getElementById('game'))

function times(word) {
  let timeNum = document.getElementsByClassName('word');
    let timeContent = document.getElementsByClassName('status__times');
    timeContent[0].textContent = word.length * 5;
   // timeContent[0].textContent = 4;
  let b = setInterval(() => {
    timeContent[0].textContent -= 1;
    if (timeContent[0].textContent < 0) {
      clearInterval(b);
      alert('Вы проиграли!');
      gaming.reset();
    }
    if (timeNum[0].textContent != word) {
      clearInterval(b);
    }
  },1000)

  
}