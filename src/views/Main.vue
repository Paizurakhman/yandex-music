<template>
    <v-container-fluid>
      <div class="mx-8 mt-15" style="margin-bottom: 200px;">
        <h1 style="font-size:42px;" class="mt-15 font-weight-bold">Главное</h1>
        <v-content style="padding:0">
          <Tab/>
        </v-content>
        <h5 class=" mt-15 font-weight-bold">Подкасты</h5>
        <p>Слушайте не только музыку</p>

        <v-container-fluid class="grey lighten-5">
          <v-row no-gutters>
            <v-col v-for="(n, i) in podcast" :key="i" cols="8" sm="2">
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
                    <v-btn class="m-2" icon color="grey lighten-1">
                      <v-icon style="font-size:30px">mdi-heart</v-icon>
                    </v-btn>
                    <v-btn class="m-2" icon color="yellow darken-3">
                      <v-icon style="font-size:48px">mdi-play-circle-outline</v-icon>
                    </v-btn>
                    <v-btn class="m-2" icon color="grey lighten-1">
                      <v-icon style="font-size:30px">mdi-share-variant</v-icon>
                    </v-btn>
                    <br>
                    <div class="text-center">
                      <v-btn @mouseover="colors()" @click="method_1($event, i, podcast)" @click.stop="dialog = true" icon color="yellow darken-3">
                        <v-icon>mdi-dots-horizontal-circle</v-icon>
                      </v-btn>
                    </div>
                  </v-overlay>
                </v-fade-transition>
              </v-card>
            </template>
          </v-hover>
            </v-col>
          </v-row>
        </v-container-fluid>

        <h5 class=" mt-15 font-weight-bold">Интересно сейчас</h5>

        <div style="width: 840px">
          <b-carousel
            :interval="4000"
            controls
            indicators
            background="#ababab"
            style="text-shadow: 1px 1px 2px #333;">

            <b-carousel-slide v-for="c in podcast" :key="c"
              v-bind:caption="c.title"
              v-bind:text="c.subtitle"
              v-bind:img-src="c.img+7">
            </b-carousel-slide>
          </b-carousel>
        </div>

        <h5 class=" mt-15 font-weight-bold">Новые релизы</h5>
        <p>Новые треки, альбомы и сборники</p>

        <v-container-fluid class="grey lighten-5">
          <v-row no-gutters>
            <v-col v-for="(n, i) in interest" :key="i" cols="8" sm="2">
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
                    <v-btn style="outline:none;" class="m-2" icon color="grey lighten-1">
                      <v-icon style="font-size:30px">mdi-heart</v-icon>
                    </v-btn>
                    <v-btn style="outline:none;" class="m-2" icon color="yellow darken-3">
                      <v-icon style="font-size:48px">mdi-play-circle-outline</v-icon>
                    </v-btn>
                    <v-btn style="outline:none;" class="m-2" icon color="grey lighten-1">
                      <v-icon style="font-size:30px">mdi-share-variant</v-icon>
                    </v-btn>
                    <br>
                    <div class="text-center">
                      <v-btn style="outline:none;" @mouseover="colors()" @click="method_1($event, i, interest)" @click.stop="dialog = true" icon color="yellow darken-3">
                        <v-icon>mdi-dots-horizontal-circle</v-icon>
                      </v-btn>
                    </div>

                  </v-overlay>
                </v-fade-transition>
              </v-card>
            </template>
          </v-hover>
        </v-col>

        <v-dialog
          v-model="dialog"
          max-width="750"
          persistent

          >

          <v-card v-bind:color="color">
            <v-card-title class="headline">The {{subtitle}} album
              <v-spacer></v-spacer>
                <v-btn style="outline:none;" icon color="green darken-1" text @click="dialog = false">
                  <v-icon>mdi-close</v-icon>
                </v-btn>
            </v-card-title>


            <v-container>
              <div class="m-4">
                <v-row>
                  <v-img max-width="140px" height="140px" v-bind:src="img"></v-img>

                  <v-col style="padding-top:0;">
                    <v-list-item-subtitle style="font-size: 16px; padding-bottom:5px">{{title}}</v-list-item-subtitle>
                    <v-list-item-subtitle style="font-size: 16px; padding-bottom:5px">{{genre}}</v-list-item-subtitle>
                    <v-list-item-subtitle style="font-size: 16px;">{{tracks.length}} Songs</v-list-item-subtitle>
                    <v-list-item-subtitle class="text--secondary" style="font-size: 16px;">2005</v-list-item-subtitle>
                    <v-row>
                      <v-tooltip top>
                      <template v-slot:activator="{ on, attrs }">
                        <v-btn  icon style="outline:none;" class="ml-2" color="blue" v-bind="attrs" v-on="on">
                          <v-icon>mdi-music-box</v-icon>
                        </v-btn>
                      </template>
                      <span>Play</span>
                      </v-tooltip>
                      <v-tooltip top>
                      <template v-slot:activator="{ on, attrs }">
                      <v-btn style="outline:none;" icon color="red" v-bind="attrs" v-on="on">
                        <v-icon>mdi-star</v-icon>
                      </v-btn>
                    </template>
                    <span>Click to bookmark</span>
                    </v-tooltip>
                    </v-row>
                  </v-col>
                </v-row>
              </div>
            </v-container>

           <v-card-text>
             <v-simple-table>
               <template v-slot:default>
                 <thead>
                   <tr>
                     <th class="text-left">
                       Number
                     </th>
                     <th class="text-left">
                       Track Title
                     </th>
                     <th class="text-left">
                       Duration
                     </th>
                     <th class="text-left">
                      Listen
                     </th>
                   </tr>
                 </thead>
                 <tbody>
                   <tr v-for="(item, index) in tracks" :key="index">
                     <td>{{(index+1)}}</td>
                     <td>{{ item.title }}</td>
                     <td>{{ item.duration }}</td>
                     <td>
                       <v-btn style="outline:none;" icon color="blue">
                         <v-icon>mdi-music-circle</v-icon>
                       </v-btn>
                     </td>
                   </tr>
                 </tbody>
              </template>
            </v-simple-table>
           </v-card-text>

            <v-card-actions>

            </v-card-actions>
          </v-card>
        </v-dialog>

          </v-row>
        </v-container-fluid>
      </div>
