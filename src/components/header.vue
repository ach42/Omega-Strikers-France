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
                    <localized-link to="/">
                    <img class="icon" src="../assets/logo.webp">
                    </localized-link>
                </li>
                <li>
                    <localized-link to="/strikers">
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
                    <a href="#notifications">
                        <svg class="icon">
                            <use xlink:href="#icon-bell2"></use>
                        </svg> Notifications
                        <div class="tag">17</div>
                    </a>
                </li>
                <li>
                    <a href="#sysadmin">
                        <svg class="icon">
                            <use xlink:href="#icon-equalizer"></use>
                        </svg> System Administration
                    </a>
                    <ul class="secnav">
                        <li>
                            <a href="#users">Users</a>
                        </li>
                        <li>
                            <a href="#lists">Lists</a>
                        </li>
                        <li>
                            <a href="#calendar">Calendar</a>
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
$main: #101D42;
$dark: mix(black, $main, 20%);

// select font color
$text: getColor($main);

%sidebar-hover {
    @include alpha-attribute('background-color', rgba($main, 0.6), white);
}

.primnav {
    position: fixed;
    height: 58px;
    width: 100vw;
    font-size: .8em;
    text-transform: uppercase;
    background-color: lighten($main, 5%);
    display: flex;
    flex-direction: column;
    transition: height 246ms .5s ease;
    padding-top: 58px;
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
    border-left: 1px solid black;
    @include alpha-attribute('border-left-color', rgba($main, .9), black);
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


/**
    SCROLLBAR STYLE FOR IE
*/

body {
    scrollbar-base-color: $main;
    scrollbar-3dlight-color: #fff;
    scrollbar-highlight-color: $main;
    scrollbar-track-color: $main;
    scrollbar-arrow-color: $main;
    scrollbar-shadow-color: $main;
    scrollbar-dark-shadow-color: $main;
    -ms-overflow-style: -ms-autohiding-scrollbar;
}

.icon {
    display: inline-block;
    width: 5vw;
    height: 4vw;
    stroke-width: 0;
    stroke: currentColor;
    fill: currentColor;
}

$hamburger: $text;

/** hamburger */

input.hamburger {
    display: none;

    &:checked {
        &~nav.primnav {
            height: 100vh;

            @include media-sm {
                width: 275px;
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
            align-text: center;
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
        transition-delay: .35s;

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
    top: 14px;
    left: 17px;
}


</style>