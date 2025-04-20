<script setup lang="ts">
type InputType = "text" | "number" | "password" | "email";
const { type = "text" } = defineProps<{
  type?: InputType;
  placeholder?: string;
}>();
const model = defineModel({ default: "" });
</script>

<template>
  <input
    :type="type as InputType"
    v-model="model"
    :placeholder="placeholder"
    class="border border-gray-400 rounded-lg px-2 py-1.5"
  />
</template>
