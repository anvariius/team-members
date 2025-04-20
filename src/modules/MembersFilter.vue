<script setup lang="ts">
import { Button, Dropdown } from "@/ui";
import type { ViewTypes } from "src/pages/members";
import { DebouncedInput } from "@/components";
defineProps<{
  viewType: ViewTypes;
  departments: string[];
  activeDepartment: string;
  searchQuery: string;
}>();

defineEmits<{
  (e: "updateSearchQuery", value: string): void;
  (e: "setDepartment", value: string): void;
  (e: "switchViewType"): void;
}>();
</script>

<template>
  <div
    class="rounded-lg border border-gray-300 md:p-5 p-1 py-3 bg-white grid grid-cols-12 gap-3"
  >
    <div class="md:col-span-4 col-span-12">
      <!-- input that delay update value to avoid extra re-renders -->
      <DebouncedInput
        class="w-full h-full"
        placeholder="Search by name or Skill..."
        :model-value="searchQuery"
        @update:model-value="$emit('updateSearchQuery', $event)"
      />
    </div>
    <div class="md:col-span-4 col-span-6">
      <Dropdown
        :values="departments"
        active="all"
        @select="$emit('setDepartment', $event)"
      >
        <Button type="outline" class="capitalize w-full md:w-auto"
          >{{ activeDepartment }} ▼
        </Button>
      </Dropdown>
    </div>
    <div class="md:col-span-2 md:col-end-13 col-span-6 flex justify-end">
      <Button
        :type="viewType === 'Grid' ? 'default' : 'outline'"
        class="capitalize w-full md:w-auto"
        @click="$emit('switchViewType')"
      >
        {{ viewType }}
      </Button>
    </div>
  </div>
</template>
