import React, { useState } from 'react';

const questions = [
  {
    id: 1,
    question: 'What is the capital of France?',
    options: ['Paris', 'London', 'Berlin', 'Madrid'],
  },
  {
    id: 2,
    question: 'What is 2 + 2?',
    options: ['3', '4', '5', '6'],
  },
  {
    id: 3,
    question: 'Who is the CEO of Tesla?',
    options: ['Elon Musk', 'Bill Gates', 'Steve Jobs', 'Jeff Bezos'],
  },
  // Add more questions as needed
];

function TestPage() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({});

  const handleAnswerChange = (event, questionId) => {
    setAnswers({
      ...answers,
      [questionId]: event.target.value,
    });
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const handleSubmit = () => {
    alert('Test submitted!');
    // Implement the submit logic (e.g., API call or form submission)
  };

  return (
    <div className="test-page">
      <div className="question-container">
        <div className="question">
          <h2>{questions[currentQuestion].question}</h2>
          {questions[currentQuestion].options.map((option, index) => (
            <div key={index} className="radio-option">
              <input
                type="radio"
                id={`question${questions[currentQuestion].id}-option${index}`}
                name={`question${questions[currentQuestion].id}`}
                value={option}
                checked={answers[questions[currentQuestion].id] === option}
                onChange={(e) => handleAnswerChange(e, questions[currentQuestion].id)}
              />
              <label htmlFor={`question${questions[currentQuestion].id}-option${index}`}>{option}</label>
            </div>
          ))}
        </div>
        <div className="navigation-buttons">
          <button onClick={handlePrevious} disabled={currentQuestion === 0}>
            Previous
          </button>
          <button onClick={handleNext} disabled={currentQuestion === questions.length - 1}>
            Next
          </button>

          <button className="submit-button" onClick={handleSubmit}>Submit Test</button>
        </div>
      </div>

      {/* Question List (Grid on the right side) */}
      <div className="question-list">
        <h3>Questions</h3>
        <div className="grid-container">
          {questions.map((question) => (
            <div
              key={question.id}
              className={`grid-item ${answers[question.id] ? 'answered' : ''}`}
              onClick={() => setCurrentQuestion(question.id - 1)}
            >
              {question.id}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default TestPage;
