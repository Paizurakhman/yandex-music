<template>

    <v-container-fluid>
      <div class="mx-8 mt-15" style="margin-bottom: 200px;">
        <h1 style="font-size:42px;" class="mt-15 font-weight-bold">Подкасты</h1>


        <h5 class=" mt-5 font-weight-bold">Актуальное</h5>
        <p>Новинки на сервисе и интересное сейчас</p>

        <v-container-fluid class="grey lighten-5">
          <v-row no-gutters>
            <v-col v-for="n in podcast" :key="n" cols="8" sm="2">
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

        <h5 class=" mt-15 font-weight-bold">Чарт</h5>
        <p>30 самых популярных подкастов в сентябре</p>

        <v-container-fluid class="grey lighten-5">
          <v-row no-gutters>
            <v-col v-for="n in podcast" :key="n" cols="8" sm="2">
              <v-hover>
                <template v-slot:default="{ hover }">
              <v-card class="mr-5">
                <v-img height="180px" v-bind:src="n.img+9"></v-img>
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

        <h5 class=" mt-15 font-weight-bold">Юмор</h5>
        <p>На злобу дня</p>

        <v-container-fluid class="grey lighten-5">
          <v-row no-gutters>
            <v-col v-for="n in podcast" :key="n" cols="8" sm="2">
              <v-hover>
                <template v-slot:default="{ hover }">
              <v-card class="mr-5">
                <v-img height="180px" v-bind:src="n.img+8"></v-img>
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

        <h5 class=" mt-15 font-weight-bold">Общество и культура</h5>
        <p>Диалоги о важном и задушевные разговоры</p>
        <v-container-fluid class="grey lighten-5">
          <v-row no-gutters>
            <v-col v-for="n in podcast" :key="n" cols="8" sm="2">
              <v-hover>
                <template v-slot:default="{ hover }">
              <v-card class="mr-5">
                <v-img height="180px" v-bind:src="n.img+7"></v-img>
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

    interest : [
      {img: "https://picsum.photos/500/300?image=64", title: "Moscow Music School", subtitle: "Аудиоверсии лекций о музыкальной индустрии от Moscow Music School"},
      {img: "https://picsum.photos/500/300?image=65", title: "Ловец видений", subtitle: "Аудиосериал по новому роману Сергея Лукьяненко"},
      {img: "https://picsum.photos/500/300?image=71", title: "Супергерои", subtitle: "Истории обычных людей, которые меняют мир к лучшему"},
      {img: "https://picsum.photos/500/300?image=74", title: "SportHub Media", subtitle: "Подкасты о спорте на русском языке! NBA, NHL, NFL, MLB"},
    ],

    overlay: false,

    btn_icon: [
      "mdi-heart","mdi-play-circle-outline","mdi-upload"],

  }),

};
</script>

<style>
  .v-card:hover{
    background: rgba(255,255,255,0.95);
  }
</style>
