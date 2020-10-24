<template>
  <v-container-fluid>
    <div class="mx-8 mt-15" style="margin-bottom: 200px;">
      <h1 style="font-size:42px;" class="mt-15 font-weight-bold">Главное</h1>
      <v-content style="padding:0">
        <Tab/>
      </v-content>
      <h5 class=" mt-15 font-weight-bold">Новые треки, альбомы и сборники</h5>

    </div>
  </v-container-fluid>
</template>

<script>
import Tab from '../components/Tab'
export default {
  components: {
    Tab
  },
}
</script>
