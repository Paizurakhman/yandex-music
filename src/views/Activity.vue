<template>
  <v-container-fluid>
    <div class="mx-8 mt-5" style="margin-bottom: 200px;">
      <h1 style="font-size:42px;" class="mt-15 font-weight-bold">Радио</h1>
      <v-content style="padding:0">
        <GenreTab/>
      </v-content>

      <div style="width: 65%">
        <v-row >
          <v-col v-for="n in items" :key="n.icon" cols="10" md="4">
            <v-sheet class="pa-1 hover">
              <v-hover>
                <template v-slot:default="{ hover }">
              <v-sheet height="50" width="100%">

                    <v-avatar v-bind:color="n.color" size="50">
                      <v-img max-height="30" max-width="30" :src="getImgUrl(n.icon)" v-bind:alt="n.icon"></v-img>
                      <v-fade-transition>
                        <v-overlay v-if="hover" absolute color="#000000">
                          <v-btn icon color="yellow darken-2">
                            <v-icon style="font-size:50px">mdi-play-circle</v-icon>
                          </v-btn>
                        </v-overlay>
                      </v-fade-transition>
                    </v-avatar>

                    <span class="mx-3">{{n.text}}</span>

                    <v-btn icon >
                      <v-icon >mdi-chevron-down</v-icon>
                    </v-btn>
              </v-sheet>
            </template>
          </v-hover>
            </v-sheet>
          </v-col>
        </v-row>
      </div>
    </div>
  </v-container-fluid>
</template>

<script>
import GenreTab from '../components/GenreTab'
export default {
  components: {
    GenreTab
  },
  data: () => ({
    overlay: false,
    items: [
      {color: "green darken-3", icon: "running", text: "Бег"},
      {color: "light-blue darken-3", icon: "dumbbel", text: "Тренировка"},
      {color: "deep-orange lighten-2", icon: "wheel", text: "За рулём"},
      {color: "red lighten-1", icon: "balloons", text: "Вечеринка"},
      {color: "green darken-3", icon: "hearts", text: "Свидание"},
      {color: "light-blue darken-3", icon: "heart", text: "Для влюблённых"},
      {color: "deep-orange lighten-2", icon: "galaxy", text: "Заснуть"},
      {color: "red lighten-1", icon: "alarm", text: "Проснуться"},
      {color: "red lighten-1", icon: "musical", text: "Фоновая музыка"},
    ],
  }),
  methods: {
    getImgUrl(pet) {
    var images = require.context('../assets/', false, /\.png$/)
    return images('./' + pet + ".png")
    }
  }
}
</script>

<style>
  .hover{
    margin: 2px;
  }
  .hover:hover{
    border: 2px solid yellow;
    margin: 0px;
  }

</style>
