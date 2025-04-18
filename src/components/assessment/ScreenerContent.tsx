import React from "react";
import { useScreener } from "../../context/ScreenerContext";
import QuestionView from "./QuestionView";
import ResultsView from "./ResultsView";
import Card from "../ui/Card";
import ScreenerHeader from "./ScreenerHeader";

const ScreenerContent: React.FC = () => {
  const { screener, currentQuestionIndex, completed, answerQuestion } =
    useScreener();

  if (!screener) return null;

  if (completed) {
    return <ResultsView />;
  }

  const section = screener.content.sections[0];
  const currentQuestion = section.questions[currentQuestionIndex];

  return (
    <Card>
      <ScreenerHeader />

      <div className="mb-8">
        <h3 className="text-lg font-medium mb-4 text-gray-700">
          {section.title}
        </h3>
      </div>

      <QuestionView
        question={currentQuestion}
        answerOptions={section.answers}
        onAnswer={answerQuestion}
      />
    </Card>
  );
};

export default ScreenerContent;
