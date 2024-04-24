<template>
    <section class="newsletter-section">
        <div class="container-sm">
            <div class="text-align-center">
                <h2 class="section-title">Subscribe <span class="title-highlight">Newsletters</span></h2>
                <p class="light-purple-font medium-font">Enter your email address to register to our newsletter
                    subscription delivered on a regular basis!
                </p>
                <div class="input-group">
                    <input type="email" class="input-bar" placeholder="Enter your email" />
                    <button type="submit" class="brand-button">Subscribe</button>
                </div>
            </div>
        </div>
        <img src="../../maxcoach-shape-02.png" class="shape sh-circle" />
        <img src="../../maxcoach-shape-09.png" class="shape sh-rhombus" />
    </section>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.newsletter-section {
    padding: 80px 0;
    position: relative;

    p {
        margin-bottom: 30px;
    }
}

.section-title {
    color: #3F3A64;
    font-size: 30px;
    padding: 10px 0;
}

.title-highlight {
    color: #20AD96;
    font-weight: lighter;
}

.input-group {
    display: flex;
    align-items: center;
}

.input-bar {
    flex-grow: 1;
    border: none;
    background-color: #F5F5F5;
    border-radius: 5px 0 0 5px;
    line-height: 45px;
    padding: 0 15px;
}

.brand-button {
    background-color: #20AD96;
    color: white;
    border: none;
    border-radius: 0 5px 5px 0;
    padding: 15px 30px;
    font-weight: bold;
    cursor: pointer;

    &:hover {
        background-color: #3f3a64;
    }
}

.shape {
    position: absolute;
}

.sh-circle {
    right: 190px;
    bottom: 80px;
    z-index: 2;
}

.sh-rhombus {
    right: 200px;
    bottom: 130px;
    z-index: 1;
    width: 180px;
}
</style>