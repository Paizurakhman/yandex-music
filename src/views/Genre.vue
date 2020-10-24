<template>
  <v-container-fluid>
    <div style="margin-bottom: 200px; width:70%">
      <v-card>
        <v-sheet>
        <v-toolbar height="200" color="grey darken-4" dark flat>
          <v-col>
          <v-row class="mx-9 my-10">
            <v-btn outlined color="white">
              <v-icon left>mdi-tune</v-icon>
              Весь список
            </v-btn>
          </v-row>

          <h1 class="mx-9" style="margin-top:70px;">Музыка всех жанров</h1>
          </v-col>
          <template v-slot:extension>
            <v-tabs color="white" fixed-tabs slider-color="amber darken-1">
              <v-tab v-for="item in items" :key="item" >{{ item }}</v-tab>
            </v-tabs>
          </template>
        </v-toolbar>
        </v-sheet>
      </v-card>

      <div class="mx-15">
        <h5 class="my-6 mt-15 font-weight-bold">Популярные плейлисты</h5>
        <v-container-fluid class="grey lighten-5">
          <v-row no-gutters>
            <v-col v-for="n in podcast" :key="n" cols="8" sm="3">
              <v-hover>
                <template v-slot:default="{ hover }">
                  <v-card class="mr-5">
                    <v-img height="180px" v-bind:src="n.img"></v-img>
                    <v-list-item three-line>
                      <v-list-item-content>
                        <v-list-item-title style="font-size: 14px">{{n.title}}</v-list-item-title>
                        <v-list-item-subtitle>{{n.subtitle}}</v-list-item-subtitle>
                      </v-list-item-content>
                    </v-list-item>
                    <v-fade-transition>
                      <v-overlay v-if="hover" absolute color="#000000">
                        <v-btn class="mr-2" v-for="btn_i in btn_icon" :key="btn_i" icon color="yellow darken-3">
                          <v-icon large>{{btn_i}}</v-icon>
                        </v-btn>
                      </v-overlay>
                    </v-fade-transition>
                  </v-card>
                </template>
              </v-hover>
            </v-col>
        </v-row>
      </v-container-fluid>

      <h5 class="my-6 mt-15 font-weight-bold">Популярные треки</h5>
      <v-container-fluid class="grey lighten-5">
        <v-hover class="hover" v-for="track in tracks" :key="track.subtitle">
          <template v-slot:default="{ hover }">
        <v-row no-gutters style="width:98%" >
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

    <h5 class="my-6 mt-15 font-weight-bold">Популярные исполнители</h5>
    <v-container-fluid class="grey lighten-5">
      <v-row no-gutters class="mt-15 text-center">

        <v-col v-for="n in item" :key="n.icon" cols="2" sm="3" class="hover-av">
          <v-hover class="mt-2">
            <template v-slot:default="{ hover }">
              <v-avatar size="185">
                <v-img max-height="185" max-width="185" v-bind:src="n.icon"></v-img>
                <v-fade-transition>
                  <v-overlay v-if="hover" absolute color="#000000">
                    <v-btn class="ml-2" v-for="btn_i in btn_icon" :key="btn_i" icon color="yellow darken-3">
                      <v-icon>{{btn_i}}</v-icon>
                    </v-btn>
                  </v-overlay>
                </v-fade-transition>
              </v-avatar>

            </template>
          </v-hover>
          <v-col style="margin-left:-10px;">
            <p class="text-center" style="font-size: 15px; margin:0">{{n.text}}</p>
            <p class="text-center" style="font-size: 12px;">{{n.subtitle}}</p>
          </v-col>
        </v-col>
      

      </v-row>
    </v-container-fluid>
    </div>


    </div>
  </v-container-fluid>
</template>

<script>

export default {
  data: () => ({

    podcast : [
      {img: "https://picsum.photos/500/300?image=24", title: "Moscow Music School", subtitle: "Аудиоверсии лекций о музыкальной индустрии от Moscow Music School"},
      {img: "https://picsum.photos/500/300?image=25", title: "Ловец видений", subtitle: "Аудиосериал по новому роману Сергея Лукьяненко"},
      {img: "https://picsum.photos/500/300?image=26", title: "Супергерои", subtitle: "Истории обычных людей, которые меняют мир к лучшему"},
      {img: "https://picsum.photos/500/300?image=27", title: "SportHub Media", subtitle: "Подкасты о спорте на русском языке! NBA, NHL, NFL, MLB"},
    ],
      items: [
        'Обзор', 'Треки', 'Альбомы', 'Исполнители', 'Плейлисты',
      ],

      overlay: false,
      dialog: false,

      btn_icon: [
        "mdi-heart-outline","mdi-play-circle-outline","mdi-upload"],

      track_btn: [
          "mdi-heart-outline","mdi-minus-circle-outline","mdi-dots-horizontal"],

      tracks :[
        {image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Nirvana_album_cover.svg/1200px-Nirvana_album_cover.svg.png", title: "Come As You Are", subtitle: "Nirvana"},
        {image: "https://m.media-amazon.com/images/I/61XDQ1YSt8L._SS500_.jpg", title: "Юность", subtitle: "Dabro"},
        {image: "https://ex-hort.ru/_bd/7/55210706.jpg", title: "Сияй", subtitle: "Ramil'"},
        {image: "https://images.genius.com/807d1745190072b79f85fcdbe0a51d34.1000x1000x1.jpg", title: "Беги feat.Poet", subtitle: "Dj Smash"},
        {image: "https://avatars.yandex.net/get-music-content/2433207/dc3c1c33.a.11522234-1/m1000x1000", title: "Deep end", subtitle: "Foushee`"},

      ],
      item: [
        {icon: "https://upload.wikimedia.org/wikipedia/commons/6/64/Zivert_Vinyl-1.jpg", text: "Zivert", subtitle: "русская поп-музыка"},
        {icon: "https://cdns-images.dzcdn.net/images/artist/4bc5351e2cc8ff44b0842a6b9ffce14d/500x500.jpg", text: "Jony", subtitle: "русская поп-музыка"},
        {icon: "https://avatars.yandex.net/get-music-content/3226792/e822453a.p.4944372/200x200", text: "Niletto", subtitle: "русский рэп"},
        {icon: "https://avatars.yandex.net/get-music-content/175191/7dd65b35.p.41191/200x200", text: "Баста", subtitle: "русский рэп"},

      ],
    }),


};
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
