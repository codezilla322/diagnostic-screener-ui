import React, { useEffect } from "react";
import { useScreener } from "../../context/ScreenerContext";
import Card from "../ui/Card";
import Button from "../ui/Button";

const ResultsView: React.FC = () => {
  const { screener, answers, submitAssessment, resetAssessment } =
    useScreener();

  // Submit answers when results view is shown
  useEffect(() => {
    submitAssessment().catch((error) => {
      console.error("Failed to submit assessment:", error);
    });
  }, [submitAssessment]);

  if (!screener) return null;

  return (
    <Card>
      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold mb-2 text-green-600">
          Assessment Complete
        </h2>
        <p className="text-gray-600">
          Thank you for completing the {screener.full_name}.
        </p>
      </div>

      <div className="bg-green-50 p-4 rounded-lg border border-green-200 mb-6">
        <p className="text-green-800">
          Your responses have been recorded. A healthcare professional will
          review your results.
        </p>
      </div>

      <div className="border-t pt-6 mt-6">
        <h3 className="text-lg font-medium mb-4">Response Summary</h3>
        <div className="bg-gray-50 p-4 rounded-lg overflow-x-auto">
          <pre className="text-sm">{JSON.stringify(answers, null, 2)}</pre>
        </div>
      </div>

      <div className="mt-8 text-center">
        <Button onClick={resetAssessment}>Start Over</Button>
      </div>
    </Card>
  );
};

export default ResultsView;
