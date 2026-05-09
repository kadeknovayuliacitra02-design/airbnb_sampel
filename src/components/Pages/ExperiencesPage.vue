<template>
    <div class="container">
        <div>
            <div class="d-flex justify-content-between align-items-center flex-wrap">
                <h4>popular experiences in Bali</h4>
                <div class="ms-1 mt-1 box-arrow-right border-0">
                    <i class="bi bi-arrow-right"></i>
                </div>
            </div>
            <div class="row">
                <div class="col-6 col-md-4 col-lg-2" v-for="item in today" :key="item.id">
                    <RouterLink :to="`/detailTrip/${item.id}`" class="box-room p-2 router-style">
                        <img :src="item.img" alt="room1" class="img-fluid img-card">
                        <p><b>{{ item.experience_name }}</b></p>
                        <p class="mt-room fs-des-home">{{ item.price }}, {{ item.min_people }}</p>
                        <div class="d-flex">
                            <i class="bi bi-star-fill mt-room me-1 fs-des-home"></i>
                            <p class="mt-room fs-des-home">{{ item.rate }}</p>
                        </div>
                    </RouterLink>
                </div>
            </div>
        </div>
        <div>
            <div class="d-flex mt-5">
                <h4>tomorrow in Bali</h4>
                <div class="ms-1 mt-1 box-arrow-right border-0">
                    <i class="bi bi-arrow-right"></i>
                </div>
            </div>
            <div class="row">
                <div class="col-6 col-md-4 col-lg-2" v-for="item in tomorrow" :key="item.id">
                    <RouterLink :to="`/detailTrip/${item.id}`" class="box-room p-2 router-style">
                        <img :src="item.img" alt="room1" class="img-fluid img-card">
                        <p><b>{{ item.experience_name }}</b></p>
                        <p class="mt-room fs-des-home">{{ item.price }}, {{ item.min_people }} /people</p>
                        <div class="d-flex">
                            <i class="bi bi-star-fill mt-room me-1 fs-des-home"></i>
                            <p class="mt-room fs-des-home">{{ item.rate }}</p>
                        </div>
                    </RouterLink>
                </div>
            </div>
        </div>
        <div>
            <div class="d-flex mt-5">
                <h4>experience for the weekend</h4>
                <div class="ms-1 mt-1 box-arrow-right border-0">
                    <i class="bi bi-arrow-right"></i>
                </div>
            </div>
            <div class="row">
                <div class="col-6 col-md-4 col-lg-2" v-for="item in weekend" :key="item.id">
                    <RouterLink :to="`/detailTrip/${item.id}`" class="box-room p-2 router-style">
                        <img :src="item.img" alt="room1" class="img-fluid img-card">
                        <p><b>{{ item.experience_name }} </b></p>
                        <p class="mt-room fs-des-home">{{ item.price }}, {{ item.min_people }} / people</p>
                        <div class="d-flex">
                            <i class="bi bi-star-fill mt-room me-1 fs-des-home"></i>
                            <p class="mt-room fs-des-home">{{ item.rate }}</p>
                        </div>
                    </RouterLink>
                </div>
            </div>
        </div>
        <div>
            <div class="d-flex mt-5">
                <h4>All Experiences in Bali</h4>
                <div class="ms-1 mt-1 box-arrow-right border-0">
                    <i class="bi bi-arrow-right"></i>
                </div>
            </div>
            <div class="row">
                <div class="col-6 col-md-4 col-lg-2" v-for="item in weekday" :key="item.id">
                    <RouterLink :to="`/detailTrip/${item.id}`" class="box-room p-2 router-style">
                        <img :src="item.img" alt="room1" class="img-fluid img-card">
                        <p><b>{{ item.experience_name }}</b></p>
                        <p class="mt-room fs-des-home">{{ item.price }}, {{ item.min_people }} / people</p>
                        <div class="d-flex">
                            <i class="bi bi-star-fill mt-room me-1 fs-des-home"></i>
                            <p class="mt-room fs-des-home">{{ item.rate }}</p>
                        </div>
                    </RouterLink>
                </div>
            </div>
        </div>
        <h3 class="mt-5">Popular among tourists from your area</h3>
        <div>
            <div class="d-flex mt-5">
                <h4>experience in Denpasar</h4>
                <div class="ms-1 mt-1 box-arrow-right border-0">
                    <i class="bi bi-arrow-right"></i>
                </div>
            </div>
            <div class="row">
                <div class="col-6 col-md-4 col-lg-2" v-for="item in monday" :key="item.id">
                    <RouterLink :to="`/detailTrip/${item.id}`" class="box-room p-2 router-style">
                        <img :src="item.img" alt="room1" class="img-fluid img-card">
                        <p><b>{{ item.experience_name }}</b></p>
                        <p class="mt-room fs-des-home">{{ item.price }}, {{ item.min_people }} / people</p>
                        <div class="d-flex">
                            <i class="bi bi-star-fill mt-room me-1 fs-des-home"></i>
                            <p class="mt-room fs-des-home">{{ item.rate }}</p>
                        </div>
                    </RouterLink>
                </div>
            </div>
        </div>
        <div>
            <div class="d-flex mt-5">
                <h4>experience in Kuala Lumpur</h4>
                <div class="ms-1 mt-1 box-arrow-right border-0">
                    <i class="bi bi-arrow-right"></i>
                </div>
            </div>
            <div class="row">
                <div class="col-6 col-md-4 col-lg-2" v-for="item in airbnb" :key="item.id">
                    <RouterLink :to="`/detailTrip/${item.id}`" class="box-room p-2 router-style">
                        <img :src="item.img" alt="room1" class="img-fluid img-card">
                        <p><b>{{ item.experience_name }}</b></p>
                        <p class="mt-room fs-des-home">{{ item.price }}, {{ item.min_people }} / people</p>
                        <div class="d-flex">
                            <i class="bi bi-star-fill mt-room me-1 fs-des-home"></i>
                            <p class="mt-room fs-des-home">{{ item.rate }}</p>
                        </div>
                    </RouterLink>
                </div>
            </div>
        </div>
        <div>
            <div class="d-flex mt-5">
                <h4>experience in Denpasar</h4>
                <div class="ms-1 mt-1 box-arrow-right border-0">
                    <i class="bi bi-arrow-right"></i>
                </div>
            </div>
            <div class="row">
                <div class="col-6 col-md-4 col-lg-2" v-for="products in 6">
                    <RouterLink to="/detailTrip/:id" class="box-room p-2 router-style">
                        <img src="/src/assets/img/room1.avif" alt="room1" class="img-fluid img-card">
                        <p><b>experience name</b></p>
                        <p class="mt-room fs-des-home">Price / people</p>
                        <div class="d-flex">
                            <i class="bi bi-star-fill mt-room me-1 fs-des-home"></i>
                            <p class="mt-room fs-des-home">Rating</p>
                        </div>
                    </RouterLink>
                </div>
            </div>
        </div>
        <div>
            <div class="d-flex mt-5">
                <h4>experience in Bangkok</h4>
                <div class="ms-1 mt-1 box-arrow-right border-0">
                    <i class="bi bi-arrow-right"></i>
                </div>
            </div>
            <div class="row">
                <div class="col-6 col-md-4 col-lg-2" v-for="products in 6">
                    <RouterLink to="/detailTrip/:id" class="box-room p-2 router-style">
                        <img src="/src/assets/img/room1.avif" alt="room1" class="img-fluid img-card">
                        <p><b>experience name</b></p>
                        <p class="mt-room fs-des-home">Price / people</p>
                        <div class="d-flex">
                            <i class="bi bi-star-fill mt-room me-1 fs-des-home"></i>
                            <p class="mt-room fs-des-home">Rating</p>
                        </div>
                    </RouterLink>
                </div>
            </div>
        </div>
        <div>
            <div class="d-flex mt-5">
                <h4>experience in Tokyo</h4>
                <div class="ms-1 mt-1 box-arrow-right border-0">
                    <i class="bi bi-arrow-right"></i>
                </div>
            </div>
            <div class="row">
                <div class="col-6 col-md-4 col-lg-2" v-for="products in 6">
                    <div class="box-room p-2">
                        <img src="/src/assets/img/room1.avif" alt="room1" class="img-fluid img-card">
                        <p><b>experience name</b></p>
                        <p class="mt-room fs-des-home">Price / people</p>
                        <div class="d-flex">
                            <i class="bi bi-star-fill mt-room me-1 fs-des-home"></i>
                            <p class="mt-room fs-des-home">Rating</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>
<script setup>
import axios from "axios";
import { ref, onMounted } from "vue";

const today = ref([]);
const tomorrow = ref([]);
const weekend = ref([]);
const weekday = ref([]);
const monday = ref([]);
const airbnb = ref([]);
onMounted(async () => {
    const res = await axios.get(`${import.meta.env.VITE_API_URL}/experiences`)

    today.value = res.data.today
    weekend.value = res.data.weekend
    tomorrow.value = res.data.tomorrow
    weekday.value = res.data.weekday
    monday.value = res.data.monday
    airbnb.value = res.data.airbnb

});
</script>