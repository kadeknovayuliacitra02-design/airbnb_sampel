<template>
    
    <div class="container">
        <div
    v-if="!isSearching || filteredToday.length > 0"
    class="mt-5">
            <div class="d-flex justify-content-between align-items-center flex-wrap">
                <h4>popular experiences in Bali</h4>
                <div class="ms-1 mt-1 box-arrow-right border-0">
                    <i class="bi bi-arrow-right"></i>
                </div>
            </div>
            <div class="row">
                <div class="col-6 col-md-4 col-lg-2" v-for="item in filteredToday" :key="item.id">
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
        <div v-if="!isSearching || filteredTomorrow.length > 0">
            <div class="d-flex mt-5">
                <h4>tomorrow in Bali</h4>
                <div class="ms-1 mt-1 box-arrow-right border-0">
                    <i class="bi bi-arrow-right"></i>
                </div>
            </div>
            <div class="row">
                <div class="col-6 col-md-4 col-lg-2" v-for="item in filteredTomorrow" :key="item.id">
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
        <div v-if="!isSearching || filteredWeekend.length > 0">
            <div class="d-flex mt-5">
                <h4>experience for the weekend</h4>
                <div class="ms-1 mt-1 box-arrow-right border-0">
                    <i class="bi bi-arrow-right"></i>
                </div>
            </div>
            <div class="row">
                <div class="col-6 col-md-4 col-lg-2" v-for="item in filteredWeekend" :key="item.id">
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
        <div v-if="!isSearching || filteredWeekday.length > 0">
            <div class="d-flex mt-5">
                <h4>All Experiences in Bali</h4>
                <div class="ms-1 mt-1 box-arrow-right border-0">
                    <i class="bi bi-arrow-right"></i>
                </div>
            </div>
            <div class="row">
                <div class="col-6 col-md-4 col-lg-2" v-for="item in filteredWeekday" :key="item.id">
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
        <div v-if="!isSearching || filteredMonday.length > 0">
            <div class="d-flex mt-5">
                <h4>experience in Denpasar</h4>
                <div class="ms-1 mt-1 box-arrow-right border-0">
                    <i class="bi bi-arrow-right"></i>
                </div>
            </div>
            <div class="row">
                <div class="col-6 col-md-4 col-lg-2" v-for="item in filteredMonday" :key="item.id">
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
        <div v-if="!isSearching || filteredAirbnb.length > 0">
            <div class="d-flex mt-5">
                <h4>experience in Kuala Lumpur</h4>
                <div class="ms-1 mt-1 box-arrow-right border-0">
                    <i class="bi bi-arrow-right"></i>
                </div>
            </div>
            <div class="row">
                <div class="col-6 col-md-4 col-lg-2" v-for="item in filteredAirbnb" :key="item.id">
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
        <div v-if="!isSearching">
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
        <div v-if="!isSearching">
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
        <div v-if="!isSearching">
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
        <div v-if="isSearching && noResult" class="text-center mt-5">
    <h4>No experience found</h4>
</div>
    </div>

</template>
<script setup>
import axios from "axios";
import { ref, onMounted, computed } from "vue";
import { useRoute } from "vue-router";

const route = useRoute()
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
        (item.experience_name || '').toLowerCase().includes(keyword.value)
    )
}
const filteredToday = computed(() => filterData(today))
const filteredWeekend = computed(() => filterData(weekend))
const filteredTomorrow = computed(() => filterData(tomorrow))
const filteredWeekday = computed(() => filterData(weekday))
const filteredMonday = computed(() => filterData(monday))
const filteredAirbnb = computed(()=>filterData(airbnb))

const noResult = computed(() => {
    return (
        filteredToday.value.length === 0 &&
        filteredWeekend.value.length === 0 &&
        filteredTomorrow.value.length === 0 &&
        filteredWeekday.value.length === 0 &&
        filteredMonday.value.length === 0 &&
        filteredAirbnb.value.length === 0

    )

})

</script>