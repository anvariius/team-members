import { describe, it, expect, beforeEach, vi } from "vitest";
import { setActivePinia, createPinia } from "pinia";
import { useMembersStore } from "../store";
import type { TeamMember } from "../types";

vi.mock("@/pages/members/helpers/search", async () => {
  return {
    searchInMember: (member: TeamMember, query: string) =>
      member.name?.toLowerCase().includes(query.toLowerCase()),
  };
});

describe("membersStore", () => {
  beforeEach(() => {
    setActivePinia(createPinia());
  });

  const mockMembers: TeamMember[] = [
    { id: 1, name: "Alice", department: "Design", skills: [] },
    { id: 2, name: "Bob", department: "Engineering", skills: [] },
    { id: 3, name: "Charlie", department: "Design", skills: [] },
  ];

  it("sets members correctly", () => {
    const store = useMembersStore();
    store.setMembers(mockMembers);
    expect(store.members).toEqual(mockMembers);
  });

  it("generates unique departments with 'all' included", () => {
    const store = useMembersStore();
    store.setMembers(mockMembers);
    expect(store.getDepartments).toEqual(["all", "Design", "Engineering"]);
  });

  it("filters members by department and query", () => {
    const store = useMembersStore();
    store.setMembers(mockMembers);
    store.setActiveDepartment("Design");
    store.setSearchQuery("alice");

    expect(store.filteredMembers).toEqual([
      { id: 1, name: "Alice", department: "Design", skills: [] },
    ]);
  });

  it("switches view type and persists to localStorage", () => {
    const store = useMembersStore();
    const initialView = store.viewType;

    store.switchViewType();
    expect(store.viewType).not.toBe(initialView);
    expect(localStorage.getItem("viewType")).toBe(store.viewType);
  });

  it("sets active department", () => {
    const store = useMembersStore();
    store.setActiveDepartment("QA");
    expect(store.activeDepartment).toBe("QA");
  });

  it("sets search query", () => {
    const store = useMembersStore();
    store.setSearchQuery("test");
    expect(store.searchQuery).toBe("test");
  });

  it("sets active member", () => {
    const store = useMembersStore();
    const member = mockMembers[0];
    store.setActiveMember(member);
    expect(store.activeMember).toStrictEqual(member);
  });
});
