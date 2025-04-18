import React from "react";
import { ServiceProvider } from "./context/ServiceContext";
import { ScreenerProvider } from "./context/ScreenerContext";
import AssessmentPage from "./pages/AssessmentPage";

const App: React.FC = () => {
  return (
    <ServiceProvider>
      <ScreenerProvider>
        <AssessmentPage />
      </ScreenerProvider>
    </ServiceProvider>
  );
};

export default App;
