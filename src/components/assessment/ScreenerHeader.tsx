import React from "react";
import { useScreener } from "../../context/ScreenerContext";
import ProgressBar from "../ui/ProgressBar";

const ScreenerHeader: React.FC = () => {
  const { screener, currentQuestionIndex, completed } = useScreener();

  if (!screener || completed) return null;

  const totalQuestions = screener.content.sections[0].questions.length;
  const progress = (currentQuestionIndex / totalQuestions) * 100;

  return (
    <div className="mb-6">
      <h2 className="text-xl font-medium mb-2 text-gray-800">
        {screener.content.display_name}
      </h2>
      <ProgressBar progress={progress} />
      <p className="text-sm text-gray-500 mt-2">
        Question {currentQuestionIndex + 1} out of {totalQuestions}
      </p>
    </div>
  );
};

export default ScreenerHeader;
