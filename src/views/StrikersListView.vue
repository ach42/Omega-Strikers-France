<template>
  <section class="strikersList" >
      <localized-link class="strikersList__item" v-for="item in routes" :to="{path:item.router}" >
          <img v-bind:src="item.imgurl">
          <div class="strikersList__item__desc">
            <h1>{{item.name}}</h1>
            <p>{{item.subtitle}}</p>
          </div>
      </localized-link>
  </section>
</template>

<script>

export default {
  data() {
  return {
    routes: [
        {name: 'Juliette', router: '/strikers/juliette', subtitle: this.$i18n.t('Strikers.Juliette'), imgurl:'https://strapi-omega.onrender.com/uploads/thumbnail_Juliette_cropped_58621ec985.webp?width=736&height=800'},
        {name: 'Kai', router: '/strikers/kai', subtitle: this.$i18n.t('Strikers.Kai'), imgurl:'https://strapi-omega.onrender.com/uploads/thumbnail_Kai_cropped_be10542f50.webp?width=796&height=800'},
        {name: 'Dubu', router: '/strikers/dubu', subtitle: this.$i18n.t('Strikers.Dubu'), imgurl:'https://strapi-omega.onrender.com/uploads/thumbnail_Dubu_cropped_047d36b2f0.webp?width=798&height=800'},
        {name: 'Estelle', router: '/strikers/estelle', subtitle: this.$i18n.t('Strikers.Estelle'), imgurl:'https://strapi-omega.onrender.com/uploads/thumbnail_Estelle_cropped_dfa4956f74.webp?width=800&height=760'},
        {name: 'Atlas', router: '/strikers/atlas', subtitle: this.$i18n.t('Strikers.Atlas'), imgurl:'https://strapi-omega.onrender.com/uploads/thumbnail_Atlas_cropped_1350286f79.webp?width=790&height=800'},
        {name: 'Juno', router: '/strikers/juno', subtitle: this.$i18n.t('Strikers.Juno'), imgurl:'https://strapi-omega.onrender.com/uploads/thumbnail_Juno_cropped_d96c197a3c.webp?width=800&height=759'},
        {name: 'Drek\'ar', router: '/strikers/drekar', subtitle: this.$i18n.t('Strikers.Drekar'), imgurl:'https://strapi-omega.onrender.com/uploads/thumbnail_Drek_ar_cropped_858f1a2cdf.webp?width=800&height=800'},
        {name: 'Rune', router: '/strikers/rune', subtitle: this.$i18n.t('Strikers.Rune'), imgurl:'https://strapi-omega.onrender.com/uploads/thumbnail_Rune_cropped_f064bb2b2a.webp?width=791&height=800'},
        {name: 'X', router: '/strikers/x', subtitle: this.$i18n.t('Strikers.X'), imgurl:'https://strapi-omega.onrender.com/uploads/thumbnail_X_cropped_82c3c9b255.webp?width=800&height=759'},
        {name: 'Era', router: '/strikers/era', subtitle: this.$i18n.t('Strikers.Era'), imgurl:'https://strapi-omega.onrender.com/uploads/thumbnail_Era_cropped_2f1326f072.webp?width=800&height=717'},
        {name: 'Ai.mi', router: '/strikers/aimi', subtitle: this.$i18n.t('Strikers.Aimi'), imgurl:'https://strapi-omega.onrender.com/uploads/thumbnail_Ai_Mi_cropped_381aad389e.webp?width=790&height=800'},
        {name: 'Asher', router: '/strikers/asher', subtitle: this.$i18n.t('Strikers.Asher'), imgurl:'https://strapi-omega.onrender.com/uploads/thumbnail_Asher_cropped_df0100d569.webp?width=800&height=800'}
        ]
    }
  },
  created () {
    document.title = this.$t('App.TitleStrikersList');
  }

}
</script>

<style lang="scss">
.strikersList {
  display: flex;
  justify-content: space-around;
  align-items: center;
  align-content: center;
  flex-wrap: wrap;
  width: 90%;
  height: 100%;
  column-gap: 5%;
  row-gap: 5%;
  &__item {
    display: flex;
    height: 100px;
    transform: skew(-5deg);
    background-color: #101D42;
    box-shadow: 0px 0px 15px 0px rgba(0,0,0,0.55);
    flex: 1 0 25%;
    & img {
      width: 110px;
      object-fit: contain;
      transform: skew(5deg);
      height: 100%;
    }
    &__desc {
      width: 100%;
      & h1 {
        background-color: #172A5F;
      }
    }
  }
}
</style>