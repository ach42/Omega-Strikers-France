<template>
  <section id="StrikersListView">
    <preloader />
    <div id="big">
      <h1 id="placeholder">{{ $t('Strikers.List') }}</h1>
      <div id="big__strikers"></div>
    </div>
    <div class="strikersList">
      <div class="strikersList__block">
        <localized-link class="strikersList__item" v-for="item in routes" :to="{ path: item.router }">
          <div @mouseenter="MouseEvent(item)" class="strikersList__item__mouseEvent">
            <img v-bind:style="'box-shadow: 0px 0px 0px 2px' + item.color" v-bind:src="item.imgurl">
          </div>
        </localized-link>
      </div>
    </div>
  </section>
</template>

<script>
import preloader from '@/components/preloader.vue';

export default {
  data() {
    return {
      routes: [
        { name: 'Juliette', router: '/strikers/Juliette', subtitle: this.$i18n.t('Strikers.Juliette'), color: '#E82335',imgurl: 'https://database.omegastrikers-france.fr/uploads/Juliette_cropped_70ddd5e28b_3076c2ca0d.png', imgBigUrl: 'https://database.omegastrikers-france.fr/uploads/juliette_4be98e436c.png' },
        { name: 'Kai', router: '/strikers/Kai', subtitle: this.$i18n.t('Strikers.Kai'), color: '#E21985', imgurl: 'https://database.omegastrikers-france.fr/uploads/Kai_cropped_caa7f623b2_caa8cc2da2.png', imgBigUrl: 'https://database.omegastrikers-france.fr/uploads/kai_d1982bf154.png' },
        { name: 'Dubu', router: '/strikers/Dubu', subtitle: this.$i18n.t('Strikers.Dubu'), color: '#E7963B', imgurl: 'https://database.omegastrikers-france.fr/uploads/Dubu_cropped_0a79c299dc_d5724f30c7.png', imgBigUrl: 'https://database.omegastrikers-france.fr/uploads/dubu_09b691455e.png' },
        { name: 'Estelle', router: '/strikers/Estelle', subtitle: this.$i18n.t('Strikers.Estelle'), color: '#3485EE', imgurl: 'https://database.omegastrikers-france.fr/uploads/Estelle_cropped_556b426598_59192b22fd.png', imgBigUrl: 'https://database.omegastrikers-france.fr/uploads/estelle_2c959fa3b3.png' },
        { name: 'Atlas', router: '/strikers/Atlas', subtitle: this.$i18n.t('Strikers.Atlas'), color: '#B08E4D', imgurl: 'https://database.omegastrikers-france.fr/uploads/Atlas_cropped_3a4f6326bc_d7f741d085.png', imgBigUrl: 'https://database.omegastrikers-france.fr/uploads/atlas_a22f433dfc.png' },
        { name: 'Juno', router: '/strikers/Juno', subtitle: this.$i18n.t('Strikers.Juno'), color: '#4DCEB2', imgurl: 'https://database.omegastrikers-france.fr/uploads/Juno_cropped_5209edda17_084c91c706.png', imgBigUrl: 'https://database.omegastrikers-france.fr/uploads/juno_69981665f7.png' },
        { name: 'Drek\'ar', router: '/strikers/Drek\'ar', subtitle: this.$i18n.t('Strikers.Drekar'), color: '#5E86BA', imgurl: 'https://database.omegastrikers-france.fr/uploads/Drek_ar_cropped_b9262e4270_ba33b48980.png', imgBigUrl: 'https://database.omegastrikers-france.fr/uploads/drekar_f2103f9195.png' },
        { name: 'Rune', router: '/strikers/Rune', subtitle: this.$i18n.t('Strikers.Rune'), color: '#7451B7', imgurl: 'https://database.omegastrikers-france.fr/uploads/Rune_cropped_050eab6a6f_1a2c1be983.png', imgBigUrl: 'https://database.omegastrikers-france.fr/uploads/rune_978c7759c7.png' },
        { name: 'X', router: '/strikers/X', subtitle: this.$i18n.t('Strikers.X'), color: '#dd0e64', imgurl: 'https://database.omegastrikers-france.fr/uploads/X_cropped_c47af244d5_73f97ca002.png', imgBigUrl: 'https://database.omegastrikers-france.fr/uploads/x_c3894875e3.png' },
        { name: 'Era', router: '/strikers/Era', subtitle: this.$i18n.t('Strikers.Era'), color: '#E21985', imgurl: 'https://database.omegastrikers-france.fr/uploads/Era_cropped_f5df9bd080_b11705dcdb.png', imgBigUrl: 'https://database.omegastrikers-france.fr/uploads/era_df1a0bba01.png' },
        { name: 'Luna', router: '/strikers/Luna', subtitle: this.$i18n.t('Strikers.Luna'), color: '#87BB21', imgurl: 'https://database.omegastrikers-france.fr/uploads/Luna_cropped_5bf0f79c05_f9f5b38000.png', imgBigUrl: 'https://database.omegastrikers-france.fr/uploads/luna_1784dfe5a6.png' },
        { name: 'Ai.mi', router: '/strikers/Ai.mi', subtitle: this.$i18n.t('Strikers.Aimi'), color: '#F45A8C', imgurl: 'https://database.omegastrikers-france.fr/uploads/Ai_Mi_cropped_920f784f07_5ec25db572.png', imgBigUrl: 'https://database.omegastrikers-france.fr/uploads/ai_mi_b9c57e9dd2.png' },
        { name: 'Asher', router: '/strikers/Asher', subtitle: this.$i18n.t('Strikers.Asher'), color: '#D95628', imgurl: 'https://database.omegastrikers-france.fr/uploads/Asher_cropped_c3c7a25042_58d4e876c3.png', imgBigUrl: 'https://database.omegastrikers-france.fr/uploads/asher_6bfadd11e4.png' }
      ]
    }
  },
  components : {
    preloader
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
      document.getElementById('placeholder').style.display = "none";
      document.getElementById('big__strikers').innerHTML = `
      <img src="${item.imgBigUrl}">
      <div style="background: ${item.color};" id="big__item">
            <h1>${item.name}</h1>
            <p>${item.subtitle}</p>
          </div>
      `;
    }
  }
}
</script>

