<template>
    <header class="page-header">
        <div class="container">
            <div class="row space-between align-center">
                <img class="main-logo" src="../../dark-logo.png" alt="MaxCoach logo" />
                <nav class="row align-center">
                    <ul class="row">
                        <li v-for="el in menu" :key="el.id" :class="[el.text === 'Pages' ? 'dropdown' : ''
                        ]">{{
                            el.text }} <font-awesome-icon :icon="['fas', 'angle-down']" />
                            <div class="dropdown-content">
                                <a v-for="link in pagesMenu" :key="link.id" rel="noopener" target="_blank" href="#">{{
                                    link.text }}</a>
                            </div>
                        </li>
                    </ul>
                    <font-awesome-icon :icon="['far', 'circle-user']" class="user-icon" />
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
    props: ['menu', 'pagesMenu']


}
</script>

<style lang="scss" scoped>
.page-header {
    box-shadow: 0px 5px 10px rgb(241, 241, 241);
}

.main-logo {
    max-width: 150px;
    max-height: 20px;
}

.row li {
    padding: 20px 20px;
    color: #404040;
}

.dropdown {
    position: relative;

    &:hover {
        color: #20AD96;
        text-decoration: underline #20AD96;
    }
}

.dropdown-content {
    display: none;
    background-color: white;
    width: 200px;
    color: #696969;
    font-size: 15px;
    padding: 15px 20px;
    border-bottom: 3px solid #20AD96;
    position: absolute;
    top: 100%;

    box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.2);
    z-index: 1;
}

.dropdown:hover .dropdown-content {
    display: block;
}

.dropdown-content a {
    display: block;
    line-height: 35px;

    &:hover {
        color: #20AD96;
    }
}

.user-icon {
    color: #404040;
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