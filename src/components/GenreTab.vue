<template>
  <v-tabs color="black" style="border-bottom:1px solid #b8b8b8; width:65%">
    <v-tab style="text-decoration: none;" v-for="item in items" :key="item.text" router :to="item.link">{{item.text}}</v-tab>
    <v-tabs-slider color="red"></v-tabs-slider>
  </v-tabs>
</template>

<script>

  export default {
    name: 'GenreTab',

    data: () => ({
      items: [
        {text: "Обзор", link: "/radio"},
        {text: "Жанры", link: "/radio/genre"},
        {text: "Настроения", link: "/radio/mood"},
        {text: "Занятия", link: "/radio/activity"},
        {text: "Эпохи", link: "/radio/epoch"},
      ]
    }),
  };
</script>
