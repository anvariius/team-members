import { defineStore } from "pinia";
import type { TeamMember, ViewTypes } from "../types";
import { searchInMember } from "../helpers";

export const useMembersStore = defineStore("membersStore", {
  state: () => ({
    members: [] as TeamMember[],
    activeMember: null as TeamMember | null,
    viewType:
      (localStorage.getItem("viewType") as ViewTypes) ?? ("Grid" as ViewTypes), //grid or list view type, if exist getting from localStorage
    activeDepartment: "all" as string, //selected department for filters
    searchQuery: "" as string, //current search query for filters
  }),
  getters: {
    getDepartments(state): string[] {
      const departmentsSet: Set<string> = new Set(); //using set to collect unique departments from members
      departmentsSet.add("all");
      state.members.forEach((member) => {
        if (!member.department) return;
        departmentsSet.add(member.department);
      });
      return [...departmentsSet]; //convert set to array
    },
    filteredMembers(state): TeamMember[] {
      return state.members.filter((member) => {
        if (
          member.department !== state.activeDepartment &&
          state.activeDepartment !== "all"
        ) {
          // if active dep is selected and members dep is different, member doesnt fit
          return false;
        }
        //otherwise member fit, then searching matches in name and skills from search query
        return searchInMember(member, state.searchQuery);
      });
    },
  },
  actions: {
    setMembers(members: TeamMember[]) {
      this.members = [...members];
    },
    setActiveDepartment(dep: string) {
      this.activeDepartment = dep;
    },
    switchViewType() {
      this.viewType = this.viewType === "Grid" ? "List" : "Grid";
      localStorage.setItem("viewType", this.viewType);
    },
    setSearchQuery(query: string) {
      this.searchQuery = query;
    },
    setActiveMember(member: TeamMember | null) {
      this.activeMember = member;
    },
  },
});
