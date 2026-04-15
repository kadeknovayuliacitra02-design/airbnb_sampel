<template>
    <div v-if="detail" class="p-5">
        <div class="row">
            <div class="col-12 col-md-6">
                <div class="d-flex flex-column flex-md-row">
                    <img :src="detail.img1" alt="" class="img-fluid img-trip-detail p-1">
                    <img :src="detail.img2" alt="" class="img-fluid img-trip-detail-img2 p-1">
                </div>
                <div class="d-flex flex-column flex-md-row">
                    <img :src="detail.img3" alt="" class="img-fluid img-trip-detail p-1">
                    <img :src="detail.img4" alt="" class="img-fluid img-trip-detail p-1">
                </div>
            </div>
            <div class="col-md-6 text-center">
                <h3>{{ detail.information }}</h3>
                <p>Venture through timeless cultural landscapes on a day trip. Marvel at Tukad Cepung and Kanto Lampo
                    waterfalls, take in Tirta Empul Temple, and sit on the famed swing at Tegalalang Rice Terrace.</p>
                <div>
                    <div class="d-flex flex-wrap justify-content-center">
                        <div>
                            <i class="bi bi-star"> {{ detail.rate }}</i>
                        </div>
                        <div class="ms-md-2">
                            <p>{{ detail.review }} reviews</p>
                        </div>
                    </div>
                    <div class="mt-room">
                        <p>{{ detail.city }}, {{ detail.trip_name }}</p>
                    </div>
                </div>
                <div class="d-flex justify-content-center">
                    <i class="fa-solid fa-up-right-from-square mt-1 me-2" style="color: #2a2727c9;"></i>
                    <i class="bi bi-heart ms-md-4"></i>
                </div>
                <hr>
                <div class="p-3">
                    <div class="d-flex">
                        <img :src="detail.host_img" alt="" class="img-fluid img-host-trip-detail">
                        <div class="ms-md-3 text-start">
                            <h6>hosted by , {{ detail.host_name }}</h6>
                            <p class="mt-host-space">{{ detail.host_information }}</p>
                        </div>
                    </div>
                    <div class="d-flex">
                        <div id="map1" style=" border-radius: 10px;"></div>
                        <div class="ms-md-3 text-start">
                            <h6>{{ detail.address }}</h6>
                            <p class="mt-host-space">{{ detail.city }}, country</p>
                        </div>
                    </div>
                    <div class="d-flex">
                        <h6>maps</h6>
                        <div class="ms-md-3 text-start">
                            <h6>address</h6>
                            <p class="mt-host-space">city, country</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="row mt-5">
            <div class="col-md-8">
                <h4>What you’ll do</h4>
                <p class="mt-3">{{ detail.what_you_do }}</p>
                <div class="d-flex mt-5">
                    <img :src="detail.img_step1" alt="step1" class="img-fluid img-step-detail-trip">
                    <div class="ms-md-3">
                        <p>step 1</p>
                        <p class="mt-host-space">{{ detail.step1 }}</p>
                    </div>
                </div>
                <div class="d-flex mt-5">
                    <img src="/src/assets/img/room1.avif" alt="" class="img-fluid img-step-detail-trip">
                    <div class="ms-md-3">
                        <p>step 2</p>
                        <p class="mt-host-space">{{ detail.step2 }}</p>
                    </div>
                </div>
                <div class="d-flex mt-5">
                    <img src="/src/assets/img/room1.avif" alt="" class="img-fluid img-step-detail-trip">
                    <div class="ms-md-3">
                        <p>step 3</p>
                        <p class="mt-host-space">{{ detail.step3 }}</p>
                    </div>
                </div>
                <div class="d-flex mt-5">
                    <img src="/src/assets/img/room1.avif" alt="" class="img-fluid img-step-detail-trip">
                    <div class="ms-3">
                        <p>step 4</p>
                        <p class="mt-host-space">{{ detail.step4 }}</p>
                    </div>
                </div>
                <div class="d-flex mt-5">
                    <img src="/src/assets/img/room1.avif" alt="" class="img-fluid img-step-detail-trip">
                    <div class="ms-md-3">
                        <p>step 5</p>
                        <p class="mt-host-space">{{ detail.step5 }}</p>
                    </div>
                </div>
                <p class="mt-5">This experience is hosted in English.</p>
                <hr>
                <div class="d-flex">
                    <div class="d-flex">
                        <i class="bi bi-star mt-1"></i>
                        <h4 class="ms-md-1">{{ detail.rate }}</h4>
                    </div>
                    <div class="ms-md-4">
                        <div class="d-flex mt-1">
                            <li>
                                <ul style="margin-left: -35px;"> {{ detail.review }} review</ul>
                            </li>
                        </div>
                    </div>
                </div>
                <div>
                    <div class="d-flex flex-column flex-md-row justify-content-between gap-3">
                        <div class="mt-5">
                            <div class="d-flex">
                                <img src="" alt="img">
                                <div class="ms-md-3">
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
                                <p class="ms-md-3">time review</p>
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
                                <div class="ms-md-3">
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
                                <p class="ms-md-3">time review</p>
                            </div>
                            <p>Semua terasa nyaman namun kasur kurang nyaman, badan seperti tersedot kedalam, terasa
                                sakit
                                jikalau
                                harus tidur berhari2 di kasur tersebut, namun kami hanya menginap sat</p>
                            <p><u>Show more</u></p>
                        </div>
                    </div>
                    <div class="d-flex justify-content-between">
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
                    <div class="d-flex justify-content-between">
                        <div class="mt-5">
                            <div class="d-flex">
                                <img src="" alt="img">
                                <div class="ms-md-3">
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
                                <p class="ms-md-3">time review</p>
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
                                <div class="ms-md-3">
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
                                <p class="ms-md-3">time review</p>
                            </div>
                            <p>Semua terasa nyaman namun kasur kurang nyaman, badan seperti tersedot kedalam, terasa
                                sakit
                                jikalau
                                harus tidur berhari2 di kasur tersebut, namun kami hanya menginap sat</p>
                            <p><u>Show more</u></p>
                        </div>
                    </div>
                </div>
                <button class="btn-review border-0 mt-5">Show all reviews</button>
                <p class="text-center mt-3"><u>Learn how reviews works</u></p>
                <p class="text-center mt-3">some reviews have been automatically translated.</p>
                <hr>
                <div class="mt-5">
                    <h4>Where We'll meet</h4>
                    <p>{{ detail.address }}</p>
                    <div id="map2" style="height: 445px; border-radius: 10px;"></div>
                </div>
                <hr>
                <div>
                    <h4>About me</h4>
                    <div class="d-flex mt-3">
                        <div>
                            <div class="box-host-detail">
                                <div class="text-center p-4">
                                    <img :src="detail.host_img" alt="host" height="85px">
                                    <h4 class="mt-3">{{ detail.host_name }}</h4>
                                    <p class="mt-host-space">exemplary host</p>
                                </div>
                            </div>
                        </div>
                        <div class="ms-md-5">
                            <p>{{ detail.host_description }}</p>
                        </div>
                    </div>
                    <button class="btn-message-host mt-4 border-0">Message host name</button>
                    <p class="mt-3">To help protect your payment, always use Airbnb to send money and communicate with
                        hosts.</p>
                </div>
            </div>
            <div class="col-md-4">
                <div class="box-price-trip">
                    <div class="d-flex justify-content-between">
                        <div>
                            <div class="d-flex">
                                <h6>Start Rp. {{ detail.price }}</h6>
                                <p class="ms-md-1">/ {{ detail.min_people }} Guest</p>
                            </div>
                            <p class="mt-room" style="color: red;">Free cancellation</p>
                        </div>
                        <button class="btn-date-trip border-0">Show Dates</button>
                    </div>
                </div>
                <div class="">
                    <div class="w-100 mt-2">
                        <div class="box-price">
                            <div>
                                <div class="box-dates">
                                    <h5>Today, 10 april 2026</h5>
                                    <div class="d-flex justify-content-between">
                                        <p>14.00 - 18.00</p>
                                        <p><b>10 Spot Avalable</b></p>
                                    </div>
                                </div>
                                <div class="box-dates mt-2">
                                    <h5>Today, 10 april 2026</h5>
                                    <div class="d-flex justify-content-between">
                                        <p>14.00 - 18.00</p>
                                        <p><b>10 Spot Avalable</b></p>
                                    </div>
                                </div>
                                <div class="box-dates mt-2">
                                    <h5>Today, 10 april 2026</h5>
                                    <div class="d-flex justify-content-between">
                                        <p>14.00 - 18.00</p>
                                        <p><b>10 Spot Avalable</b></p>
                                    </div>
                                </div>
                                <div class="box-dates mt-2">
                                    <h5>Today, 10 april 2026</h5>
                                    <div class="d-flex justify-content-between">
                                        <p>14.00 - 18.00</p>
                                        <p><b>10 Spot Avalable</b></p>
                                    </div>
                                </div>
                                <div class="mt-1 text-center">
                                    <p>Show all dates.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <hr>
        <div>
            <h4>Things to know</h4>
            <div class="flex-column flex-md-row gap-3 mt-3">
                <div>
                    <p>icon</p>
                    <h6>Guest requirements</h6>
                    <p>Guests ages 18 and up can attend, up to 10 guests total.</p>
                </div>
                <div>
                    <p>icon</p>
                    <h6>Guest requirements</h6>
                    <p>Guests ages 18 and up can attend, up to 10 guests total.</p>
                </div>
                <div>
                    <p>icon</p>
                    <h6>Guest requirements</h6>
                    <p>Guests ages 18 and up can attend, up to 10 guests total.</p>
                </div>
            </div>
            <div class="d-flex flex-column flex-md-row gap-3 mt-3">
                <div>
                    <p>icon</p>
                    <h6>Guest requirements</h6>
                    <p>Guests ages 18 and up can attend, up to 10 guests total.</p>
                </div>
                <div>
                    <p>icon</p>
                    <h6>Guest requirements</h6>
                    <p>Guests ages 18 and up can attend, up to 10 guests total.</p>
                </div>
                <div>
                    <p>icon</p>
                    <h6>Guest requirements</h6>
                    <p>Guests ages 18 and up can attend, up to 10 guests total.</p>
                </div>
            </div>

        </div>
    </div>
</template>
<script setup>
import axios from 'axios';
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'
import { nextTick } from 'vue'

const route = useRoute();
const detail = ref(null);
const lat = -8.5069
const lng = 115.2625
const createMap = (id, lat, lng) => {
    const map = L.map(id).setView([lat, lng], 13)

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map)

    L.marker([lat, lng]).addTo(map)

    return map
}

onMounted(async () => {
    const res = await axios.get(
        `http://127.0.0.1:8000/api/trip_detail/${route.params.id}`
    )
    detail.value = res.data

    await nextTick()

    createMap('map1', lat, lng)
    createMap('map2', lat, lng)
})
</script>