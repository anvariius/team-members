<script setup lang="ts">
import { ref } from "vue";
type PropType = "default" | "outline";
const { type = "default" } = defineProps<{ type?: PropType }>();

const styles = ref<Record<PropType, string>>({
  default: "bg-blue-600 border-blue-600 text-white",
  outline: "bg-white border-gray-400 text-gray-600",
});
</script>

<template>
  <button
    class="p-1.5 min-w-20 rounded-lg border transition cursor-pointer hover:opacity-70"
    :class="styles[type]"
  >
    <slot></slot>
  </button>
</template>
