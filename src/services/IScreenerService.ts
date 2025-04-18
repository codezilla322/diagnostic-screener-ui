import { Screener, AnswerResponse } from "../types/types";

export interface IScreenerService {
  getScreener(): Promise<Screener>;
  submitAnswers(answers: AnswerResponse[]): Promise<void>;
}
