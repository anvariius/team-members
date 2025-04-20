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
  <div class="text-gray-400" :class="styles[size]">
    <slot></slot>
  </div>
</template>
