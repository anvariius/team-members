<script setup lang="ts">
import MemberCard from "./MemberCard.vue";
import type { MemberSkill, TeamMember } from "src/pages/members";

defineProps<{ members: TeamMember[] }>();

defineEmits<{
  (e: "selectMember", value: TeamMember): void;
  (e: "selectTag", value: MemberSkill): void;
}>();
</script>

<template>
  <div class="md:grid-cols-3 grid-cols-1 grid lg:gap-7 gap-2">
    <div class="basis-1/3" v-for="member in members" :key="member.id">
      <MemberCard
        :member="member"
        @click="$emit('selectMember', member)"
        @select-tag="(tag: MemberSkill) => $emit('selectTag', tag)"
      />
    </div>
  </div>
</template>
