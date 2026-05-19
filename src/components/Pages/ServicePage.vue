<template>
    <div>
        <div v-if="!isSearching || filteredSpa.length > 0">
            <div class="d-flex">
                <h4>Services in Bali</h4>
                <div class="ms-1 mt-1 box-arrow-right border-0">
                    <i class="bi bi-arrow-right"></i>
                </div>
            </div>
            <div class="row">
                <div class="col-6 col-md-4 col-lg-2" v-for="item in filteredSpa" :key="item.id">
                    <RouterLink :to="`/detailService/${item.id}`" class="box-room p-2 router-style">
                        <img :src="item.img" alt="room1" class="img-fluid img-card">
                        <p><b>{{ item.service_name }} </b></p>
                        <p class="mt-room fs-des-home">{{ item.price }}/ {{ item.min_order }}</p>
                        <div class="d-flex">
                            <i class="bi bi-star-fill mt-room me-1 fs-des-home"></i>
                            <p class="mt-room fs-des-home">{{ item.rate }}</p>
                        </div>
                    </RouterLink>
                </div>
            </div>
        </div>
        <div v-if="!isSearching || filteredChef.length > 0" class="mt-5">
            <h3>Find service in Airbnb</h3>
            <div class="d-flex mt-5">
                <h4>Chef</h4>
                <div class="ms-1 mt-1 box-arrow-right border-0">
                    <i class="bi bi-arrow-right"></i>
                </div>
            </div>
            <div class="row">
                <div class="col-6 col-md-4 col-lg-2" v-for="item in filteredChef" :key="item.id">
                    <RouterLink :to="`/detailService/${item.id}`" class="box-room p-2 router-style">
                        <img :src="item.img" alt="room1" class="img-fluid img-card">
                        <p><b>{{ item.service_name }}</b></p>
                        <p class="mt-room fs-des-home">{{ item.price }} /{{ item.min_order }}</p>
                        <div class="d-flex">
                            <i class="bi bi-star-fill mt-room me-1 fs-des-home"></i>
                            <p class="mt-room fs-des-home">{{ item.rate }}</p>
                        </div>
                    </RouterLink>
                </div>
            </div>
        </div>
        <div v-if="!isSearching || filteredSport.length > 0">
            <div class="d-flex mt-5">
                <h4>Sports</h4>
                <div class="ms-1 mt-1 box-arrow-right border-0">
                    <i class="bi bi-arrow-right"></i>
                </div>
            </div>
            <div class="row">
                <div class="col-6 col-md-4 col-lg-2" v-for="item in filteredSport" :key="item.id">
                    <RouterLink :to="`/detailService/${item.id}`" class="box-room p-2 router-style">
                        <img :src="item.img" alt="room1" class="img-fluid img-card">
                        <p><b>{{ item.service_name }}</b></p>
                        <p class="mt-room fs-des-home">{{ item.price }} / {{ item.min_order }}</p>
                        <div class="d-flex">
                            <i class="bi bi-star-fill mt-room me-1 fs-des-home"></i>
                            <p class="mt-room fs-des-home">{{ item.rate }}</p>
                        </div>
                    </RouterLink>
                </div>
            </div>
        </div>
        <div v-if="!isSearching || filteredMakeup.length > 0">
            <div class="d-flex mt-5">
                <h4>makeup</h4>
                <div class="ms-1 mt-1 box-arrow-right border-0">
                    <i class="bi bi-arrow-right"></i>
                </div>
            </div>
            <div class="row">
                <div class="col-6 col-md-4 col-lg-2" v-for="item in filteredMakeup" :key="item.id">
                    <RouterLink :to="`/detailService/${item.id}`" class="box-room p-2 router-style">
                        <img :src="item.img" alt="room1" class="img-fluid img-card">
                        <p><b>{{ item.service_name }}</b></p>
                        <p class="mt-room fs-des-home">{{ item.price }} / {{ item.min_order }}</p>
                        <div class="d-flex">
                            <i class="bi bi-star-fill mt-room me-1 fs-des-home"></i>
                            <p class="mt-room fs-des-home">{{ item.rate }}</p>
                        </div>
                    </RouterLink>
                </div>
            </div>
        </div>
        <div v-if="!isSearching || filteredPhotography.length > 0">
            <div class="d-flex mt-5">
                <h4>Photography</h4>
                <div class="ms-1 mt-1 box-arrow-right border-0">
                    <i class="bi bi-arrow-right"></i>
                </div>
            </div>
            <div class="row">
                <div class="col-6 col-md-4 col-lg-2" v-for="item in filteredPhotography" :key="item.id">
                    <RouterLink :to="`/detailService/${item.id}`" class="box-room p-2 router-style">
                        <img :src="item.img" alt="room1" class="img-fluid img-card">
                        <p><b>{{ item.service_name }}</b></p>
                        <p class="mt-room fs-des-home">{{ item.price }} / {{ item.min_order }}</p>
                        <div class="d-flex">
                            <i class="bi bi-star-fill mt-room me-1 fs-des-home"></i>
                            <p class="mt-room fs-des-home">{{ item.rate }}</p>
                        </div>
                    </RouterLink>
                </div>
            </div>
        </div>
        <div v-if="!isSearching || filteredHair.length > 0">
            <div class="d-flex mt-5">
                <h4>Hair</h4>
                <div class="ms-1 mt-1 box-arrow-right border-0">
                    <i class="bi bi-arrow-right"></i>
                </div>
            </div>
            <div class="row">
                <div class="col-6 col-md-4 col-lg-2" v-for="item in filteredHair" :key="item.id">
                    <RouterLink :to="`/detailService/${item.id}`" class="box-room p-2 router-style">
                        <img :src="item.img" alt="room1" class="img-fluid img-card">
                        <p><b>{{ item.service_name }}</b></p>
                        <p class="mt-room fs-des-home">{{ item.price }} / {{ item.min_order }}</p>
                        <div class="d-flex">
                            <i class="bi bi-star-fill mt-room me-1 fs-des-home"></i>
                            <p class="mt-room fs-des-home">{{ item.rate }}</p>
                        </div>
                    </RouterLink>
                </div>
            </div>
        </div>
        <div v-if="isSearching && noResult" class="text-center mt-5">
            <h4>No service found</h4>
        </div>
    </div>

