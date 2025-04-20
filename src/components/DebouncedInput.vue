<script setup lang="ts">
import { Input } from "../ui";
import { ref } from "vue";
const { time = 500 } = defineProps<{
  modelValue: string;
  placeholder?: string;
  time?: number;
}>();
const emit = defineEmits<{
  (e: "update:modelValue", value: string): void;
}>();

const timer = ref<ReturnType<typeof setTimeout> | null>(null);

const handleInputUpdate = (value: string) => {
  if (timer.value) {
    clearTimeout(timer.value);
  }
  timer.value = setTimeout(() => {
    emit("update:modelValue", value);
  }, time);
};
</script>

<template>
  <Input
    :model-value="modelValue"
    @update:model-value="handleInputUpdate($event)"
    :placeholder="placeholder"
  />
</template>
