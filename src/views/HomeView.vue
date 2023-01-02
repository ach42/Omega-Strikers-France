<template>
    <section id="home">
        <div class="ph-item" id="home__top">
            <div class="ph-col-12" id="home__top__construction">
                <h2 class="ph-col-4 empty big">{{ $t('Home.construction') }}</h2>
                <p class="ph-col-4 empty">{{ $t('Home.constructionParagraph') }}</p>
            </div>
            <div id="home__top__links">
                <span>{{ $t('Home.modulesAvailable') }}</span>
                <localized-link id="home__top__links__strikers" to="/strikers"><img
                        src="../assets/striker_icon.png">strikers</localized-link>
            </div>
        </div>
        <div id="home__bottom">
            <div id="home__bottom__links">
                <h1>{{ $t('App.LinkToGame.title') }}</h1>
                <a id="home__bottom__links__steam" href="https://store.steampowered.com/app/1869590/Omega_Strikers/">
                    <img src="../assets/Steam_icon_logo.svg.png">
                    {{ $t('App.LinkToGame.steam') }}
                </a>
                <a id="home__bottom__links__gplay" href="#">
                    <img src="../assets/Google_Play_2022_icon.svg.png">
                    {{ $t('App.LinkToGame.soon') }}
                </a>
                <a id="home__bottom__links__apple" href="#">
                    <img src="../assets/Apple_logo_white.svg.png">
                    {{ $t('App.LinkToGame.soon') }}
                </a>
            </div>
            <div id="home__bottom__trailer">
                <video muted autoplay src="../assets/trailer.webm" type="video/webm"></video>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    metaInfo () {
      return {
        title: this.$t('App.Title'),
        meta: [
          { vmid: 'description', name: 'description', content: this.$t('App.Meta') }
        ]
      }
    }
  }
</script>

<style lang="scss">

#home {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    background-color: #101d42cb;

    &__top {
        display: flex;
        align-items: center;
        flex-direction: column;
        justify-content: center;
        width: 100%;
        height: 50%;
        backdrop-filter: blur(5px);
        box-shadow: inset 0px 0px 270px 0px rgba(16, 29, 66, 0.5);

        &__construction {
            display: flex;
            flex-direction: column;
            align-items: center;
            text-align: center;
            justify-content: center;
            width: 50%;
            color: #f5f5f5;
            margin-bottom: 2%;

            & h2 {
                text-transform: uppercase;
                font-size: 32px;
            }
        }

        &__links {
            display: flex;
            justify-content: center;
            align-items: center;
            column-gap: 10px;
            color: #f5f5f5;
            & a {
                display: flex;
                align-items: center;
                justify-content: space-between;
                column-gap: 5px;
                padding: 4px 8px 4px 2px;
                font-family: 'made_outer';
                text-transform: uppercase;
                font-style: italic;
                border-radius: 5px;

                & img {
                    width: 30px;
                }
            }

            &__strikers {
                background-color: #E92F40;

                &:hover {
                    transition: 0.3s;
                    box-shadow: inset -10px 10px 92px 0px rgba(0, 0, 0, 0.15);
                }
            }
        }
    }

    &__bottom {
        display: flex;
        height: 50%;

        &__links {
            display: flex;
            justify-content: center;
            align-items: center;
            row-gap: 5%;
            flex-direction: column;
            width: 55%;
            height: 100%;
            background-image: url(../assets/lineup.webp);
            box-shadow: inset -10px 10px 150px 0px rgba(0, 0, 0, 0.85);
            background-size: cover;
            & h1 {
                text-transform: uppercase;
                font-style: italic;
                background-color: #172A5F;
                padding: 10px;
                transform: skew(-5deg);
            }
            & a {
                display: flex;
                align-items: center;
                justify-content: space-around;
                width: 30%;
                padding: 5px;
                border-radius: 10px;
                &:hover {
                    transition: 0.3s;
                    box-shadow: inset -10px 10px 92px 0px rgba(0, 0, 0, 0.25);
                }
            }
            & img {
                display: flex;
                align-items: center;
                width: 35px;
            }
            &__steam {
                background-color: #2a475e;
            }
            &__gplay {
                background-color: #f5f5f5;
                color: #0b0b0b !important;
            }
            &__apple {
                background-color: #0b0b0b;
            }
        }

        &__trailer {
            display: flex;
            width: 51%;
            height: 100%;
            & video {
                width: 100%;
                height: 100%;
                object-fit: cover;
            }
        }
    }
}
@media screen and (max-width: 1024px) {
    #home__bottom__links a {
        width: 45%;
    }
}
@media screen and (max-width: 970px) {
    #home {
        overflow-y: scroll;
    }
    #home__top {
        height: max-content;
        padding-bottom: 15px;
    }
    #home__bottom {
        flex-direction: column;
        width: 100%;
        height: fit-content;
    }
    #home__bottom__links {
        row-gap: 10px;
    }
    #home__bottom__links h1 {
        font-size: 15px;
    }
    #home__bottom__links a {
        width: 60%;
    }
    #home__bottom div {
        width: 100%;
        height: 50vh;
    }
    #home__bottom__trailer iframe {
        position: relative;
    }
}
</style>