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
                      <v-fade-transition>
                        <v-overlay v-if="hover" absolute color="#000000">
                          <v-btn icon color="yellow darken-2">
                            <v-icon style="font-size:50px">mdi-play-circle</v-icon>
                          </v-btn>
                        </v-overlay>
                      </v-fade-transition>
                      <span class="white--text headline font-weight-thin">{{n.icon}}</span>
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
      {color: "green darken-3", icon: ")()(", text: "Вечные хиты"},
      {color: "light-blue darken-3", icon: "50", text: "1950-е"},
      {color: "deep-orange lighten-2", icon: "60", text: "1960-е"},
      {color: "red lighten-1", icon: "70", text: "1970-е"},
      {color: "green darken-3", icon: "80", text: "1980-е"},
      {color: "light-blue darken-3", icon: "90", text: "1990-е"},
      {color: "deep-orange lighten-2", icon: "00", text: "2000-е"},

    ],
  }),

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
