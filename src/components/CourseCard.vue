<template>
    <div class="course-card">
        <div class="flex">
            <div class="wrapper">
                <img :src="`../../course-${course.id}.jpg `" />
            </div>
            <div class="course-info">
                <p class="price">
                    <strong>{{ course.price }}</strong>
                </p>
                <p class="small-title">
                    {{ course.name }}
                </p>
                <div class="course-numbers light-purple-font">
                    <div><font-awesome-icon :icon="['far', 'file-lines']" /> <span class="small-font">{{ course.lessons
                            }}
                            Lessons</span>
                    </div>
                    <div><font-awesome-icon :icon="['far', 'user']" /> <span class="small-font">{{ course.students }}
                            Students</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ['course'],


}
</script>

<style lang="scss" scoped>
.course-card {
    padding: 20px 20px;

    &:hover {
        background-color: white;
        border-radius: 5px;
    }
}

.course-card:hover .small-title {
    color: #20AD96;
}

.wrapper {
    width: 150px;
    height: 150px;
    overflow: hidden;
    border-radius: 50%;
    flex-shrink: 0;

    img {
        max-width: 250px;
        margin-bottom: -120px;
        margin-left: -50px;
    }
}

.course-info {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-left: 20px;
}

.price {
    color: #20AD96;
    font-size: 25px;
}

.small-title {
    font-size: 20px;
    color: #3f3a64;
    font-weight: bold;
    line-height: 30px;
}

.course-numbers {
    display: flex;
    gap: 20px;
    margin-top: 10px;
}
</style>