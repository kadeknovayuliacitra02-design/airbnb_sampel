<template>
    <div>
        <div v-if="!isSearching || filteredKualaLumpur.length > 0">
            <div class="d-flex flex-wrap">
                <h4>Popular accommodation in Kuala Lumpur</h4>
                <div class="ms-1 mt-1 box-arrow-right border-0">
                    <i class="bi bi-arrow-right"></i>
                </div>
            </div>
            <div>
                <div class="row">
                    <div class="col-6 col-md-4 col-lg-2" v-for="item in filteredKualaLumpur" :key="item.id">
                        <RouterLink :to="`/detailHotel/${item.id}`" class="box-room p-2 router-style">
                            <img :src="item.img" alt="room1" class="img-fluid img-card">
                            <p><b>{{ item.accomodation_name }}</b></p>
                            <p class="mt-room fs-des-home">Rp.{{ item.price }}, {{ item.time }}</p>
                            <div class="d-flex">
                                <i class="bi bi-star-fill mt-room me-1 fs-des-home"></i>
                                <p class="mt-room fs-des-home">{{ item.rate }}</p>
                            </div>
                        </RouterLink>
                    </div>
                </div>
            </div>
        </div>
        <div v-if="!isSearching || filteredBangkok.length > 0">
            <div class="d-flex mt-5">
                <h4>Available next month in Bangkok</h4>
                <div class="ms-1 mt-1 box-arrow-right border-0">
                    <i class="bi bi-arrow-right"></i>
                </div>
            </div>
            <div class="row">
                <div class="col-6 col-md-4 col-lg-2" v-for="item in filteredBangkok" :key="item.id">
                    <div class="box-room p-2">
                        <img :src="item.img" alt="room1" class="img-fluid img-card">
                        <p><b>{{ item.accomodation_name }}</b></p>
                        <p class="mt-room fs-des-home"> Rp.{{ item.price }} , {{ item.time }}</p>
                        <div class="d-flex">
                            <i class="bi bi-star-fill mt-room me-1 fs-des-home"></i>
                            <p class="mt-room fs-des-home">{{ item.rate }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div v-if="!isSearching || filteredJakarta.length > 0">
            <div class="d-flex mt-5">
                <h4>Accommodation in Jakarta</h4>
                <div class="ms-1 mt-1 box-arrow-right border-0">
                    <i class="bi bi-arrow-right"></i>
                </div>
            </div>
            <div class="row">
                <div class="col-6 col-md-4 col-lg-2" v-for="item in filteredJakarta" :key="item.id">
                    <RouterLink :to="`/detailHotel/${item.id}`" class="box-room p-2 router-style">
                        <img :src="item.img" alt="room1" class="img-fluid img-card">
                        <p><b>{{ item.accomodation_name }}</b></p>
                        <p class="mt-room fs-des-home">Rp.{{ item.price }}, {{ item.time }}</p>
                        <div class="d-flex">
                            <i class="bi bi-star-fill mt-room me-1 fs-des-home"></i>
                            <p class="mt-room fs-des-home">{{ item.rate }}</p>
                        </div>
                    </RouterLink>
                </div>
            </div>
        </div>
        <div v-if="!isSearching || filteredTokyo.length > 0">
            <div class="d-flex mt-5">
                <h4>Available next month in Tokyo</h4>
                <div class="ms-1 mt-1 box-arrow-right border-0">
                    <i class="bi bi-arrow-right"></i>
                </div>
            </div>
            <div class="row">
                <div class="col-6 col-md-4 col-lg-2" v-for="item in filteredTokyo" :key="item.id">
                    <RouterLink :to="`/detailHotel/${item.id}`" class="box-room p-2 router-style">
                        <img :src="item.img" alt="room1" class="img-fluid img-card">
                        <p><b>{{ item.accomodation_name }}</b></p>
                        <p class="mt-room fs-des-home">Rp.{{ item.price }}, {{ item.time }}</p>
                        <div class="d-flex">
                            <i class="bi bi-star-fill mt-room me-1 fs-des-home"></i>
                            <p class="mt-room fs-des-home">{{ item.rate }}</p>
                        </div>
                    </RouterLink>
                </div>
            </div>
        </div>
        <div v-if="!isSearching || filteredUbud.length > 0">
            <div class="row mt-5">
                <h4>Accommodation in Ubud</h4>
                <div class="ms-1 mt-1 box-arrow-right border-0">
                    <i class="bi bi-arrow-right"></i>
                </div>
            </div>
            <div class="row">
                <div class="col-6 col-md-4 col-lg-2" v-for="item in filteredUbud" :key="item.id">
                    <RouterLink :to="`/detailHotel/${item.id}`" class="box-room p-2 router-style">
                        <img :src="item.img" alt="room1" class="img-fluid img-card">
                        <p><b>{{ item.accomodation_name }}</b></p>
                        <p class="mt-room fs-des-home">Rp.{{ item.price }}, {{ item.time }}</p>
                        <div class="d-flex">
                            <i class="bi bi-star-fill mt-room me-1 fs-des-home"></i>
                            <p class="mt-room fs-des-home">{{ item.rate }}</p>
                        </div>
                    </RouterLink>
                </div>
            </div>
        </div>
        <div v-if="
            isSearching &&
            filteredJakarta.length === 0 &&
            filteredTokyo.length === 0 &&
            filteredBangkok.length === 0 &&
            filteredUbud.length === 0 &&
            filteredKualaLumpur.length === 0
        " class="text-center mt-5">
            <h4>No accommodation found</h4>
        </div>
    </div>

</template>
<script setup>
import { computed, ref, onMounted } from 'vue'
import axios from 'axios'
import { useRoute } from 'vue-router'


const route = useRoute()



const jakarta = ref([])
const ubud = ref([])
const tokyo = ref([])
const kuala_lumpur = ref([])
const bangkok = ref([])

onMounted(async () => {
    const res = await axios.get(`${import.meta.env.VITE_API_URL}/accomodation`)

    jakarta.value = res.data.jakarta
    ubud.value = res.data.ubud
    tokyo.value = res.data.tokyo
    kuala_lumpur.value = res.data.kuala_lumpur
    bangkok.value = res.data.bangkok
})
const keyword = computed(() => {
    return String(route.query.location || '')
        .toLowerCase()
        .trim()
})

const isSearching = computed(() => {
    return keyword.value.length > 0
})
const filterData = (data) => {
    if (!keyword.value) return data.value

    return data.value.filter(item =>
        item.city.toLowerCase().includes(keyword.value) ||
        item.accomodation_name.toLowerCase().includes(keyword.value)
    )
}
const filteredJakarta = computed(() => filterData(jakarta))
const filteredUbud = computed(() => filterData(ubud))
const filteredTokyo = computed(() => filterData(tokyo))
const filteredKualaLumpur = computed(() => filterData(kuala_lumpur))
const filteredBangkok = computed(() => filterData(bangkok))


</script>