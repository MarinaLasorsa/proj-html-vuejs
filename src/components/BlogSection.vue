<template>
    <section class="blogs-section">
        <div class="container">
            <div class="row">
                <div class="col-4">
                    <p class="medium-font light-purple-font">ENJOYABLE INSIGHTS</p>
                    <h2 class="section-title">Most Viewed <span class="title-highlight">Best Blogs</span></h2>
                    <ul>
                        <li class="blogs-list dark-purple-font"><span>&#8594;</span>
                            <p>Become a Better Blogger: Content Planning</p>
                        </li>
                        <li class="blogs-list dark-purple-font"><span>&#8594;</span>
                            <p>Promoting your Online Business on Pinterest</p>
                        </li>
                        <li class="blogs-list dark-purple-font"><span>&#8594;</span>
                            <p>Gamification and Game-Based Learning</p>
                        </li>
                        <li class="blogs-list dark-purple-font"><span>&#8594;</span>
                            <p>Designing an Online Course from Expert's Perspective</p>
                        </li>
                        <li class="blogs-list dark-purple-font"><span>&#8594;</span>
                            <p>Why Online Courses Are the Future of Education</p>
                        </li>
                    </ul>
                </div>
                <div class="col-4">
                    <div class="blog-card">
                        <img src="../../artist-blog-01.jpeg" />
                        <div class="card-body">
                            <p class="medium-font light-purple-font">ARTIST</p>
                            <p class="small-title">Brush Strokes Energize Trees in Paintings</p>
                            <div class="blog-info light-purple-font">
                                <div><font-awesome-icon :icon="['far', 'calendar']" /> <span class="small-font">May
                                        15, 2020</span>
                                </div>
                                <div><font-awesome-icon :icon="['far', 'eye']" /> <span class="small-font">688
                                        Views</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-4">
                    <div class="blog-card">
                        <img src="../../artist-blog-02.jpg" />
                        <div class="card-body">
                            <p class="medium-font light-purple-font">ARTIST</p>
                            <p class="small-title">Pocket-Sized Notebooks Hold Miniature Paintings</p>
                            <div class="blog-info light-purple-font">
                                <div><font-awesome-icon :icon="['far', 'calendar']" /> <span class="small-font">May
                                        15, 2020</span>
                                </div>
                                <div><font-awesome-icon :icon="['far', 'eye']" /> <span class="small-font">603
                                        Views</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.blogs-section {
    background-color: #F5F1ED;
    padding: 80px 0;

}

.section-title {
    color: #3F3A64;
    font-size: 30px;
    margin-bottom: 30px;
    padding: 10px 0;
}

.title-highlight {
    color: #20AD96;
    font-weight: lighter;
}

.blogs-list {
    display: flex;
    font-weight: bold;
    margin-bottom: 30px;

    p {
        margin-left: 15px;
    }
}

.blog-card {
    background-color: white;
    border-radius: 8px;
    overflow: hidden;
    margin-top: 30px;
    margin-left: 40px;

    img {
        width: 100%;
        height: auto;
    }

    .card-body {
        padding: 30px;
    }
}

.small-title {
    font-size: 20px;
    color: #3f3a64;
    font-weight: bold;
    line-height: 30px;
}

.blog-info {
    display: flex;
    gap: 20px;
    margin-top: 20px;
}
</style>