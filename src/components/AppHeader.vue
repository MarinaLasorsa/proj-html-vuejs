<template>
    <header class="page-header">
        <div class="container">
            <div class="row space-between align-center">
                <img class="main-logo" src="../../dark-logo.png" alt="MaxCoach logo" />
                <nav class="row align-center">
                    <ul class="row">
                        <li v-for="el in menu" :key="el.id" class="px-3">{{ el.text }} <font-awesome-icon
                                :icon="['fas', 'angle-down']" /></li>
                    </ul>
                    <font-awesome-icon :icon="['far', 'circle-user']" />
                    <div class="search-bar">
                        <input type="text" name="search" placeholder="Search..." />
                        <font-awesome-icon :icon="['fas', 'magnifying-glass']" class="search-icon" />
                    </div>
                </nav>
            </div>
        </div>
    </header>
</template>

<script>
export default {
    props: ['menu']


}
</script>

<style lang="scss" scoped>
.page-header {
    padding: 15px 0;
    box-shadow: 0px 5px 10px rgb(241, 241, 241);
}

.main-logo {
    max-width: 150px;
    max-height: 20px;
}

.row li {
    padding: 0 20px;

}

.search-bar {
    position: relative;

    input {
        border: none;
        background-color: #F5F5F5;
        border-radius: 5px;
        line-height: 40px;
        padding: 0 15px;
        margin-left: 20px;
    }

    .search-icon {
        position: absolute;
        top: 12px;
        right: 15px;
        color: #20AD96;
    }
}
</style>