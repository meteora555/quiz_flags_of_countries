import './index.scss';
import React from 'react';

const questions = [
  {
    title: 'Флаг какой страны,изображён на фото? Начнем с лёгкого...',
    variants: ['Россия ', 'Румыния', 'Дания'],
    correct: 0,
    url: 'https://res.cloudinary.com/djd1jqzqx/image/upload/v1661458484/quiz_country/rus_l2khoo.png',
  },
  {
    title: 'Флаг какой страны,изображён на фото? Чуть посложнее...',
    variants: ['Индия', 'Англия', 'Без понятия'],
    correct: 1,
    url: 'https://res.cloudinary.com/djd1jqzqx/image/upload/v1661458483/quiz_country/eu_bmk279.png',
  },
  {
    title: 'Флаг какой страны,изображён на фото? Еще посложнее...',
    variants: ['Шотландия', 'Афганистан', 'США'],
    correct: 2,
    url: 'https://res.cloudinary.com/djd1jqzqx/image/upload/v1661458484/quiz_country/usa_uajng5.png',
  },
  {
    title: ' Еще каплю посложнее...',
    variants: ['Чехия', 'Швеция', 'Германия'],
    correct: 2,
    url: 'https://res.cloudinary.com/djd1jqzqx/image/upload/v1661458483/quiz_country/germany_gwkybu.png',
  },
  {
    title: 'Набираем темп...',
    variants: ['Испания', 'Португалия', 'Греция'],
    correct: 0,
    url: 'https://res.cloudinary.com/djd1jqzqx/image/upload/v1661458484/quiz_country/spain_s5znsk.png',
  },
  {
    title: 'Теперь чуть полегче...',
    variants: ['Пакистан', 'Вьетнам', 'Япония'],
    correct: 2,
    url: 'https://res.cloudinary.com/djd1jqzqx/image/upload/v1661458483/quiz_country/japan_xlyqtl.png',
  },
  {
    title: 'Давай чуть усложним...',
    variants: ['Россия', 'Норвегия', 'Финляндия'],
    correct: 1,
    url: 'https://res.cloudinary.com/djd1jqzqx/image/upload/v1661458484/quiz_country/Norway_mtccke.png',
  },
  {
    title: 'Продолжаем...',
    variants: ['Словакия', 'Агрентина', 'Колумбия'],
    correct: 2,
    url: 'https://res.cloudinary.com/djd1jqzqx/image/upload/v1661458483/quiz_country/columbia_oxxtgn.png',
  },
  {
    title: 'Осталось чуть чуть...',
    variants: ['Англия', 'Португалия', 'Чехия'],
    correct: 2,
    url: 'https://res.cloudinary.com/djd1jqzqx/image/upload/v1661458483/quiz_country/che_kzqv1f.png',
  },
  {
    title: 'Последний вопрос...',
    variants: ['Австралия', 'Индия', 'Япония'],
    correct: 1,
    url: 'https://res.cloudinary.com/djd1jqzqx/image/upload/v1661458483/quiz_country/india_rjxnaj.png',
  },
];

function Result({ correct }) {
  return (
    <div className="result">
      <img src="https://cdn-icons-png.flaticon.com/512/2278/2278992.png" alt="img" />
      <h2>
        Вы отгадали {correct} ответа из {questions.length}
      </h2>
      <a href="/">
        <button>Попробовать снова</button>
      </a>
    </div>
  );
}

function Game({ question, onClickVariant, step }) {
  const percentage = Math.round((step / questions.length) * 100);

  return (
    <>
      <div className="progress">
        <div style={{ width: `${percentage}%` }} className="progress__inner"></div>
      </div>
      <h1>{question.title}</h1>
      <div className="flag">
        <img className="flag__img" src={question.url} alt="flag" />
      </div>
      <ul>
        {question.variants.map((text, index) => (
          <li onClick={() => onClickVariant(index)} key={text}>
            {text}
          </li>
        ))}
      </ul>
    </>
  );
}

function App() {
  const [step, setStep] = React.useState(0);
  const [correct, setCorrect] = React.useState(0);
  const question = questions[step];

  const onClickVariant = (index) => {
    setStep(step + 1);

    if (index === question.correct) {
      setCorrect(correct + 1);
    }
  };

  return (
    <div className="App">
      {step != questions.length ? (
        <Game question={question} onClickVariant={onClickVariant} step={step} />
      ) : (
        <Result correct={correct} />
      )}
    </div>
  );
}

export default App;
