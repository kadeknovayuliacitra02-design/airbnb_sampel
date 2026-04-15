<template>
    <div id="map" style="height: 400px;"></div>
</template>

<script setup>
import { onMounted } from 'vue'
import L from 'leaflet'

onMounted(() => {
    const map = L.map('map').setView([-8.5069, 115.2625], 13)

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; OpenStreetMap'
    }).addTo(map)

    L.marker([-8.5069, 115.2625])
        .addTo(map)
        .bindPopup('Bali')
})
</script>