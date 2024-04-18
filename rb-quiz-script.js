const questions = {
  'От кога Кристиан Хорнер е в Red Bull Racing?': '2005',
  'Кой е настоящият ръководител на отбора на Red Bull Racing?': 'Кристиан Хорнер',
  'Колко шампионата при конструкторите е спечелил Red Bull Racing?': '6',
  'Къде се намира централата на Red Bull Racing?': 'Милтън Кийнс, Великобритания',
  'Свържете името на пилота': null,
  'С какъв номер започва да се състезава Макс Верстапен, когато се присъедини към Red Bull Racing?': '33',
  'От коя година е този автомобил на Red Bull Racing?': '2012',
  'Къде е роден Макс Верстапен?': 'Белгия',
  'На кого е тази каска?': 'Серхио Перес',
  'Къде е роден Серхио Перес?': 'Мексико',
  'Какво е точното време на най-бързото спиране в бокса на Red Bull Racing (досега)?': '1.82 секунди',
  'Кой пилот на Red Bull Racingг е създал "Shoey"?': 'Даниел Рикардо',
  'Къде НЕ е бил състезателният автомобил на Red Bull (все още)?': 'Дъждовната гора на Амазонка',
  'Колко поредни световни титли е спечелил Себастиан Фетел?': '4',
  'Свържете каската с името на пилота': null,
  'През коя година е първата победа на Red Bull Racing в GP?': '2009',
  'Кои бяха съотборниците в Red Bull Racing през 2012 г.?': 'Себастиан Фетел и Марк Уебър',
  'Колко шампионата за пилоти е спечелил Red Bull?': '7',
  'Кой е първият световен шампион на Red Bull?': 'Себастиан Фетел',
  'Коя е тази писта?': 'Red Bull Ring',
  'Съпоставете номера с този на водача': null,
  'Колко завоя има Red Bull Ring?': '10',
  'На колко години е Макс Верстапен при първата си победа в GP?': '18 години и 228 дни',
};

// Question title:
// document.querySelector('[class^="cs__quiz-question__title__"]').textContent

// All answers:
// document.querySelectorAll('[class^="cs__quiz-question__option__')

function formatHtmlString(str) {
  return str.replaceAll('​', '');
}

function answerEasyQuestion() {
  const question = formatHtmlString(document.querySelector('[class^="cs__quiz-question__title__"]').textContent);
  const answer = questions[question];
  console.log('question:', question);
  console.log('answer:', answer);
  if (!answer) {
    console.log('No answer for this question');
    return false;
  }

  const options = document.querySelectorAll('[class^="cs__quiz-question__option__"]');
  let correctOption = null;
  for (const option of options) {
    console.log('Check option:', option.textContent);
    if (formatHtmlString(option.textContent) === answer) {
      correctOption = option;
      break;
    }
  }
  if (!correctOption) {
    console.log("Didn't find correct option");
    return false;
  }

  // submitting
  const bottomBarBtns = document.querySelector('[class^="cs__quiz-gui-bottom-bar__bottomBar__"]').children;
  const submit = bottomBarBtns[0].shadowRoot.children[0];
  const powerUp = bottomBarBtns[1].shadowRoot.children[0];
  if (!powerUp.attributes['disabled']) {
    powerUp.click();
    console.log('Activated power up');
  }

  setTimeout(() => {
    correctOption.click();
    setTimeout(() => {
      console.log('submit btn:', submit);
      submit.click();
    }, 100);
  }, 100);

  return true;
}
answerEasyQuestion();
