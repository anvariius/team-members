<script setup lang="ts">
import { ref } from "vue";

type Size = "lg" | "md" | "sm";
const { size = "md" } = defineProps<{
  image?: string | null;
  alt?: string | null;
  size?: Size;
}>();

const styles = ref<Record<Size, string>>({
  lg: "w-30 h-30",
  md: "w-20 h-20",
  sm: "w-10 h-10",
});
</script>

<template>
  <img
    v-if="image"
    :src="image"
    :alt="alt ?? ''"
    class="rounded-full"
    :class="styles[size]"
  />
  <div v-else class="rounded-full bg-gray-300" :class="styles[size]"></div>
</template>
