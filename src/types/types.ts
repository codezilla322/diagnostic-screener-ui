export interface Answer {
  title: string;
  value: number;
}

export interface Question {
  question_id: string;
  title: string;
}

export interface Section {
  type: string;
  title: string;
  answers: Answer[];
  questions: Question[];
}

export interface ScreenerContent {
  sections: Section[];
  display_name: string;
}

export interface Screener {
  id: string;
  name: string;
  disorder: string;
  content: ScreenerContent;
  full_name: string;
}

export interface AnswerResponse {
  question_id: string;
  answer_value: number;
}
