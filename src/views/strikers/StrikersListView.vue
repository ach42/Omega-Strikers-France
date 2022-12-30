<template>
  <section id="StrikersListView">
    <div id="big">
      <Adsense data-ad-client="ca-pub-XXXXXXXXXXXXXXXX" data-ad-slot="1234567890">
      </Adsense>
    </div>
    <div class="strikersList">
      <localized-link class="strikersList__item" v-for="item in routes" :to="{ path: item.router }">
        <div @mouseenter="MouseEvent(item)" class="strikersList__item__mouseEvent">
          <img v-bind:src="item.imgurl">
          <div class="strikersList__item__desc">
            <h1>{{ item.name }}</h1>
            <p>{{ item.subtitle }}</p>
          </div>
        </div>
      </localized-link>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      routes: [
        { name: 'Juliette', router: '/strikers/Juliette', subtitle: this.$i18n.t('Strikers.Juliette'), imgurl: 'https://database.omegastrikers-france.fr/uploads/thumbnail_Juliette_cropped_58621ec985.webp?width=736&height=800', imgBigUrl: 'https://database.omegastrikers-france.fr/uploads/juliette_38c21b8e1d.webp' },
        { name: 'Kai', router: '/strikers/Kai', subtitle: this.$i18n.t('Strikers.Kai'), imgurl: 'https://database.omegastrikers-france.fr/uploads/thumbnail_Kai_cropped_be10542f50.webp?width=796&height=800', imgBigUrl: 'https://database.omegastrikers-france.fr/uploads/kai_2131d6d7ad.webp' },
        { name: 'Dubu', router: '/strikers/Dubu', subtitle: this.$i18n.t('Strikers.Dubu'), imgurl: 'https://database.omegastrikers-france.fr/uploads/thumbnail_Dubu_cropped_047d36b2f0.webp?width=798&height=800', imgBigUrl: 'https://database.omegastrikers-france.fr/uploads/dubu_1609dcb15c.webp' },
        { name: 'Estelle', router: '/strikers/Estelle', subtitle: this.$i18n.t('Strikers.Estelle'), imgurl: 'https://database.omegastrikers-france.fr/uploads/thumbnail_Estelle_cropped_dfa4956f74.webp?width=800&height=760', imgBigUrl: 'https://database.omegastrikers-france.fr/uploads/estelle_99721409df.webp' },
        { name: 'Atlas', router: '/strikers/Atlas', subtitle: this.$i18n.t('Strikers.Atlas'), imgurl: 'https://database.omegastrikers-france.fr/uploads/thumbnail_Atlas_cropped_1350286f79.webp?width=790&height=800', imgBigUrl: 'https://database.omegastrikers-france.fr/uploads/atlas_e87f04a6fe.webp' },
        { name: 'Juno', router: '/strikers/Juno', subtitle: this.$i18n.t('Strikers.Juno'), imgurl: 'https://database.omegastrikers-france.fr/uploads/thumbnail_Juno_cropped_d96c197a3c.webp?width=800&height=759', imgBigUrl: 'https://database.omegastrikers-france.fr/uploads/juno_dbb3ad7b62.webp' },
        { name: 'Drek\'ar', router: '/strikers/Drek\'ar', subtitle: this.$i18n.t('Strikers.Drekar'), imgurl: 'https://database.omegastrikers-france.fr/uploads/thumbnail_Drek_ar_cropped_858f1a2cdf.webp?width=800&height=800', imgBigUrl: 'https://database.omegastrikers-france.fr/uploads/drekar_9582715278.webp' },
        { name: 'Rune', router: '/strikers/Rune', subtitle: this.$i18n.t('Strikers.Rune'), imgurl: 'https://database.omegastrikers-france.fr/uploads/thumbnail_Rune_cropped_f064bb2b2a.webp?width=791&height=800', imgBigUrl: 'https://database.omegastrikers-france.fr/uploads/rune_15339ea04f.webp' },
        { name: 'X', router: '/strikers/X', subtitle: this.$i18n.t('Strikers.X'), imgurl: 'https://database.omegastrikers-france.fr/uploads/thumbnail_X_cropped_82c3c9b255.webp?width=800&height=759', imgBigUrl: 'https://database.omegastrikers-france.fr/uploads/x_3e02b6da8f.webp' },
        { name: 'Era', router: '/strikers/Era', subtitle: this.$i18n.t('Strikers.Era'), imgurl: 'https://database.omegastrikers-france.fr/uploads/thumbnail_Era_cropped_2f1326f072.webp?width=800&height=717', imgBigUrl: 'https://database.omegastrikers-france.fr/uploads/era_c3c9abb9ff.webp' },
        { name: 'Luna', router: '/strikers/Luna', subtitle: this.$i18n.t('Strikers.Luna'), imgurl: 'https://database.omegastrikers-france.fr/uploads/thumbnail_Luna_cropped_ec3128d36c.webp?width=711&height=800', imgBigUrl: 'https://database.omegastrikers-france.fr/uploads/luna_479fd68ee3.webp' },
        { name: 'Ai.mi', router: '/strikers/Ai.mi', subtitle: this.$i18n.t('Strikers.Aimi'), imgurl: 'https://database.omegastrikers-france.fr/uploads/thumbnail_Ai_Mi_cropped_381aad389e.webp?width=790&height=800', imgBigUrl: 'https://database.omegastrikers-france.fr/uploads/ai_mi_85ae1e6bc2.webp' },
        { name: 'Asher', router: '/strikers/Asher', subtitle: this.$i18n.t('Strikers.Asher'), imgurl: 'https://database.omegastrikers-france.fr/uploads/thumbnail_Asher_cropped_df0100d569.webp?width=800&height=800', imgBigUrl: 'https://database.omegastrikers-france.fr/uploads/asher_2e2384a48e.webp' }
      ]
    }
  },
  metaInfo() {
    return {
      title: this.$t('App.TitleStrikersList') + " - " + this.$i18n.t('App.Title'),
      meta: [
        { vmid: 'description', name: 'description', content: this.$t('App.MetaStrikersList') }
      ]
    }
  },
  methods: {
    MouseEvent(item) {
      // Mettre à jour l'image dans la div "principal" en utilisant l'URL de l'image de l'élément sélectionné
      document.getElementById('big').innerHTML = `<img src="${item.imgBigUrl}">`;
    }
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
  height: 100%;
}

#big {
  display: flex;
  justify-content: center;
  width: 100%;
  background-color: rgba(16, 29, 66, 0.7960784314);
  height: 50%;

  & img {
    object-fit: cover;
    width: 15%;
  }
}

.strikersList {
  display: flex;
  align-items: center;
  align-content: center;
  flex-wrap: wrap;
  width: 100%;
  height: 50%;

  &__item {
    display: flex;
    height: 100px;
    flex: 1 0 33%;
    background-color: #101D42;
    width: 100%;

    &__mouseEvent {
      display: flex;
      width: 100%;
      height: 100%;
    }

    & img {
      width: 115px;
      object-fit: cover;
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
</style>