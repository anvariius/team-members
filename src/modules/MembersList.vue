<script setup lang="ts">
import {
  MembersGrid,
  MembersTable,
  IntersectionBlock,
  ShowError,
} from "@/components";
import type { MemberSkill, TeamMember, ViewTypes } from "src/pages/members";
import { computed, ref, watch } from "vue";

const { members } = defineProps<{
  members: TeamMember[];
  viewType: ViewTypes;
}>();

defineEmits<{
  (e: "setActiveMember", value: TeamMember): void;
  (e: "selectTag", value: MemberSkill): void;
}>();

const appendingNum = 30;
const membersNum = ref<number>(appendingNum); //initial count of members to show in the page

const membersToShow = computed(() => {
  return members.slice(0, membersNum.value); //slicing with current count of members
});

watch(
  () => members,
  () => {
    membersNum.value = appendingNum;
    window.scrollTo(0, 0);
    //if we get updated members, reset members to show and scroll to top for seeing new items
  },
  { deep: false },
);
</script>

<template>
  <!-- keeping alive grid and list views to avoid re-render when switching view type -->
  <KeepAlive>
    <component
      v-show="members.length"
      :is="viewType === 'Grid' ? MembersGrid : MembersTable"
      :members="membersToShow"
      @select-member="(member: TeamMember) => $emit('setActiveMember', member)"
      @select-tag="(tag: MemberSkill) => $emit('selectTag', tag)"
    />
  </KeepAlive>

  <ShowError v-show="!members.length">Members not found</ShowError>

  <!-- if intersecting end of page, adding new members to view list -->
  <IntersectionBlock
    v-if="
      members.length >= membersNum // render only if showed not all members
    "
    @intersection="membersNum += appendingNum"
  />
</template>
