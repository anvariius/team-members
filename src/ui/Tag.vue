<script setup lang="ts">
import { ref } from "vue";

type PropType = "md" | "lg";
const { size = "md" } = defineProps<{ size?: PropType }>();

const styles = ref<Record<PropType, string>>({
  md: "text-sm",
  lg: "text-md",
});
</script>
<template>
  <div
    class="min-w-10 px-2 py-0.5 rounded-2xl border border-blue-200 bg-blue-100 text-blue-500 transition hover:opacity-50"
    :class="styles[size]"
  >
    <slot></slot>
  </div>
</template>
