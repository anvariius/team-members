<script setup lang="ts">
import { Avatar, TextBold, TextMedium, TextSmall } from "@/ui";
import { TagsRow } from "@/components";
import type { MemberSkill, TeamMember } from "src/pages/members";

defineProps<{ member: TeamMember }>();

defineEmits<{
  (e: "selectTag", value: MemberSkill): void;
}>();
</script>

<template>
  <div
    class="border border-gray-300 rounded-lg xl:h-52 md:h-64 h-48 lg:p-5 p-2 bg-white flex flex-col gap-5 cursor-pointer transition hover:opacity-70"
  >
    <div class="flex lg:gap-6 gap-2 items-center">
      <Avatar :image="member.avatar" :alt="member.name" />
      <div>
        <TextBold>{{ member.name }}</TextBold>
        <TextMedium>{{ member.position }}</TextMedium>
        <TextSmall>{{ member.department }}</TextSmall>
      </div>
    </div>
    <template v-if="member.skills">
      <TagsRow
        :tags="member.skills"
        @select="(tag: MemberSkill) => $emit('selectTag', tag)"
      />
    </template>
  </div>
</template>
