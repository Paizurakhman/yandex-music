<template>

    <v-container-fluid>
      <div class="mx-8 mt-5" style="margin-bottom: 200px;">
        <h1 style="font-size:42px;" class="mt-15 font-weight-bold">Радио</h1>
        <v-content style="padding:0">
          <GenreTab/>
        </v-content>

        <v-container-fluid class="grey lighten-5">
          <v-row no-gutters class="mt-15">
            <v-col v-for="n in items" :key="n.icon" cols="8" sm="2">
              <v-hover>
                <template v-slot:default="{ hover }">
                  <v-avatar v-bind:color="n.color" size="185">
                    <v-img max-height="100" max-width="100" :src="getImgUrl(n.icon)" v-bind:alt="n.icon"></v-img>
                    <v-fade-transition>
                      <v-overlay v-if="hover" absolute color="#000000">
                        <v-btn class="mt-12 mb-5" icon color="yellow darken-2">
                          <v-icon x-large>mdi-play-circle-outline</v-icon>
                        </v-btn>
                        <p class="text-center" style="font-size: 16px">{{n.text}}</p>
                      </v-overlay>
                    </v-fade-transition>
                  </v-avatar>

                </template>
              </v-hover>

            </v-col>
          </v-row>
        </v-container-fluid>
      </div>
      </v-container-fluid>
</template>

<script>
import GenreTab from '../components/GenreTab.vue'
export default {
  components: {
    GenreTab
  },
  data: () => ({
    overlay: false,
    items: [
      {color: "green darken-3", icon: "waves", text: "Моя волна"},
      {color: "light-blue darken-3", icon: "guitar", text: "Рок"},
      {color: "deep-orange lighten-2", icon: "musical", text: "Фоновая музыка"},
      {color: "red lighten-1", icon: "lollipop", text: "Поп"},
    ],
  }),
  methods: {
    getImgUrl(pet) {
    var images = require.context('../assets/', false, /\.png$/)
    return images('./' + pet + ".png")
    }
  }

};
</script>
