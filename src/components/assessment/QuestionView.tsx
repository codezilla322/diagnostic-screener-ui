import React from "react";
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
  return (
    <div className="animate-fadeIn">
      <h4 className="text-lg font-medium mb-6 text-gray-800">
        {question.title}
      </h4>

      <div className="grid gap-3">
        {answerOptions.map((answer) => (
          <Button
            key={answer.value}
            variant="outline"
            fullWidth
            className="text-left flex items-center px-4 py-3"
            onClick={() => onAnswer(question.question_id, answer.value)}
          >
            {answer.title}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default QuestionView;
