<template>
  <v-app>
    <v-navigation-drawer v-model="drawer" app clipped flating temporary >
      <v-list>
        <v-row class="mx-4 ma-2 mb-3">
        <v-toolbar-title class="align-center">
          <v-img max-height="30" max-width="150" src="@/assets/logo.png"></v-img>
        </v-toolbar-title>
      </v-row>
      <v-list-item style="text-decoration: none;" v-for="item in items" :key="item.text" router :to="item.route">
        <v-list-item-action>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-item-action>
        <v-list-item-content>
          <v-list-item-title>{{ item.text }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar v-bind:color="color" app clipped-left>
      <v-app-bar-nav-icon @click="drawer = !drawer"/>

      <v-toolbar-title class="align-center">
        <router-link :to="'/'">
          <v-img max-height="30" max-width="150" src="@/assets/logo.png"></v-img>
        </router-link>
      </v-toolbar-title>

      <v-col cols="4">
      <v-text-field dense clearable class="mx-8 mt-7" solo placeholder="Трек, альбом, исполнитель, подкаст" single-line append-icon="mdi-magnify" style="font-size:13px;"/>
    </v-col>
      <v-spacer/>

      <div>
        <v-menu v-model="menu" :close-on-content-click="false" :nudge-width="250" offset-x>
          <template v-slot:activator="{on}">
            <v-badge :value="hover" color="amber darken-3 accent-4" content="PP" left
              transition="slide-x-transition" offset-y="20" offset-x="1">
              <v-hover v-model="hover">
                <v-avatar size="45">
                  <img v-on="on" src="https://cdn.vuetifyjs.com/images/john.jpg" alt="John">
                </v-avatar>
              </v-hover>
            </v-badge>
          </template>
          <v-card>
            <v-list>
                <v-list-item>
                  <v-badge bordered bottom color="deep-purple accent-4" dot
                    offset-x="25"
                    offset-y="20">
                  <v-list-item-avatar>
                    <img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="John">
                  </v-list-item-avatar>
                  </v-badge>
                  <v-list-item-content>
                    <v-list-item-title>Paizurakhman P</v-list-item-title>
                    <v-list-item-subtitle>YandexMusic</v-list-item-subtitle>
                  </v-list-item-content>
                </v-list-item>
            </v-list>
            <v-divider/>
            <v-list>
              <v-list-item>
                <v-list-item-action>
                  <v-icon>mdi-cog</v-icon>
                </v-list-item-action>
                <v-list-item-title>Settings</v-list-item-title>
              </v-list-item>
            </v-list>
            <v-list>
              <v-list-item>
                <v-list-item-action>
                  <v-switch v-model="theme" color="purple"/>
                </v-list-item-action>
                <v-list-item-title>Dark mode</v-list-item-title>
              </v-list-item>
            </v-list>
            <v-card-actions>
              <v-spacer/>
              <v-btn color="primary" text @click="menu=false">
                  Logout
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-menu>
      </div>
    </v-app-bar>

    <v-content>
      <router-view></router-view>
    </v-content>
    <v-footer fixed class="footer" height="70" v-bind:style="'border-top: 6px solid #d1d0cd; background-color:'+ color ">
      <v-row  class="mx-2 ">
        <v-btn class="my-2 mx-1" v-for="btn in button_icons" :key="btn" icon>
          <v-icon >{{btn}}</v-icon>
        </v-btn>

        <v-img class="mx-4" max-height="50" max-width="50" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Nirvana_album_cover.svg/1200px-Nirvana_album_cover.svg.png"></v-img>

          <v-list class="mr-3">
            <v-list-item-title class="font-weight-bold" style="font-size:14px;">Smells Like Teen Spirit</v-list-item-title>
            <v-list-item-subtitle>Nirvana</v-list-item-subtitle>
          </v-list>

          <v-btn class="my-2 mx-1" v-for="bi in btn_i" :key="bi" icon>
            <v-icon >{{bi}}</v-icon>
          </v-btn>

          <v-spacer/>

          <v-btn class="my-2" v-for="ins in icons" :key="ins" icon>
            <v-icon>{{ins}}</v-icon>
          </v-btn>

      </v-row>
    </v-footer>
  </v-app>
</template>

<script>

export default {
  el: '#app',
  data: () => ({
    drawer: false,
    menu: false,
    theme: false,
    color: 'white',
    hover: false,


    items: [
      {icon: "mdi-home", text: "Главное", route: '/'},
      {icon: "mdi-microphone-variant", text: "Подкасты", route: '/podcast'},
      {icon: "mdi-music-circle", text: "Жанры", route: '/genre'},
      {icon: "mdi-radio", text: "Радио", route: '/radio'},
    ],

    button_icons : ["mdi-skip-backward", "mdi-play", "mdi-skip-forward","mdi-playlist-play"],
    btn_i : ["mdi-heart-outline", "mdi-plus", "mdi-upload", "mdi-block-helper"],
    icons : ["mdi-quality-high", "mdi-shuffle-variant", "mdi-repeat", "mdi-volume-high"],

  }),

  watch:{
    theme: function(next){
      this.$vuetify.theme.dark = next
      if(!next)
        this.color = 'white'
      else
        this.color = ''
    }
  }
};
</script>
