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
                            <span class="teal-font"><strong>Get free sample &#8594;</strong></span>
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
    </section>
</template>

<script>
export default {

}
</script>


<style lang="scss" scoped>
.page-hero {
    padding: 40px 0;

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

.big-title {
    font-size: 40px;
    color: #3f3a64;
    font-weight: bold;
    line-height: 43px;
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
}
</style>