<style lang="scss">
#StrikersListView .preloader {
    height: 100%;
    width: 100%;
}

@keyframes fadeInLeft {
  0% {
    opacity: 0;
    -webkit-transform: translate3d(-100%, 0, 0);
    transform: translate3d(-100%, 0, 0);
  }

  100% {
    opacity: 1;
    -webkit-transform: none;
    transform: none;
  }
}

#StrikersListView {
  display: flex;
  align-items: center;
  background-color: rgba(16, 29, 66, 0.7960784314);
  justify-content: space-between;
  width: 100%;
  height: 100%;
}

#big {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  width: 50%;
  height: 100%;

  &__item {
    position: absolute;
    animation: fadeInLeft 0.5s;
    bottom: 30%;
    left: 20%;
    box-shadow: 0px 0px 25px 0px rgba(0,0,0,0.75);
    padding: 10px;
    border-radius: 10px;
    & h1 {
      text-transform: uppercase;
      font-style: italic;
    }
    & p {
      color: #f5f5f5;
    }
  }
  & img {
    animation: fadeInLeft 0.5s;
    object-fit: cover;
    width: 95%;
  }
}

#placeholder {
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: center;
  text-align: center;
  text-transform: uppercase;
  font-size: 2vw;
  font-style: italic;
}

.strikersList {
  display: flex;
  width: 50%;
  height: fit-content;
  justify-content: center;
  align-items: center;

  &__block {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    width: 95%;
    height: 100%;
  }

  &__item {
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 0 0 25%;

    &__mouseEvent {
      display: flex;
      justify-content: center;
      width: 90%;
      height: 90%;
    }

    & img {
      width: 95%;
      background-color: #101D42;
      border-radius: 10px;
      height: 100%;
      object-fit: cover;
      &:hover {
        background-color: #16285c;
      }
    }
  }
}
@media screen and (max-width: 1240px) {
  #StrikersListView .preloader {
    width: 100%;
    height: 100%;
  }
  #StrikersListView {
    flex-direction: column;
  }
  #big {
    display: flex;
    flex-direction: column;
    height: 50%;
    align-items: center;
  }
  #big__strikers {
    display: flex;
    justify-content: center;
  }
  #big__strikers img {
    width: 45%;
    padding-top: 30px;
  }
  #big__item {
    bottom: 55%;
    left: 50%;
    padding: 5px;
  }
  #placeholder {
    display: flex;
    font-size: 4vw;
  }
  .strikersList {
    width: 100%;
    height: 50%;
  }
  .strikersList__item {
    flex: 0 0 14%;
  }
}
@media screen and (max-width: 800px) {
  #big {
    height: 20%;
  }
  #big__strikers {
    display: none;
  }
  .strikersList {
    height: 80%;
  }
  .strikersList__item {
    flex: 0 0 25%;
  }
}
@media screen and (max-width: 400px) {
  #StrikersListView {
    overflow-y: scroll;
  }
  #big {
    height: 10%;
  }
  .strikersList__item {
    flex: 0 0 50%;
  }
  .strikersList {
    height: 100%;
  }
  #placeholder {
    font-size: 6vw;
  }
}
</style>