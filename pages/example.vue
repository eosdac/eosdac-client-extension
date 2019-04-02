<template>
  <q-page class="q-pa-md">
    <div v-if="getAccountName">Welcome {{ getAccountName }}</div>
    <div v-else>Please log in</div>
    <div>{{ getExample }}</div>
  </q-page>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "test",
  computed: {
    ...mapGetters({
      getAccountName: "user/getAccountName",
      getExample: "example/getExample"
    })
  }
};
</script>

<style></style>
