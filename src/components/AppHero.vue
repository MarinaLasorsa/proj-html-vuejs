<template>
    <section class="page-hero">
        <div class="container">
            <div class="row">
                <div class="col-6">
                    <div class="hero-paragraph">
                        <h1 class="big-title">Distant learning for further expansion</h1>
                        <p class="medium-font light-purple-font">
                            Learning is a life-long journey that in fact we never find the terminate
                            stop. Stop searching,
                            enjoy the process.
                        </p>
                        <button type="button" class="download-button"><font-awesome-icon :icon="['fas', 'download']" />
                            Download free guide
                        </button>
                        <p class="light-purple-font small-font">Have questions?
                            <span class="link">Get free sample &#8594;</span>
                        </p>
                    </div>
                </div>

                <div class="col-6">
                    <img src="../../about-me-profile.jpg" class="hero-img" />
                </div>
            </div>
            <div class="client-logos">
                <img src="../../client-logo-01.png" />
                <img src="../../client-logo-02.png" />
                <img src="../../client-logo-03.png" />
                <img src="../../client-logo-04.png" />
                <img src="../../client-logo-05.png" />
                <img src="../../client-logo-06.png" />
            </div>
        </div>
        <img src="../../maxcoach-shape-02.png" class="shape sh-circle" />
        <img src="../../maxcoach-shape-07.png" class="shape sh-square" />
        <img src="../../maxcoach-shape-08.png" class="shape sh-rectangle-top" />
        <img src="../../maxcoach-shape-08.png" class="shape sh-rectangle-bottom" />
    </section>
</template>

<script>
export default {

}
</script>


<style lang="scss" scoped>
.page-hero {
    padding: 45px 0;
    position: relative;

    .hero-img {
        border-radius: 50%;
    }

    .hero-paragraph {
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        margin-right: 20px;
    }

    p {
        margin-top: 20px;
        margin-bottom: 25px;
    }

    .client-logos {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-top: 20px;
    }
}

.shape {
    position: absolute;
    z-index: -1;
}

.sh-circle {
    right: 110px;
    top: 150px;
    width: 120px;
}

.sh-square {
    right: 280px;
    bottom: 160px;
}

.sh-rectangle-top {
    right: 630px;
    top: 180px;
    height: 120px;
}

.sh-rectangle-bottom {
    right: 630px;
    top: 315px;
    height: 120px;
}

.big-title {
    font-size: 45px;
    color: #3f3a64;
    font-weight: bold;
    line-height: 47px;
}

.download-button {
    background-color: #20AD96;
    color: white;
    border: none;
    border-radius: 5px;
    line-height: 45px;
    width: 250px;
    font-weight: bold;
    cursor: pointer;

    &:hover {
        background-color: #3f3a64;
    }
}

.link {
    font-weight: bold;
    color: #20AD96;
    text-decoration: underline #B1B1B1;
    cursor: pointer;
}
</style>