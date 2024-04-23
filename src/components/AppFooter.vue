<template>
    <footer class="page-footer">
        <div class="container">
            <div class="row">
                <div class="col-6">
                    <h3 class="list-title">Address</h3>
                </div>
                <div class="col-4">
                    <h3 class="list-title">Explore</h3>
                </div>
                <div class="col-2">
                    <h3 class="list-title">Information</h3>
                </div>
            </div>
            <div class="row">
                <div class="col-6">
                    <p class="small-font">382 NE 191st St # 87394 Miami, FL 33179-3899</p>
                    <p class="small-font">+1 (305) 547-9909 (9am - 5pm EST, Monday - Friday)</p>
                    <p class="small-font">support@maxcoach.com</p>
                    <div class="row socials">
                        <font-awesome-icon :icon="['fab', 'square-facebook']" class="social-icon" />
                        <font-awesome-icon :icon="['fab', 'twitter']" class="social-icon" />
                        <font-awesome-icon :icon="['fab', 'instagram']" class="social-icon" />
                        <font-awesome-icon :icon="['fab', 'linkedin']" class="social-icon" />
                    </div>
                </div>
                <ul class="col-2">
                    <li v-for="link in exploreFirstColumn" :key="link.id" class="small-font">{{ link.text }}</li>
                </ul>
                <ul class="col-2">
                    <li v-for="link in exploreSecondColumn" :key="link.id" class="small-font">{{ link.text }}</li>
                </ul>
                <ul class="col-2">
                    <li v-for="link in infoMenu" :key="link.id" class="small-font">{{ link.text }}</li>
                </ul>
            </div>
            <p class="small-font copyright">&copy; 2020 Maxcoach. All Rights Reserved</p>
        </div>
    </footer>
</template>

<script>
export default {
    props: ["exploreMenu", "infoMenu"],
    computed: {
        exploreFirstColumn() {
            return this.exploreMenu.slice(0, 3);

        },
        exploreSecondColumn() {
            return this.exploreMenu.slice(-3);
        }
    }
}
</script>

<style lang="scss" scoped>
.page-footer {
    background-color: #f8f8f8;
    padding: 40px 0;
    color: #696969;
    line-height: 40px;
}

.list-title {
    color: #404040;
}

.socials {
    color: #B1B1B1;
    gap: 27px;
    margin-top: 25px;
}

.social-icon {
    height: 27px;
}

.copyright {
    text-align: center;
    color: #b2b2b2;
    margin-top: 40px;
}
</style>