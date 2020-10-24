<template>
  <v-tabs color="black" style="border-bottom:1px solid #b8b8b8; width:65%">
    <v-tab style="text-decoration: none;" v-for="item in items" :key="item.text" router :to="item.link">{{item.text}}</v-tab>
    <v-tabs-slider color="red"></v-tabs-slider>
  </v-tabs>
</template>

<script>

  export default {
    name: 'Tab',

    data: () => ({
      items: [
        {text: "Всё", link: "/"},
        {text: "Новыё релизи", link: "/newrel"},
        {text: "Чарт", link: "chart"},
        {text: "НАСТРОЕНИЯ И ЖАНРЫ", link: "genres"},
        {text: "ДЛЯ ДЕТЕЙ", link: "children"},
      ]
    }),
  };
</script>
