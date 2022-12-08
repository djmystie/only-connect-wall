import QuestionChoice from "./QuestionChoice";
import { useState, useEffect } from "react";
import QuestionBlock from "./QuestionBlock";
import { roundOne } from "./questions";

export default function RoundOne() {
  const [question, setQuestion] = useState(false);
  const [usedQuestions, setUsedQuestions] = useState([]);

  useEffect(() => {
    if (question) {
      setUsedQuestions([...usedQuestions, question]);
    }
  }, [question]);

  return (
    <div className="wall">
      {!question ? (
        <QuestionChoice
          setQuestion={setQuestion}
          usedQuestions={usedQuestions}
        />
      ) : (
        <QuestionBlock
          question={question}
          setQuestion={setQuestion}
          questions={roundOne}
        />
      )}
    </div>
  );
}
