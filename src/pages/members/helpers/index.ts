import type { TeamMember } from "../types";
import { includesQuery } from "../../../helpers";

export const searchInMember = (member: TeamMember, query: string) => {
  if (query.trim() === "") return true;
  if (member.name && includesQuery(member.name, query)) return true; //search for matches in the members name

  if (member.skills) {
    for (const skill of member.skills) {
      if (includesQuery(skill, query)) return true; //search for matches in the members skills
    }
  }

  return false;
};
