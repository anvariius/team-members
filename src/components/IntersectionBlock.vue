<script setup lang="ts">
import { onMounted, useTemplateRef } from "vue";

const observerBlock = useTemplateRef<HTMLElement>("observerBlock");

const emit = defineEmits(["intersection"]);

onMounted(() => {
  const observer = new IntersectionObserver(
    () => {
      emit("intersection");
    },
    {
      threshold: 1.0,
    },
  );
  observer.observe(observerBlock.value as HTMLElement);
});
</script>

<template>
  <div class="h-0.5" ref="observerBlock"></div>
</template>
