<script setup lang="ts">
import { ref } from "vue";

type PropType = "md" | "lg";
const { size = "md" } = defineProps<{ size?: PropType }>();

const styles = ref<Record<PropType, string>>({
  md: "text-md",
  lg: "text-lg",
});
</script>
<template>
  <div class="text-gray-600" :class="styles[size]">
    <slot></slot>
  </div>
</template>
