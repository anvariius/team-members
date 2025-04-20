<script setup lang="ts">
import { Tag } from "../ui";
const { size = "md" as "md" } = defineProps<{
  size?: "md" | "lg";
  tags: string[];
}>();

defineEmits<{
  (e: "select", value: string): void;
}>();
</script>

<template>
  <div class="flex gap-2 flex-wrap">
    <Tag
      v-for="(tag, key) in tags"
      :key="`${tag}-${key}`"
      :size="size"
      @click.stop="$emit('select', tag)"
    >
      {{ tag }}
    </Tag>
  </div>
</template>
