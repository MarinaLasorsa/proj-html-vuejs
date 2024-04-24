<template>
    <section class="video-section">
        <div class="container">
            <div class="flex">
                <div class="popup-video">
                    <img src="../../popup-video-poster.jpg" class="video-poster" />
                    <img src="../../icon-youtube-play.png" class="play-icon" />
                </div>
                <div class="popup-paragraph">
                    <p class="medium-font light-purple-font">GET STARTED <span
                            class="dark-purple-font"><strong>EFFORTLESSLY</strong></span></p>
                    <h1 class="big-title">Enjoy our <span class="title-highlight">Companionship</span></h1>
                    <p class="light-purple-font">Sneak peek into what has in store for you on our online teaching and
                        mentoring portal. Seek for some hidden hints of early-bird rewards as well.</p>
                    <p class="link">Download free guidebook &#8594;</p>
                </div>
            </div>
        </div>
        <img src="../../maxcoach-shape-07.png" class="shape sh-square" />
        <img src="../../maxcoach-shape-05.png" class="shape sh-circle" />
        <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="200px" height="202px" viewBox="0 0 200 202"
            class="shape">
            <path class="elementor-shape-fill"
                d="M139.374493,198.087515 C155.702187,206.99353 190.724846,197.001323 197.677982,159.049528 C204.827153,120.027728 184.496324,118.997566 188.045232,104.801934 C202.287755,83.6528313 204.827153,56.662651 190.073179,40.4146034 C153.570125,2.39058926 144.444362,48.0194062 114.025151,20.1351292 C101.727304,7.83728238 83.0989526,-6.73517414 56.2286492,3.40456297 C18.2385839,17.7404371 27.3303985,47.659333 27.3303985,69.3128542 C27.3303985,76.9370868 3.11408002,91.2696589 0.460095291,110.885776 C-2.88628833,135.619549 12.6277797,168.175291 27.3303985,179.329002 C50.6517938,205.692318 86.6478605,199.608476 102.87144,190.482713 C116.802125,182.646702 128.220783,192.003673 139.374493,198.087515 Z">
            </path>
        </svg>
    </section>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.video-section {
    padding-top: 140px;
    padding-bottom: 120px;
    position: relative;

    svg {
        fill: #E5C791;
        width: 160px;
        left: 170px;
        top: 25px;
    }
}

.popup-video {
    position: relative;
    flex-shrink: 0;

    .video-poster {
        width: 100%;
        height: auto;
        border-radius: 5px;
        box-shadow: 0px 40px 30px -20px rgb(209, 209, 209);
    }
}

.play-icon {
    position: absolute;
    z-index: 1;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}

.popup-paragraph {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-left: 40px;
    flex-shrink: 1;
}

.big-title {
    font-size: 45px;
    color: #3f3a64;
    font-weight: bold;
    line-height: 47px;
    padding: 25px 0;
}

.title-highlight {
    color: #20AD96;
    font-weight: lighter;
}

.link {
    font-weight: bold;
    color: #20AD96;
    text-decoration: underline #B1B1B1;
    cursor: pointer;
    margin-top: 40px;
}

.shape {
    position: absolute;
    z-index: -2;
}

.sh-circle {
    z-index: -1;
    left: 140px;
    top: 190px;
}

.sh-square {
    right: 530px;
    bottom: 25px;
    width: 160px;
}
</style>