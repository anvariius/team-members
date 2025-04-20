import axios, { AxiosError } from "axios";
import type { TeamMember } from "../types";

const API_URL = import.meta.env.VITE_API_URL as string;

export const fetchTeamMembers = (): Promise<TeamMember[]> => {
  return new Promise(async (resolve, reject) => {
    if (!API_URL) {
      reject("VITE_API_URL is missing");
    } // if VITE_API_URL is missing in .env throw error
    try {
      const response = await axios.get(API_URL);
      const { teamMembers } = response.data;
      teamMembers
        ? resolve(teamMembers)
        : reject("Team members param is not defined"); //check teamMembers param
    } catch (e) {
      const error = e as AxiosError;
      reject(error.message);
    }
  });
};
