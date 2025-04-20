<script setup lang="ts">
import { ref } from "vue";

type PropType = "md" | "lg";
const { size = "md" } = defineProps<{ size?: PropType }>();

const styles = ref<Record<PropType, string>>({
  md: "text-lg",
  lg: "text-2xl",
});
</script>
<template>
  <div class="font-bold" :class="styles[size]">
    <slot></slot>
  </div>
</template>
