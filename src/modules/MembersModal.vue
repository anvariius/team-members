<script setup lang="ts">
import { Modal, TagsRow } from "@/components";
import type { TeamMember } from "src/pages/members";
import { Avatar, TextBold, TextMedium, TextSmall, Divider } from "@/ui";

defineProps<{ member: TeamMember | null }>();

defineEmits<{
  (e: "close"): void;
  (e: "selectTag", tag: string): void;
}>();
</script>

<template>
  <Modal v-if="member" @close="$emit('close')">
    <template #header>Team Member Details</template>
    <div class="flex items-center md:gap-10 gap-4">
      <Avatar :image="member.avatar" :alt="member.name" size="lg" />
      <div class="flex flex-col gap-1">
        <TextBold size="lg">{{ member.name }}</TextBold>
        <TextMedium size="lg">{{ member.position }}</TextMedium>
        <TextSmall size="lg">{{ member.department }}</TextSmall>
      </div>
    </div>
    <div class="flex flex-col gap-5 mt-5">
      <TextMedium v-if="member.email" size="lg">
        <span class="font-bold">Email:</span> {{ member.email }}
      </TextMedium>
      <div v-if="member.bio">
        <TextBold>Bio</TextBold>
        <Divider />
        <TextMedium>{{ member.bio }}</TextMedium>
      </div>
      <div v-if="member.skills?.length">
        <TextBold>Skills</TextBold>
        <Divider />
        <TagsRow
          :tags="member.skills"
          size="lg"
          @select="(tag) => $emit('selectTag', tag)"
        />
      </div>
    </div>
  </Modal>
</template>
