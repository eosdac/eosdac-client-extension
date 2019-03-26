<template>
  <q-item to="/example" >
    <q-item-side icon="check" color="text2"/>
    <q-item-main label="Example Page" class="text-text1"/>
  </q-item>
</template>

<script>
import {mapGetters} from 'vuex';
export default {
  name: 'menuExtension',
  data () {
    return {}
  },
  computed:{
    ...mapGetters({
      getSettingByName: 'user/getSettingByName'
    })
  },
}
</script>

<style>
</style>