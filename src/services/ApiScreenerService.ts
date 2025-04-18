import { IScreenerService } from "./IScreenerService";
import { Screener, AnswerResponse } from "../types/types";

// API implementation (idealy this would connect to an api endpoint on the backend)
export class ApiScreenerService implements IScreenerService {
  private apiUrl: string;

  constructor(apiUrl: string = "/api") {
    this.apiUrl = apiUrl;
  }

  async getScreener(): Promise<Screener> {
    try {
      const response = await fetch(`${this.apiUrl}/screeners/bpds`);
      if (!response.ok) {
        throw new Error("Failed to fetch screener");
      }
      return await response.json();
    } catch (error) {
      console.error("Error fetching screener:", error);
      throw error;
    }
  }

  async submitAnswers(answers: AnswerResponse[]): Promise<void> {
    try {
      const response = await fetch(`${this.apiUrl}/screeners/submit`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ answers }),
      });

      if (!response.ok) {
        throw new Error("Failed to submit answers");
      }
    } catch (error) {
      console.error("Error submitting answers:", error);
      throw error;
    }
  }
}
