<template>
    <section class="courses-section">
        <div class="container">
            <div class="text-align-center">
                <p class="medium-font light-purple-font">STIMULATED TO LEARN?</p>
                <h2 class="section-title">Featured Online Courses</h2>
            </div>
            <div class="row">
                <ul v-for="course in coursesFirstColumn" :key="course.id" class="col-6">
                    <CourseCard :course="course" />
                </ul>
                <ul v-for="course in coursesSecondColumn" :key="course.id" class="col-6">
                    <CourseCard :course="course" />
                </ul>
            </div>
        </div>
    </section>
</template>

<script>
import CourseCard from './CourseCard.vue';

export default {
    components: {
        CourseCard,
    },
    data() {
        return {
            courses: [
                {
                    id: 1,
                    name: "Learning to Write as a Professional Author",
                    price: "$40,00",
                    lessons: 20,
                    students: 50,
                },
                {
                    id: 2,
                    name: "Open Programming Courses for Everyone: Python",
                    price: "$19,00",
                    lessons: 17,
                    students: 62,
                },
                {
                    id: 3,
                    name: "Master JQuery in a Short Period of Time",
                    price: "$39,00",
                    lessons: 6,
                    students: 51,
                },
                {
                    id: 4,
                    name: "Customer-centric Info-Tech Strategies",
                    price: "Free",
                    lessons: 24,
                    students: 769,
                },
                {
                    id: 5,
                    name: "Academic Listening and Note-taking",
                    price: "$26,00",
                    lessons: 14,
                    students: 67,
                },
                {
                    id: 6,
                    name: "Introduction to Javascript for Beginners",
                    price: "$59,00",
                    lessons: 14,
                    students: 76,
                }
            ]
        }
    },
    computed: {
        coursesFirstColumn() {
            return this.courses.slice(0, 3);

        },
        coursesSecondColumn() {
            return this.courses.slice(-3);
        }
    }
}
</script>

<style lang="scss" scoped>
.courses-section {
    background-color: #F5F7FA;
    padding: 80px 0;
}

.section-title {
    color: #3F3A64;
    font-size: 30px;

}
</style>