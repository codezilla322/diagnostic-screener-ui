import React, { useEffect, useState } from "react";
import { Question, Answer } from "../../types/types";
import Button from "../ui/Button";

interface QuestionViewProps {
  question: Question;
  answerOptions: Answer[];
  onAnswer: (questionId: string, answerValue: number) => void;
}

const QuestionView: React.FC<QuestionViewProps> = ({
  question,
  answerOptions,
  onAnswer,
}) => {
  // Track the selected answer locally
  const [selectedAnswerValue, setSelectedAnswerValue] = useState<number | null>(
    null
  );

  // Reset the selected answer when the question changes
  useEffect(() => {
    setSelectedAnswerValue(null);
  }, [question.question_id]);

  const handleAnswerClick = (questionId: string, answerValue: number) => {
    // Set the selected value for visual feedback
    setSelectedAnswerValue(answerValue);

    // Small delay before advancing to next question to allow for visual feedback
    setTimeout(() => {
      onAnswer(questionId, answerValue);
    }, 300);
  };
  return (
    <div className="animate-fadeIn">
      <h4 className="text-lg font-medium mb-6 text-gray-800">
        {question.title}
      </h4>

      <div className="grid gap-3">
        {answerOptions.map((answer) => {
          // Determine if this answer option is selected
          const isSelected = selectedAnswerValue === answer.value;

          return (
            <Button
              key={answer.value}
              variant={isSelected ? "primary" : "outline"}
              fullWidth
              className={`text-left flex items-center px-4 py-3 transition-colors duration-200 ${
                isSelected ? "border-blue-600" : ""
              }`}
              onClick={() =>
                handleAnswerClick(question.question_id, answer.value)
              }
            >
              {answer.title}
            </Button>
          );
        })}
      </div>
    </div>
  );
};

export default QuestionView;
