<script setup lang="ts">
import TextBold from "../ui/TextBold.vue";
</script>

<template>
  <div
    class="w-screen h-screen fixed top-0 left-0 bg-black/50 flex justify-center py-40 z-50 cursor-pointer"
    @click="$emit('close')"
  >
    <div
      class="rounded-lg bg-white w-[600px] overflow-hidden cursor-default md:mx-0 mx-2"
      @click.stop
    >
      <div v-if="$slots.header" class="bg-gray-100 md:px-14 px-5 py-6">
        <TextBold size="lg"><slot name="header"></slot></TextBold>
      </div>
      <div class="md:px-14 px-5 py-4">
        <slot></slot>
      </div>
    </div>
  </div>
</template>
