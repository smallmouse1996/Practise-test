import React, { useState } from 'react';
import DragQuestion from './DragQuestion';

const questions = [
  {
    id: 1,
    type: 'choice',
    question: 'What is the capital of France?',
    options: ['Paris', 'London', 'Berlin', 'Madrid'],
  },
  {
    id: 2,
    type: 'drag',
    question: 'Drag the correct answer for 2 + 2:',
    options: ['3', '4', '5', '6'],
  },
  {
    id: 3,
    type: 'choice',
    question: 'Who is the CEO of Tesla?',
    options: ['Elon Musk', 'Bill Gates', 'Steve Jobs', 'Jeff Bezos'],
  },
];

function Exam() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({});

  const q = questions[currentQuestion];
  const selected = answers[q.id];

  const handleAnswerChange = (e) => {
    setAnswers({ ...answers, [q.id]: e.target.value });
  };

  const handleDragAnswer = (value) => {
    setAnswers({ ...answers, [q.id]: value });
  };

  return (
    <div className="test-page" style={{ padding: '20px' }}>
      <h2>{q.question}</h2>

      {q.type === 'drag' ? (
  <DragQuestion
    question={q}
    selected={selected}
    onDrop={handleDragAnswer}
  />
) : (
  q.options.map((option, index) => (
    <div key={index}>
      <input
        type="radio"
        name={`q${q.id}`}
        value={option}
        checked={selected === option}
        onChange={handleAnswerChange}
      />
      <label>{option}</label>
    </div>
  ))
)}


      <div style={{ marginTop: '20px' }}>
        <button
          onClick={() => setCurrentQuestion((prev) => Math.max(0, prev - 1))}
          disabled={currentQuestion === 0}
        >
          Previous
        </button>
        <button
          onClick={() =>
            setCurrentQuestion((prev) =>
              Math.min(questions.length - 1, prev + 1)
            )
          }
          disabled={currentQuestion === questions.length - 1}
        >
          Next
        </button>
        <button onClick={() => alert(JSON.stringify(answers, null, 2))}>
          Submit
        </button>
      </div>
    </div>
  );
}

export default Exam;
