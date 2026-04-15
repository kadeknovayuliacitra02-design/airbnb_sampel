<template>
    <div>
        <div>
            <div class="d-flex">
                <h4>Services in Bali</h4>
                <div class="ms-1 mt-1 box-arrow-right border-0">
                    <i class="bi bi-arrow-right"></i>
                </div>
            </div>
            <div class="row">
                <div class="col-6 col-md-4 col-lg-2" v-for="item in spa" :key="item.id">
                    <RouterLink :to="`/detailService/${item.id}`" class="box-room p-2 router-style">
                        <img :src="item.img" alt="room1" class="img-fluid img-card">
                        <p><b>{{ item.service_name }} </b></p>
                        <p class="mt-room fs-des-home">{{item.price}}/ {{item.min_order}}</p>
                        <div class="d-flex">
                            <i class="bi bi-star-fill mt-room me-1 fs-des-home"></i>
                            <p class="mt-room fs-des-home">{{item.rate}}</p>
                        </div>
                    </RouterLink>
                </div>
            </div>
        </div>
        <div class="mt-5">
            <h3>Find service in Airbnb</h3>
            <div class="d-flex mt-5">
                <h4>Chef</h4>
                <div class="ms-1 mt-1 box-arrow-right border-0">
                    <i class="bi bi-arrow-right"></i>
                </div>
            </div>
            <div class="row">
                <div class="col-6 col-md-4 col-lg-2" v-for="item in chef" :key="item.id">
                   <RouterLink :to="`/detailService/${item.id}`" class="box-room p-2 router-style">
                        <img :src="item.img" alt="room1" class="img-fluid img-card">
                        <p><b>{{item.service_name}}</b></p>
                        <p class="mt-room fs-des-home">{{item.price}} /{{ item.min_order }}</p>
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
                <h4>Sports</h4>
                <div class="ms-1 mt-1 box-arrow-right border-0">
                    <i class="bi bi-arrow-right"></i>
                </div>
            </div>
            <div class="row">
                <div class="col-6 col-md-4 col-lg-2" v-for="item in sport" :key="item.id">
                    <RouterLink :to="`/detailService/${item.id}`" class="box-room p-2 router-style">
                        <img :src="item.img" alt="room1" class="img-fluid img-card">
                        <p><b>{{ item.service_name }}</b></p>
                        <p class="mt-room fs-des-home">{{item.price}} / {{item.min_order}}</p>
                        <div class="d-flex">
                            <i class="bi bi-star-fill mt-room me-1 fs-des-home"></i>
                            <p class="mt-room fs-des-home">{{item.rate}}</p>
                        </div>
                    </RouterLink>
                </div>
            </div>
        </div>
        <div>
            <div class="d-flex mt-5">
                <h4>makeup</h4>
                <div class="ms-1 mt-1 box-arrow-right border-0">
                    <i class="bi bi-arrow-right"></i>
                </div>
            </div>
            <div class="row">
                <div class="col-6 col-md-4 col-lg-2" v-for="item in makeup" :key="item.id">
                    <RouterLink :to="`/detailService/${item.id}`" class="box-room p-2 router-style">
                        <img :src="item.img" alt="room1" class="img-fluid img-card">
                        <p><b>{{ item.service_name }}</b></p>
                        <p class="mt-room fs-des-home">{{item.price}} / {{item.min_order}}</p>
                        <div class="d-flex">
                            <i class="bi bi-star-fill mt-room me-1 fs-des-home"></i>
                            <p class="mt-room fs-des-home">{{item.rate}}</p>
                        </div>
                    </RouterLink>
                </div>
            </div>
        </div>
        <div>
            <div class="d-flex mt-5">
                <h4>Photography</h4>
                <div class="ms-1 mt-1 box-arrow-right border-0">
                    <i class="bi bi-arrow-right"></i>
                </div>
            </div>
            <div class="row">
                <div class="col-6 col-md-4 col-lg-2" v-for="item in photography" :key="item.id">
                    <RouterLink :to="`/detailService/${item.id}`" class="box-room p-2 router-style">
                        <img :src="item.img" alt="room1" class="img-fluid img-card">
                        <p><b>{{ item.service_name }}</b></p>
                        <p class="mt-room fs-des-home">{{item.price}} / {{item.min_order}}</p>
                        <div class="d-flex">
                            <i class="bi bi-star-fill mt-room me-1 fs-des-home"></i>
                            <p class="mt-room fs-des-home">{{item.rate}}</p>
                        </div>
                    </RouterLink>
                </div>
            </div>
        </div>
        <div>
            <div class="d-flex mt-5">
                <h4>Hair</h4>
                <div class="ms-1 mt-1 box-arrow-right border-0">
                    <i class="bi bi-arrow-right"></i>
                </div>
            </div>
            <div class="row">
                <div class="col-6 col-md-4 col-lg-2" v-for="item in hair" :key="item.id">
                    <RouterLink :to="`/detailService/${item.id}`" class="box-room p-2 router-style">
                        <img :src="item.img" alt="room1" class="img-fluid img-card">
                        <p><b>{{ item.service_name }}</b></p>
                        <p class="mt-room fs-des-home">{{item.price}} / {{item.min_order}}</p>
                        <div class="d-flex">
                            <i class="bi bi-star-fill mt-room me-1 fs-des-home"></i>
                            <p class="mt-room fs-des-home">{{item.rate}}</p>
                        </div>
                    </RouterLink>
                </div>
            </div>
        </div>
    </div>
    
</template>
<script setup>
import axios from "axios";
import { ref, onMounted } from "vue";

const spa = ref([]);
const photography = ref([]);
const chef = ref([]);
const sport = ref([]);
const makeup = ref([]);
const hair = ref([]);

onMounted(async() => {
    const res = await axios.get('http://127.0.0.1:8000/api/services')

    spa.value = res.data.spa
    photography.value = res.data.photography
    sport.value = res.data.sport
    makeup.value = res.data.makeup
    hair.value = res.data.hair
    chef.value = res.data.chef
});
</script>