<template>
    <header>
        <input id="hamburger" class="hamburger" type="checkbox" />
        <label for="hamburger" class="hamburger">
            <i></i>
            <text>
                <close>close</close>
                <open>menu</open>
            </text>
        </label>
        <nav class="primnav">
            <ul>
                <li>
                    <localized-link id="logo" to="/">
                        <div id="logo__img">
                        <img src="../assets/logo.webp">
                        </div>
                        <div class="secnav" id="logo__title">
                            <h1>OMEGA <br>STRIKERS</h1>
                            <div id="logo__title__france">
                                <img src="../assets/dubu-shocked.png">
                                <span>FRANCE</span>
                            </div>
                        </div>
                    </localized-link>
                </li>
                <li>
                    <localized-link id="strikers-menu" to="/strikers">
                        <img class="icon" src="../assets/striker_icon.png">
                        Strikers
                    </localized-link>
                    <ul class="secnav">
                        <li>
                            <localized-link to="/strikers/juliette">Juliette</localized-link>
                        </li>
                        <li>
                            <localized-link to="/strikers/kai">Kai</localized-link>
                        </li>
                        <li>
                            <localized-link to="/strikers/Dubu">Dubu</localized-link>
                        </li>
                        <li>
                            <localized-link to="/strikers/estelle">Estelle</localized-link>
                        </li>
                        <li>
                            <localized-link to="/strikers/atlas">Atlas</localized-link>
                        </li>
                        <li>
                            <localized-link to="/strikers/juno">Juno</localized-link>
                        </li>
                        <li>
                            <localized-link to="/strikers/drekar">Drek'ar</localized-link>
                        </li>
                        <li>
                            <localized-link to="/strikers/rune">Rune</localized-link>
                        </li>
                        <li>
                            <localized-link to="/strikers/x">X</localized-link>
                        </li>
                        <li>
                            <localized-link to="/strikers/era">Era</localized-link>
                        </li>
                        <li>
                            <localized-link to="/strikers/aimi">Ai.Mi</localized-link>
                        </li>
                        <li>
                            <localized-link to="/strikers/asher">Asher</localized-link>
                        </li>
                    </ul>
                </li>
                <li>
                    <localized-link class="menu-title" to="/wiki">
                        <img class="icon" src="../assets/dossier.png">
                        Wiki
                    </localized-link>
                    <ul class="secnav">
                        <li>
                            <localized-link to="/wiki/rank-system">Rank System</localized-link>
                        </li>
                    </ul>
                </li>
                <li>
                    <localized-link class="menu-title" to="/index-communautaire">
                        <img class="icon" src="../assets/connexions.png">
                        index communautaire
                    </localized-link>
                    <ul class="secnav">
                        <li>
                            <localized-link to="/index-communautaire/createurs">Créateurs</localized-link>
                        </li>
                        <li>
                            <localized-link to="/index-communautaire/discord">Serveurs Discord</localized-link>
                        </li>
                        <li>
                            <localized-link to="/index-communautaire/outlis">Outils</localized-link>
                        </li>
                    </ul>
                </li>
                <li id="linkToGame">
                    <a href="#" class="menu-title">
                        <img class="icon" src="../assets/video-game.png">
                        Play Omega Strikers
                    </a>
                    <ul class="secnav">
                        <li>
                            <a id="linkToGame__steam" href="https://store.steampowered.com/app/1869590/Omega_Strikers/">
                                <img src="../assets/Steam_icon_logo.svg.png">
                                {{ $t('App.LinkToGame.steam') }}
                            </a>
                        </li>
                        <li>
                            <a id="linkToGame__gplay" href="#">
                                <img src="../assets/Google_Play_2022_icon.svg.png">
                                {{ $t('App.LinkToGame.soon') }}
                            </a>
                        </li>
                        <li>
                            <a id="linkToGame__apple" href="#">
                                <img src="../assets/Apple_logo_white.svg.png">
                                {{ $t('App.LinkToGame.soon') }}
                            </a>
                        </li>
                    </ul>
                </li>
            </ul>
        </nav>
    </header>
</template>

<script>
export default {
    name: 'Headervue'
}
</script>

<style lang="scss">
@mixin transition-max-height {
    @for $i from 1 through 10 {
        &:nth-child(#{$i}) {
            transition: max-height .5s #{.65 + $i * .02}s ease-in;
        }
    }
}

@mixin media-sm {
    @media (min-width: 650px) {
        @content;
    }
}

@mixin alpha-attribute($attribute, $color, $background) {
    $percent: alpha($color) * 100%;
    $opaque: opacify($color, 1);
    $solid-color: mix($opaque, $background, $percent);
    #{$attribute}: $solid-color;
    #{$attribute}: $color;
}

@function getColor($color) {
    @if (lightness($main) > 50) {
        @return rgba(black, .8);
    }

    @else {
        @return rgba(white, .8);
    }
}

ul {
    list-style: none;
    margin: 0;
    padding: 0;
}

$red: random(256)-1;
$green: random(256)-1;
$blue: random(256)-1;

$main: rgb($red, $green, $blue);
$main: #101d42cb;
$dark: mix(black, $main, 20%);

// select font color
$text: getColor($main);

%sidebar-hover {
    @include alpha-attribute('background-color', rgba($main, 0.6), white);
}

