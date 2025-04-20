<script setup lang="ts">
import { MembersPage } from "./pages/members";
import { Loader, ShowError } from "./components";
import { onErrorCaptured, ref } from "vue";

const error = ref<Error | null>(null);

// Catching errors from child components
onErrorCaptured((e, instance, info) => {
  console.log(e, instance, info);
  error.value = e;
});
</script>
<template>
  <!--if error caught, show error block-->
  <ShowError v-if="error !== null">Error: {{ error }}</ShowError>
  <!--else show loader while waiting data, then render members page-->
  <Suspense v-else>
    <MembersPage />
    <template #fallback>
      <Loader />
    </template>
  </Suspense>
</template>
