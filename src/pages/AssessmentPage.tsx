import React from "react";
import { useScreener } from "../context/ScreenerContext";
import ScreenerContent from "../components/assessment/ScreenerContent";
import Layout from "../components/layout/Layout";
import Card from "../components/ui/Card";

const AssessmentPage: React.FC = () => {
  const { loading, error } = useScreener();

  if (loading) {
    return (
      <Layout>
        <div className="flex h-64 items-center justify-center">
          <div className="text-center">
            <div className="spinner h-12 w-12 rounded-full border-4 border-blue-200 border-t-blue-600 animate-spin mx-auto"></div>
            <p className="mt-4 text-gray-700">Loading assessment...</p>
          </div>
        </div>
      </Layout>
    );
  }

  if (error) {
    return (
      <Layout>
        <Card className="text-center text-red-600 max-w-lg mx-auto">
          <p>Error: {error}</p>
          <button
            className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            onClick={() => window.location.reload()}
          >
            Retry
          </button>
        </Card>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="max-w-3xl mx-auto">
        <ScreenerContent />
      </div>
    </Layout>
  );
};

export default AssessmentPage;