</template>
<script setup>
import axios from "axios";
import { ref, onMounted, computed } from "vue";
import { useRoute } from "vue-router";


const route = useRoute()
const spa = ref([]);
const photography = ref([]);
const chef = ref([]);
const sport = ref([]);
const makeup = ref([]);
const hair = ref([]);

onMounted(async () => {
    const res = await axios.get(`${import.meta.env.VITE_API_URL}/services`)

    spa.value = res.data.spa
    photography.value = res.data.photography
    sport.value = res.data.sport
    makeup.value = res.data.makeup
    hair.value = res.data.hair
    chef.value = res.data.chef
});
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
        (item.city || '').toLowerCase().includes(keyword.value) ||
        (item.service_name || '').toLowerCase().includes(keyword.value)
    )
}
const filteredSpa = computed(() => filterData(spa))
const filteredPhotography = computed(() => filterData(photography))
const filteredSport = computed(() => filterData(sport))
const filteredMakeup = computed(() => filterData(makeup))
const filteredHair = computed(() => filterData(hair))
const filteredChef = computed(() => filterData(chef))

const noResult = computed(() => {
    return (
        filteredSpa.value.length === 0 &&
        filteredPhotography.value.length === 0 &&
        filteredSport.value.length === 0 &&
        filteredMakeup.value.length === 0 &&
        filteredHair.value.length === 0 &&
        filteredChef.value.length === 0

    )

})
</script>