<template>
  <v-container-fluid>
    <div class="mx-8 mt-15" style="margin-bottom: 200px;">
      <h1 style="font-size:42px;" class="mt-15 font-weight-bold">Главное</h1>
      <v-content style="padding:0">
        <Tab/>
      </v-content>
      <h5 class=" mt-15 font-weight-bold">Треки, популярные на Яндекс.Музыке прямо сейчас</h5>

      <v-container-fluid class="grey lighten-5">
        <v-hover class="hover" v-for="track in tracks" :key="track.subtitle">
          <template v-slot:default="{ hover }">
        <v-row no-gutters style="width:65%" >
          <v-card>
            <v-sheet>
              <v-img height="55px" width="55px" v-bind:src="track.image"></v-img>
            </v-sheet>
            <v-fade-transition>
              <v-overlay v-if="hover" absolute color="#000000">
                <v-btn icon color="yellow darken-3">
                  <v-icon large>mdi-play-circle-outline</v-icon>
                </v-btn>
              </v-overlay>
            </v-fade-transition>
          </v-card>
          <v-col class="mx-3 my-1">
            <p style="margin:0; font-size:15px; color: #000">{{track.title}}</p>
            <p style="margin:0; font-size:14px; color: #616161">{{track.subtitle}}</p>
          </v-col>
          <spacer/>
          <v-btn class="my-2 mx-2" v-for="ins in track_btn" :key="ins" icon>
            <v-icon medium>{{ins}}</v-icon>
          </v-btn>
      </v-row>
    </template>
  </v-hover>
    </v-container-fluid>
    </div>
  </v-container-fluid>
</template>

<script>
import Tab from '../components/Tab'
export default {

  data: () => ({
    overlay: false,

    track_btn: [
        "mdi-heart-outline","mdi-minus-circle-outline","mdi-dots-horizontal"],

    tracks :[
      {image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Nirvana_album_cover.svg/1200px-Nirvana_album_cover.svg.png", title: "Come As You Are", subtitle: "Nirvana"},
      {image: "https://m.media-amazon.com/images/I/61XDQ1YSt8L._SS500_.jpg", title: "Юность", subtitle: "Dabro"},
      {image: "https://ex-hort.ru/_bd/7/55210706.jpg", title: "Сияй", subtitle: "Ramil'"},
      {image: "https://images.genius.com/807d1745190072b79f85fcdbe0a51d34.1000x1000x1.jpg", title: "Беги feat.Poet", subtitle: "Dj Smash"},
      {image: "https://avatars.yandex.net/get-music-content/2433207/dc3c1c33.a.11522234-1/m1000x1000", title: "Deep end", subtitle: "Foushee`"},

    ],
  }),
  components: {
    Tab
  },

}
</script>

<style>
  .hover{
    padding: 8px;
  }
  .hover:hover{
    border: 2px solid yellow;
    padding: 6px;
  }
  .hover-av{
    margin-top: -20px;
  }
  .hover-av:hover{
    border: 2px solid yellow;
    margin-top: -22px;
  }
</style>