</v-container-fluid>
</template>

<script>
import Tab from '../components/Tab.vue'

export default {
  components: {
    Tab,

  },
  data: () => ({

    podcast : [
      {img: "https://picsum.photos/500/300?image=24", title: "Moscow Music School", subtitle: "Аудиоверсии лекций о музыкальной индустрии от Moscow Music School"},
      {img: "https://picsum.photos/500/300?image=25", title: "Ловец видений", subtitle: "Аудиосериал по новому роману Сергея Лукьяненко"},
      {img: "https://picsum.photos/500/300?image=26", title: "Супергерои", subtitle: "Истории обычных людей, которые меняют мир к лучшему"},
      {img: "https://picsum.photos/500/300?image=27", title: "SportHub Media", subtitle: "Подкасты о спорте на русском языке! NBA, NHL, NFL, MLB"},
    ],

    interest : [
      {img: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Nirvana_album_cover.svg/1200px-Nirvana_album_cover.svg.png", title: "Nirvana", subtitle: "Nirvana"},
      {img: "https://media.s-bol.com/r0872AWjQK0W/550x545.jpg", title: "Linkin Park", subtitle: "Hybrid Theory"},
      {img: "https://media.s-bol.com/1jkqLMO09G73/550x550.jpg", title: "Eminem", subtitle: "Revival"},
      {img: "https://img.discogs.com/1XkMhUJP-89FeYoqV13UxRprEDY=/fit-in/600x597/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-2556210-1290274854.jpeg.jpg", title: "Modern Talking & Blue System", subtitle: "Das Nummer 1 Album"},
    ],
    tracks: [
          {
            title: "You Know You're Right",
            duration: '3:37',
          },
          {
            title: 'About a Girl',
            duration: '2:47',
          },{
            title: 'Been a Son',
            duration: '2:21',
          },{
            title: 'Sliver',
            duration: '2:11',
          },{
            title: 'Smells Like Teen Spirit',
            duration: '5:01',
          },{
            title: 'Come as You Are',
            duration: '3:39',
          },{
            title: 'Lithium',
            duration: '4:15',
          },{
            title: 'In Bloom',
            duration: '4:13',
          },
        ],
    overlay: false,
    dialog: false,

      title: '',
      subtitle: '',
      img: '',
      genres: ["Rock/Alternative", "Hard Rock", "Hip-Hop/Rap", "Pop"],
      genre: '',
      color: '',
  }),

  methods: {
    method_1: function(ev, i, list){
      this.title = list[i].title
      this.subtitle = list[i].subtitle
      this.img = list[i].img
      this.genre = this.genres[i]

    },
    colors(){
      if(this.$vuetify.theme.isDark){
        this.color = '#1E1E1E'
      }else{
        this.color = 'white'
      }
    }
  },

};
</script>
