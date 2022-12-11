<template>
  <section id="StrikersListView">

    <Adsense
      data-ad-client="ca-pub-2232424283250969"
      data-ad-slot="9506335294">
    </Adsense>

    <div class="strikersList">
      <localized-link class="strikersList__item" v-for="item in routes" :to="{path:item.router}" >
          <img v-bind:src="item.imgurl">
          <div class="strikersList__item__desc">
            <h1>{{item.name}}</h1>
            <p>{{item.subtitle}}</p>
          </div>
      </localized-link>
    </div>

    <Adsense
      data-ad-client="ca-pub-2232424283250969"
      data-ad-slot="9506335294">
    </Adsense>
    
  </section>
</template>

<script>
export default {
  data() {
  return {
    routes: [
        {name: 'Juliette', router: '/strikers/Juliette', subtitle: this.$i18n.t('Strikers.Juliette'), imgurl:'https://database.omegastrikers-france.fr/uploads/thumbnail_Juliette_cropped_58621ec985.webp?width=736&height=800'},
        {name: 'Kai', router: '/strikers/Kai', subtitle: this.$i18n.t('Strikers.Kai'), imgurl:'https://database.omegastrikers-france.fr/uploads/thumbnail_Kai_cropped_be10542f50.webp?width=796&height=800'},
        {name: 'Dubu', router: '/strikers/Dubu', subtitle: this.$i18n.t('Strikers.Dubu'), imgurl:'https://database.omegastrikers-france.fr/uploads/thumbnail_Dubu_cropped_047d36b2f0.webp?width=798&height=800'},
        {name: 'Estelle', router: '/strikers/Estelle', subtitle: this.$i18n.t('Strikers.Estelle'), imgurl:'https://database.omegastrikers-france.fr/uploads/thumbnail_Estelle_cropped_dfa4956f74.webp?width=800&height=760'},
        {name: 'Atlas', router: '/strikers/Atlas', subtitle: this.$i18n.t('Strikers.Atlas'), imgurl:'https://database.omegastrikers-france.fr/uploads/thumbnail_Atlas_cropped_1350286f79.webp?width=790&height=800'},
        {name: 'Juno', router: '/strikers/Juno', subtitle: this.$i18n.t('Strikers.Juno'), imgurl:'https://database.omegastrikers-france.fr/uploads/thumbnail_Juno_cropped_d96c197a3c.webp?width=800&height=759'},
        {name: 'Drek\'ar', router: '/strikers/Drek\'ar', subtitle: this.$i18n.t('Strikers.Drekar'), imgurl:'https://database.omegastrikers-france.fr/uploads/thumbnail_Drek_ar_cropped_858f1a2cdf.webp?width=800&height=800'},
        {name: 'Rune', router: '/strikers/Rune', subtitle: this.$i18n.t('Strikers.Rune'), imgurl:'https://database.omegastrikers-france.fr/uploads/thumbnail_Rune_cropped_f064bb2b2a.webp?width=791&height=800'},
        {name: 'X', router: '/strikers/X', subtitle: this.$i18n.t('Strikers.X'), imgurl:'https://database.omegastrikers-france.fr/uploads/thumbnail_X_cropped_82c3c9b255.webp?width=800&height=759'},
        {name: 'Era', router: '/strikers/Era', subtitle: this.$i18n.t('Strikers.Era'), imgurl:'https://database.omegastrikers-france.fr/uploads/thumbnail_Era_cropped_2f1326f072.webp?width=800&height=717'},
        {name: 'Luna', router: '/strikers/Luna', subtitle: this.$i18n.t('Strikers.Luna'), imgurl:'https://database.omegastrikers-france.fr/uploads/thumbnail_Luna_cropped_ec3128d36c.webp?width=711&height=800'},
        {name: 'Ai.mi', router: '/strikers/Ai.mi', subtitle: this.$i18n.t('Strikers.Aimi'), imgurl:'https://database.omegastrikers-france.fr/uploads/thumbnail_Ai_Mi_cropped_381aad389e.webp?width=790&height=800'},
        {name: 'Asher', router: '/strikers/Asher', subtitle: this.$i18n.t('Strikers.Asher'), imgurl:'https://database.omegastrikers-france.fr/uploads/thumbnail_Asher_cropped_df0100d569.webp?width=800&height=800'}
        ]
    }
  },
  created () {
    document.title = this.$t('App.TitleStrikersList') + " - " + this.$i18n.t('App.Title');
  }
  
}
</script>

<style lang="scss">

#StrikersListView {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-top: 0.5%;
  margin-bottom: 0.5%;
}

.strikersList {
  display: flex;
  justify-content: space-around;
  align-items: center;
  align-content: center;
  flex-wrap: wrap;
  width: 100%;
  height: 50%;
  column-gap: 5%;
  row-gap: 5%;
  &__item {
    display: flex;
    height: 100px;
    transform: skew(-5deg);
    background-color: #101D42;
    box-shadow: 0px 0px 15px 0px rgba(0,0,0,0.55);
    width: 420px;
    & img {
      width: 115px;
      object-fit: cover;
      transform: skew(5deg);
      height: 100%;
    }
    &__desc {
      display: flex;
      flex-direction: column;
      width: 100%;
      & h1 {
        background-color: #172A5F;
        padding-left: 10px;
      }
      & p {
        padding-left: 10px;
      }
    }
  }
}
@media screen and (max-width: 768px) {
  .adswrapper {
    display: none;
  }
  #StrikersListView {
    background-color: #101D42;
    margin-top: 0px;
    overflow-y: scroll;
    margin-bottom: 0px;
  }
  .strikersList {
    row-gap: 0%;
    justify-content: flex-start;
    align-content: flex-start;
    height: 100%;
  }
  .strikersList__item {
    transform: none;
    width: 100%;
  }
}
</style>