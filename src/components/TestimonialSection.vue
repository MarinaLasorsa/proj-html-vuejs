<template>
    <section class="testimonials-section">
        <div class="text-align-center">
            <p class="medium-font light-purple-font">GREAT WORDS ABOUT MAXCOACH</p>
            <h2 class="section-title">Our <span class="title-highlight">top learners'</span> verbatim</h2>
        </div>
        <div class="row">
            <div class="col-4">
                <div class="testimonial-card">
                    <p class="small-title">It's a choice of quality for people with special needs</p>
                    <p class="light-purple-font">I'm a very strict person so I require everything to be organized and
                        neat. Then, I'll be able to make things right and shine. MaxCoach guys just got me.
                    </p>
                    <div class="flex">
                        <img src="../../testimonial-avatar-01.jpg" class="testimonial-avatar" />
                        <div class="testimonial-info">
                            <p class="small-font dark-purple-font"><strong>FLORENCE THEMES</strong></p>
                            <p class="small-font light-purple-font">/ Multimedia Admin</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-4">
                <div class="testimonial-card active">
                    <p class="small-title">High level of efficiency and scientific teaching methods</p>
                    <p class="light-purple-font">I am free to learn at my own pace, follow my own schedule and choose
                        the subject I want to learn from the syllabus. Great study portal for people like me.
                    </p>
                    <div class="flex">
                        <img src="../../testimonial-avatar-02.jpg" class="testimonial-avatar" />
                        <div class="testimonial-info">
                            <p class="small-font dark-purple-font"><strong>MINA HOLLACE</strong></p>
                            <p class="small-font light-purple-font">/ Freelancer</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-4">
                <div class="testimonial-card">
                    <p class="small-title">Professional team of specialists and passionate mentors at reach</p>
                    <p class="light-purple-font">I need to get a certification for English proficiency and MaxCoach is
                        my best choice. Their tutors are smart and professional when dealing with students.
                    </p>
                    <div class="flex">
                        <img src="../../testimonial-avatar-03.jpg" class="testimonial-avatar" />
                        <div class="testimonial-info">
                            <p class="small-font dark-purple-font"><strong>MADLEY PONDOR</strong></p>
                            <p class="small-font light-purple-font">/ IT Specialist</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="text-align-center flex justify-center align-center">
            <div class="big-dot"><font-awesome-icon :icon="['fas', 'circle']" />
            </div>
            <div class="small-dot"><font-awesome-icon :icon="['fas', 'circle']" />
            </div>
            <div class="small-dot"><font-awesome-icon :icon="['fas', 'circle']" />
            </div>
            <div class="small-dot"><font-awesome-icon :icon="['fas', 'circle']" /></div>
        </div>
        <div class="text-align-center certif-section">
            <h3 class="medium-title">Start today for getting <span class="title-highlight">Online Certification</span>
            </h3>
            <h2 class="section-title">You can be your own guiding star with our help!</h2>
            <button type="button" class="brand-button">Get started now</button>
        </div>
    </section>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.testimonials-section {
    background-color: #f8f8f8;
    padding: 80px 0;
}

.section-title {
    color: #3F3A64;
    font-size: 30px;
    margin-bottom: 40px;
}

.title-highlight {
    color: #20AD96;
    font-weight: lighter;
}

.testimonial-card {
    background-color: white;
    padding: 35px 50px;
    border-radius: 5px;
    margin: 0 20px;
    opacity: 33%;

    .small-title {
        padding-bottom: 25px;
    }

    .flex {
        padding-top: 40px;
        padding-bottom: 20px;
        gap: 20px;
    }
}

.testimonial-card.active {
    opacity: 100%;
}

.small-title {
    font-size: 20px;
    color: #3f3a64;
    font-weight: bold;
    line-height: 30px;
}

.testimonial-avatar {
    border-radius: 50%;
    width: 70px;
}

.testimonial-info {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
}

.big-dot {
    display: inline-block;
    font-size: 15px;
    color: #3F3A64;
    padding: 40px 10px;
}

.small-dot {
    display: inline-block;
    font-size: 10px;
    color: #8C89A2;
    padding: 40px 10px;
}

.certif-section {
    padding: 30px 0;
}

.medium-title {
    color: #3F3A64;
    font-size: 22px;
}

.brand-button {
    background-color: #20AD96;
    color: white;
    border: none;
    border-radius: 5px;
    line-height: 45px;
    font-weight: bold;
    width: 250px;
    cursor: pointer;

    &:hover {
        background-color: #3f3a64;
    }
}
</style>