<script setup lang="ts">
import { Header, Content } from "@/components";
import { MembersList, MembersFilter, MembersModal } from "@/modules";
import { useMembersStore } from "../store";
import { fetchTeamMembers } from "../api";
import type { TeamMember } from "../types";

const store = useMembersStore();

//get data from api and push to store
await fetchTeamMembers().then((members) => store.setMembers(members));
</script>

<template>
  <Header>Team Member Directory</Header>
  <Content>
    <MembersFilter
      class="sticky top-0 z-10"
      :view-type="store.viewType"
      :departments="store.getDepartments"
      :active-department="store.activeDepartment"
      :search-query="store.searchQuery"
      @switch-view-type="store.switchViewType()"
      @set-department="(dep) => store.setActiveDepartment(dep)"
      @update-search-query="(q) => store.setSearchQuery(q)"
    />
    <MembersList
      :members="store.filteredMembers"
      :view-type="store.viewType"
      @set-active-member="(member: TeamMember) => store.setActiveMember(member)"
      @select-tag="(tag) => store.setSearchQuery(tag)"
    />
    <MembersModal
      :member="store.activeMember"
      @close="store.setActiveMember(null)"
      @select-tag="
        (tag) => {
          store.setSearchQuery(tag);
          store.setActiveMember(null);
        }
      "
    />
  </Content>
</template>
