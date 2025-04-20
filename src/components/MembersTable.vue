<script setup lang="ts">
import { Avatar, TextBold, TextSmall, TextMedium } from "../ui";
import type { MemberSkill, TeamMember } from "../pages/members";
import { TagsRow } from "../components";

defineProps<{ members: TeamMember[] }>();

defineEmits<{
  (e: "selectMember", value: TeamMember): void;
  (e: "selectTag", value: MemberSkill): void;
}>();
</script>

<template>
  <div class="border border-gray-300 rounded-lg overflow-y-hidden">
    <table class="members-table table-auto w-full">
      <thead class="bg-gray-100 h-12">
        <tr class="font-bold text-gray-500 border-b border-gray-300">
          <td></td>
          <td>Name</td>
          <td>Position</td>
          <td>Department</td>
          <td>Skills</td>
        </tr>
      </thead>
      <tbody class="bg-white">
        <tr
          v-for="member in members"
          :key="member.id as number"
          class="border-b border-gray-300 last-of-type:border-none transition cursor-pointer hover:opacity-70"
          @click="$emit('selectMember', member)"
        >
          <td class="py-3">
            <Avatar :image="member.avatar" :alt="member.name" class="ml-5" />
          </td>
          <td>
            <TextBold>{{ member.name }}</TextBold>
            <a :href="`mailto: ${member.email}`">
              <TextSmall>{{ member.email }}</TextSmall>
            </a>
          </td>
          <td>
            <TextMedium>{{ member.position }}</TextMedium>
          </td>
          <td>
            <TextMedium>{{ member.department }}</TextMedium>
          </td>
          <td class="max-w-50">
            <template v-if="member.skills">
              <TagsRow
                :tags="member.skills"
                class="mr-5"
                @select="(tag: MemberSkill) => $emit('selectTag', tag)"
              />
            </template>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style scoped>
@media (max-width: 900px) {
  .members-table td {
    min-width: 120px;
    padding-right: 10px;
  }
  .members-table td:last-child {
    min-width: 250px;
  }
}
</style>
