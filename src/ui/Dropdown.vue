<script setup lang="ts">
import { ref } from "vue";

defineProps<{ values: string[]; active: string }>();
const emit = defineEmits<{
  (e: "select", value: string): void;
}>();
const isVisible = ref<boolean>(false);

function switchVisible() {
  isVisible.value = !isVisible.value;
}
function selectValue(value: string) {
  switchVisible();
  emit("select", value);
}
</script>

<template>
  <div class="relative">
    <div @click="switchVisible">
      <slot></slot>
    </div>

    <div
      class="absolute top-11 bg-white border border-gray-300 rounded-lg"
      :class="{ invisible: !isVisible }"
    >
      <div
        class="py-1 px-4 cursor-pointer hover:bg-gray-200"
        v-for="(value, key) in values"
        :key="value + key"
        @click="selectValue(value)"
      >
        {{ value }}
      </div>
    </div>
  </div>
</template>
