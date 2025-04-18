import React, { createContext, useContext, useState, useEffect } from "react";
import { Screener, AnswerResponse } from "../types/types";
import { useServices } from "./ServiceContext";

interface ScreenerContextState {
  screener: Screener | null;
  currentQuestionIndex: number;
  answers: AnswerResponse[];
  loading: boolean;
  error: string | null;
  completed: boolean;
}

interface ScreenerContextActions {
  answerQuestion: (questionId: string, answerValue: number) => void;
  submitAssessment: () => Promise<void>;
  resetAssessment: () => void;
}

type ScreenerContextType = ScreenerContextState & ScreenerContextActions;

const ScreenerContext = createContext<ScreenerContextType | undefined>(
  undefined
);

export const useScreener = () => {
  const context = useContext(ScreenerContext);
  if (!context) {
    throw new Error("useScreener must be used within a ScreenerProvider");
  }
  return context;
};

interface ScreenerProviderProps {
  children: React.ReactNode;
}

export const ScreenerProvider: React.FC<ScreenerProviderProps> = ({
  children,
}) => {
  // State
  const [state, setState] = useState<ScreenerContextState>({
    screener: null,
    currentQuestionIndex: 0,
    answers: [],
    loading: true,
    error: null,
    completed: false,
  });

  // Services
  const { screenerService } = useServices();

  // Fetch screener data on mount
  useEffect(() => {
    const fetchScreener = async () => {
      try {
        const data = await screenerService.getScreener();
        setState((prevState) => ({
          ...prevState,
          screener: data,
          loading: false,
        }));
      } catch (error) {
        setState((prevState) => ({
          ...prevState,
          error: "Failed to load screener",
          loading: false,
        }));
      }
    };

    fetchScreener();
  }, [screenerService]);

  // Actions
  const answerQuestion = (questionId: string, answerValue: number) => {
    if (!state.screener) return;

    // Save answer using Immutable Update Pattern
    const newAnswers = [...state.answers];
    const existingAnswerIndex = newAnswers.findIndex(
      (a) => a.question_id === questionId
    );

    if (existingAnswerIndex !== -1) {
      newAnswers[existingAnswerIndex] = {
        ...newAnswers[existingAnswerIndex],
        answer_value: answerValue,
      };
    } else {
      newAnswers.push({ question_id: questionId, answer_value: answerValue });
    }

    const totalQuestions = state.screener.content.sections[0].questions.length;
    const isLastQuestion = state.currentQuestionIndex === totalQuestions - 1;

    setState((prevState) => ({
      ...prevState,
      answers: newAnswers,
      currentQuestionIndex: isLastQuestion
        ? prevState.currentQuestionIndex
        : prevState.currentQuestionIndex + 1,
      completed: isLastQuestion,
    }));
  };

  const submitAssessment = async () => {
    if (!state.completed) return Promise.resolve();

    try {
      await screenerService.submitAnswers(state.answers);
      return Promise.resolve();
    } catch (error) {
      setState((prevState) => ({
        ...prevState,
        error: "Failed to submit assessment",
      }));
      return Promise.reject(error);
    }
  };

  const resetAssessment = () => {
    setState((prevState) => ({
      ...prevState,
      currentQuestionIndex: 0,
      answers: [],
      completed: false,
      error: null,
    }));
  };

  const value: ScreenerContextType = {
    ...state,
    answerQuestion,
    submitAssessment,
    resetAssessment,
  };

  return (
    <ScreenerContext.Provider value={value}>
      {children}
    </ScreenerContext.Provider>
  );
};
