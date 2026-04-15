<template>
    <div v-if="detail" class="container">
        <div class="d-flex flex-column row flex-md-row justify-content-between gap-3">
            <div class="col-12 col-md-4">
                <div class="text-center">
                    <img :src="detail.img1" alt=" img1" class="img-fluid w-100">
                    <img :src="detail.img_host" alt="img2" class="img-fluid img-host">
                    <h3>{{detail.service_name}}</h3>
                    <p>{{detail.description}}</p>
                    <div class="ms-md-5">
                        <ul class="d-flex flex-column flex-md-row gap-2">
                            <li class=""><i class="bi bi-star">{{detail.rate}}</i></li>
                            <li class="ms-md-4">
                                <p>{{detail.review}} reviews</p>
                            </li>
                            <li class="ms-md-4">{{detail.service}}</li>
                        </ul>
                    </div>
                    <p>{{detail.information}}</p>
                    <div class="d-flex justify-content-center gap-3">
                        <i class="fa-solid fa-up-right-from-square mt-1 me-2" style="color: #2a2727c9;"></i>
                        <i class="bi bi-heart ms-md-4"></i>
                    </div>
                </div>
                <div class="box-price-trip mt-3">
                    <div class="d-flex flex-column flex-md-row justify-content-between gap-3">
                        <div>
                            <div class="d-flex">
                                <h6>Start Rp. {{ detail.price }}</h6>
                                <p class="ms-md-1">/ Guest</p>
                            </div>
                            <p class="mt-room" style="color: red;">Free cancellation</p>
                        </div>
                        <button class="btn-date-trip border-0">Show Dates</button>
                    </div>
                </div>
            </div>
            <div class="col-12 col-md-6">
                <div>
                    <div class="box-service">
                       <div class="d-flex flex-column flex-sm-row gap-3 mt-3">
                            <img :src="detail.img_service1" alt="service" class="img-fluid img-service">
                            <div class="ms-md-3">
                                <h6>{{detail.service_recomend1}}</h6>
                                <p>{{detail.des_service1}}</p>
                                <p>{{detail.price1}} / guest , time</p>
                            </div>
                        </div>
                    </div>
                    <div class="box-service mt-4">
                        <div class=" d-flex mt-3">
                            <img :src="detail.img_service2" alt="service" class="img-fluid img-service">
                            <div class="ms-md-3">
                                <h6>{{detail.service_recomend2}}</h6>
                                <p>{{detail.des_service2}}</p>
                                <p>{{detail.price2}} / guest , time</p>
                            </div>
                        </div>
                    </div>
                    <div class="box-service mt-4">
                        <div class=" d-flex mt-3">
                            <img :src="detail.img_service3" alt="service" class="img-fluid img-service">
                            <div class="ms-md-3">
                                <h6>{{detail.service_recomend3}}</h6>
                                <p>{{detail.des_service3}}</p>
                                <p>{{detail.price3}} / guest , time</p>
                            </div>
                        </div>
                    </div>
                    <div class="box-service mt-4">
                        <div class=" d-flex mt-3">
                            <img :src="detail.img_service4" alt="service" class="img-fluid img-service">
                            <div class="ms-md-3">
                                <h6>{{detail.service_recomend4}}</h6>
                                <p>{{detail.des_service4}}</p>
                                <p>{{detail.price4}} / guest , time</p>
                            </div>
                        </div>
                    </div>
                    <div class="box-service mt-4">
                        <div class=" d-flex mt-3">
                            <img :src="detail.img_service5" alt="service" class="img-fluid img-service">
                            <div class="ms-md-3">
                                <h6>{{detail.service_recomend5}}</h6>
                                <p>{{detail.des_service5}}</p>
                                <p>{{detail.price5}} / guest , time</p>
                            </div>
                        </div>
                    </div>
                    <div class="box-service mt-4">
                        <div class=" d-flex mt-3">
                            <img :src="detail.img_service6" alt="service" class="img-fluid img-service">
                            <div class="ms-md-3">
                                <h6>{{detail.service_recomend6}}</h6>
                                <p>{{detail.des_service6}}</p>
                                <p>{{detail.price6}} / guest , time</p>
                            </div>
                        </div>
                    </div>
                </div>
                <button class="btn-show border-0"> Show all</button>
                <p class="mt-5">You can message Sri to customize or make changes.</p>
                <hr class="mt-5">
                <div class="ms-md-5">
                    <ul class="d-flex">
                        <li class="fs-3"><b><i class="bi bi-star">{{detail.rate}}</i></b></li>
                        <li class="ms-md-5">
                            <p class="fs-3"><b>{{detail.review}} reviews</b></p>
                        </li>
                    </ul>
                </div>
                <div>
                    <div class="d-flex flex-column flex-md-row justify-content-between gap-3">
                        <div class="mt-5">
                            <div class="d-flex">
                                <img src="" alt="img">
                                <div class="ms-3">
                                    <p>name</p>
                                    <p class="mt-room">time join</p>
                                </div>
                            </div>
                            <div class="d-flex">
                                <div class="d-flex" style="font-size: 10px;">
                                    <i class="bi bi-star"></i>
                                    <i class="bi bi-star"></i>
                                    <i class="bi bi-star"></i>
                                    <i class="bi bi-star"></i>
                                    <i class="bi bi-star"></i>
                                </div>
                                <p class="ms-3">time review</p>
                            </div>
                            <p>Semua terasa nyaman namun kasur kurang nyaman, badan seperti tersedot kedalam, terasa
                                sakit
                                jikalau
                                harus tidur berhari2 di kasur tersebut, namun kami hanya menginap sat</p>
                            <p><u>Show more</u></p>
                        </div>
                        <div class="mt-5">
                            <div class="d-flex">
                                <img src="" alt="img">
                                <div class="ms-3">
                                    <p>name</p>
                                    <p class="mt-room">time join</p>
                                </div>
                            </div>
                            <div class="d-flex">
                                <div class="d-flex" style="font-size: 10px;">
                                    <i class="bi bi-star"></i>
                                    <i class="bi bi-star"></i>
                                    <i class="bi bi-star"></i>
                                    <i class="bi bi-star"></i>
                                    <i class="bi bi-star"></i>
                                </div>
                                <p class="ms-3">time review</p>
                            </div>
                            <p>Semua terasa nyaman namun kasur kurang nyaman, badan seperti tersedot kedalam, terasa
                                sakit
                                jikalau
                                harus tidur berhari2 di kasur tersebut, namun kami hanya menginap sat</p>
                            <p><u>Show more</u></p>
                        </div>
                    </div>
                    <div class="d-flex flex-column flex-md-row justify-content-between gap-3">
                        <div class="mt-5">
                            <div class="d-flex">
                                <img src="" alt="img">
                                <div class="ms-3">
                                    <p>name</p>
                                    <p class="mt-room">time join</p>
                                </div>
                            </div>
                            <div class="d-flex">
                                <div class="d-flex" style="font-size: 10px;">
                                    <i class="bi bi-star"></i>
                                    <i class="bi bi-star"></i>
                                    <i class="bi bi-star"></i>
                                    <i class="bi bi-star"></i>
                                    <i class="bi bi-star"></i>
                                </div>
                                <p class="ms-3">time review</p>
                            </div>
                            <p>Semua terasa nyaman namun kasur kurang nyaman, badan seperti tersedot kedalam, terasa
                                sakit
                                jikalau
                                harus tidur berhari2 di kasur tersebut, namun kami hanya menginap sat</p>
                            <p><u>Show more</u></p>
                        </div>
                        <div class="mt-5">
                            <div class="d-flex">
                                <img src="" alt="img">
                                <div class="ms-3">
                                    <p>name</p>
                                    <p class="mt-room">time join</p>
                                </div>
                            </div>
                            <div class="d-flex">
                                <div class="d-flex" style="font-size: 10px;">
                                    <i class="bi bi-star"></i>
                                    <i class="bi bi-star"></i>
                                    <i class="bi bi-star"></i>
                                    <i class="bi bi-star"></i>
                                    <i class="bi bi-star"></i>
                                </div>
                                <p class="ms-3">time review</p>
                            </div>
                            <p>Semua terasa nyaman namun kasur kurang nyaman, badan seperti tersedot kedalam, terasa
                                sakit
                                jikalau
                                harus tidur berhari2 di kasur tersebut, namun kami hanya menginap sat</p>
                            <p><u>Show more</u></p>
                        </div>
                    </div>
                    <div class="d-flex flex-column flex-md-row justify-content-between gap-3">
                        <div class="mt-5">
                            <div class="d-flex">
                                <img src="" alt="img">
                                <div class="ms-3">
                                    <p>name</p>
                                    <p class="mt-room">time join</p>
                                </div>
                            </div>
                            <div class="d-flex">
                                <div class="d-flex" style="font-size: 10px;">
                                    <i class="bi bi-star"></i>
                                    <i class="bi bi-star"></i>
                                    <i class="bi bi-star"></i>
                                    <i class="bi bi-star"></i>
                                    <i class="bi bi-star"></i>
                                </div>
                                <p class="ms-3">time review</p>
                            </div>
                            <p>Semua terasa nyaman namun kasur kurang nyaman, badan seperti tersedot kedalam, terasa
                                sakit
                                jikalau
                                harus tidur berhari2 di kasur tersebut, namun kami hanya menginap sat</p>
                            <p><u>Show more</u></p>
                        </div>
                        <div class="mt-5">
                            <div class="d-flex">
                                <img src="" alt="img">
                                <div class="ms-3">
                                    <p>name</p>
                                    <p class="mt-room">time join</p>
                                </div>
                            </div>
                            <div class="d-flex">
                                <div class="d-flex" style="font-size: 10px;">
                                    <i class="bi bi-star"></i>
                                    <i class="bi bi-star"></i>
                                    <i class="bi bi-star"></i>
                                    <i class="bi bi-star"></i>
                                    <i class="bi bi-star"></i>
                                </div>
                                <p class="ms-3">time review</p>
                            </div>
                            <p>Semua terasa nyaman namun kasur kurang nyaman, badan seperti tersedot kedalam, terasa
                                sakit
                                jikalau
                                harus tidur berhari2 di kasur tersebut, namun kami hanya menginap sat</p>
                            <p><u>Show more</u></p>
                        </div>
                    </div>
                    <button class="btn-review-service border-0 mt-5">Show all reviews</button>
                    <p class="text-center mt-3"><u>Learn how reviews works</u></p>
                    <p class="text-center mt-3">some reviews have been automatically translated.</p>
                    <hr>
                    <div>
                        <div>
                            <h4>My qualifications</h4>
                            <div class="d-flex mt-3">
                                <div>
                                    <div class="box-host-detail">
                                        <div class="text-center p-4">
                                            <img :src="detail.img_host" alt="host" height="85px">
                                            <h4 class="mt-3">{{detail.host_name}}</h4>
                                            <p class="mt-host-space">exemplary host</p>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div class=" d-flex ms-md-5">
                                        <p>icon</p>
                                        <div class="ms-md-3">
                                            <h6>My qualifications1</h6>
                                            <p class="mt-host-space">Description</p>
                                        </div>
                                    </div>
                                    <div class=" d-flex ms-md-5">
                                        <p>icon</p>
                                        <div class="ms-md-3">
                                            <h6>My qualifications1</h6>
                                            <p class="mt-host-space">Description</p>
                                        </div>
                                    </div>
                                    <div class=" d-flex ms-md-5">
                                        <p>icon</p>
                                        <div class="ms-md-3">
                                            <h6>My qualifications1</h6>
                                            <p class="mt-host-space">Description</p>
                                        </div>
                                    </div>
                                    <div class=" d-flex ms-md-5">
                                        <p>icon</p>
                                        <div class="ms-md-3">
                                            <h6>My qualifications1</h6>
                                            <p class="mt-host-space">Description</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <button class="btn-review-service mt-4 border-0">Message host name</button>
                            <p class="mt-3 text-center">To help protect your payment, always use Airbnb to send money
                                and
                                communicate with hosts.</p>
                            <hr>
                            <div>
                                <h4>My Portofolio</h4>
                                <div class="d-flex flex-column flex-md-row gap-3">
                                    <img src="" alt="portofolio1">
                                    <div>
                                        <img src="" alt="portofolio2">
                                        <img src="" alt="portofolio3">
                                    </div>
                                </div>
                            </div>
                            <hr>
                            <div>
                                <h4>Where you’ll go</h4>
                                <p>descripsi location</p>
                                <div>
                                    <p>map</p>
                                </div>
                            </div>
                            <hr>
                            <div>
                                <h4>Things to know</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
import axios from 'axios';
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';


const detail = ref(null)
const route = useRoute()

onMounted(async()=>{
    const res = await axios.get(
        `http://127.0.0.1:8000/api/detail_services/${route.params.id}`
    )
    detail.value = res.data
})
</script>