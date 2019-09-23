<template>
  <div>
    <q-item
      @click.native="openURL('https://discord.io/eosdac')"
      class="cursor-pointer"
    >
      <q-item-side :icon="$configFile.icon.support" color="text2" />
      <q-item-main :label="$t('menu.support')" class="text-text1" />
      <q-item-side right icon="link" color="text2" />
    </q-item>

    <q-item to="/credits">
      <q-item-side :icon="$configFile.icon.credits" color="text2" />
      <q-item-main :label="$t('menu.credits')" class="text-text1" />
    </q-item>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { openURL } from "quasar";

export default {
  name: "menuExtension",
  data() {
    return {};
  },
  methods: {
    openURL
  },
  computed: {
    ...mapGetters({
      getSettingByName: "user/getSettingByName"
    })
  }
};
</script>

<style></style>