.primnav {
    height: 58px;
    width: 100vw;
    font-size: .8em;
    backdrop-filter: blur(5px);
    text-transform: uppercase;
    background-color: lighten($main, 5%);
    display: flex;
    flex-direction: column;
    transition: height 246ms .5s ease;
    overflow-x: hidden;
    overflow-y: hidden;
    box-sizing: border-box;
    z-index: 1;

    @include media-sm {
        height: 100vh;
        width: 58px;
        transition: width 246ms .5s ease;
    }

    >ul {
        height: 100%;
        overflow-y: auto;
        overflow-x: hidden;
    }

    li {
        font-weight: 400;
        position: relative;

        &:hover {
            @extend %sidebar-hover;
        }

        .tag {
            @include alpha-attribute('background-color', rgba($main, .8), black);
            color: $text;
            @include alpha-attribute('color', rgba($text, .9), black);
            padding: 0 .5em;
            border-radius: 2em;
            margin-left: auto;
            margin-right: .75em;
        }

        a {
            position: relative;
            display: flex;
            align-items: center;
            white-space: nowrap;
            @include alpha-attribute('color', rgba($text, 0.8), white);
            text-decoration: none;
        }

    }

    .icon {
        height: 20px;
        flex-shrink: 0;
        width: 20px;
        padding: 19px;
        margin-right: 5px;
        padding-bottom: 15px;
        @include alpha-attribute('color', rgba($text, .9), black);
    }

    expand:hover {
        @extend %sidebar-hover;
    }
}

.secnav {
    margin-left: 63px;
    border-left: 1px solid rgb(255, 255, 255);
    overflow: hidden;

    li {
        @include alpha-attribute('color', rgba($text, .9), black);
        max-height: 100px;
        transition: max-height .1s;

        @include media-sm {
            max-height: 0px;
            transition: max-height .5s .5s;
        }

        a {
            text-transform: initial;
            display: block;
            color: inherit;
            padding: .75em 10px;
        }
    }
}

.features {
    font-family: 'Lato', sans-serif;
    font-size: 1rem;
    text-transform: uppercase;

    li {
        width: 100%;
        text-align: center;
        padding: .25em;
    }
}



$hamburger: $text;

/** hamburger */

input.hamburger {
    display: none;

    &:checked {
        &~nav.primnav {
            height: 95vh;

            @include media-sm {
                width: 230px;
            }

            .secnav>li {
                @include media-sm {
                    @include transition-max-height;
                    max-height: 100px;
                }
            }
        }

        &~label {
            >i {
                background-color: transparent;
                transform: rotate(90deg);
                margin-left: 170px;
                &:before {
                    transform: translate(-50%, -50%) rotate(45deg);
                }

                &:after {
                    transform: translate(-50%, -50%) rotate(-45deg);
                }
            }

            close {
                color: $hamburger;
                width: 100%;
            }

            open {
                color: rgba(0, 0, 0, 0);
                width: 0;
            }
        }
    }
}

label.hamburger {
    z-index: 9999;
    position: relative;
    display: block;
    height: 24px;
    width: 24px;
    &:hover {
        cursor: pointer;
    }

    text {

        close,
        open {
            text-transform: uppercase;
            align-content: center;
            position: absolute;
            transform: translateY(24px);
            text-align: center;
            overflow: hidden;
            transition: width .25s .35s, color .45s .35s;
            font-size: 6px;
        }

        close {
            color: $text;
            right: 0;
            width: 0;
        }

        open {
            color: $hamburger;
            width: 100%;
        }
    }

    >i {
        position: absolute;
        width: 100%;
        height: 2px;
        top: 50%;
        background-color: $hamburger;
        pointer-events: auto;
        transition-duration: .35s;
        transition-delay: .50s;
        &:before,
        &:after {
            position: absolute;
            display: block;
            width: 100%;
            height: 2px;
            left: 50%;
            background-color: $hamburger;
            content: "";
            transition: transform 0.35s;
            transform-origin: 50% 50%;
        }

        &:before {
            transform: translate(-50%, -7px);
        }

        &:after {
            transform: translate(-50%, 7px);
        }
    }
}

label.hamburger {
    position: fixed;
    top: 22px;
    margin-left: 75px;
}

#logo {
    display: flex;
    justify-content: space-around;
    width: 100%;
    background-color: #172A5F;
    column-gap: 10px;
    height: 10%;
    &__img {
        display: flex;
        justify-content: center;
        align-items: center;
        & img {
            width: 50px;
            height: 45px;
            padding-left: 10px;
            border-radius: 10px;
        }
    }

    &__title {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;
        &__france {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 100%;
            & img {
                width: 32px;
                height: 32px;
            }
        }

        & h1 {
            display: flex;
            align-items: center;
            font-style: italic;
            justify-content: center;
            font-size: 16px;
            height: 100%;
            width: 20%;
        }

        & span {
            color: #fff;
            font-size: 18px;
            font-family: 'made_outer';
        }
    }
    & .secnav {
        margin-left: 0px;
        border: none;
    }
}

#linkToGame {
    & a {
        display: flex;
        align-items: center;
        column-gap: 5px;
        & img {
            width: 20px;
        }
    }
}
#strikers-menu {
    font-family: 'made_outer';
    font-size: 13px;
    font-style: italic;
}
.menu-title {
    font-weight: 600;
    font-style: italic;
}
</style>