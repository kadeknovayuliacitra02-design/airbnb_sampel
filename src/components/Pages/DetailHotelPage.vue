<template>
    <div v-if="detail" class="container">
        <div class="d-flex flex-wrap justify-content-between align-items-center ">
            <h2>{{ detail.information_place }}</h2>

            <div class="d-flex">
                <div class="d-flex flex-wrap me-3">
                    <i class="fa-solid fa-up-right-from-square me-2"></i>
                    <h6><u>Share</u></h6>
                </div>
                <div class="d-flex flex-wrap">
                    <i class="bi bi-heart me-2"></i>
                    <h6><u>Save</u></h6>
                </div>
            </div>
        </div>
        <div class="container">
            <div class="row">
                <!-- KIRI (GAMBAR BESAR) -->
                <div class="col-12 col-lg-6 mb-2">
                    <img :src="detail.img_1" class="img-fluid img-main">
                </div>

                <!-- KANAN (4 GAMBAR KECIL) -->
                <div class="col-12 col-lg-6">
                    <div class="row">
                        <div class="col-6 mb-2">
                            <img :src="detail.img_2" class="img-fluid img-small">
                        </div>
                        <div class="col-6 mb-2">
                            <img :src="detail.img_3" class="img-fluid img-small ms-img-detail-hotel">
                        </div>
                        <div class="col-6">
                            <img :src="detail.img_4" class="img-fluid img-small">
                        </div>
                        <div class="col-6">
                            <img :src="detail.img_5" class="img-fluid img-small ms-img-detail-hotel">
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div>
            <h3>{{ detail.hotel_name }}, {{ detail.country }}</h3>
            <div>
                <ul class="d-flex" style="margin-left: -15px;">
                    <li class="">{{ detail.guest }}</li>
                    <li class="ms-4">{{ detail.bedroom }}</li>
                    <li class="ms-4">{{ detail.bed }}</li>
                    <li class="ms-4">{{ detail.bath }}</li>
                </ul>
            </div>
        </div>
        <div class="box-review flex-wrap d-flex">
            <div class="d-flex">
                <i class="fa-solid fa-trophy mt-3 me-md-3"></i>
                <div class="mt-1">
                    <p><b>Guest</b></p>
                    <p class="mt-room"><b>choice</b></p>
                </div>
                <i class="fa-solid fa-trophy mt-3 ms-md-3"></i>
            </div>
            <p class="ms-md-5 mt-1"><b>One of the most loved homes on Airbnb, according to guests</b></p>
            <div class="me-md-3 mt-3">
                <p class="ms-3 mt-1"><b>{{ detail.rate }}</b></p>
                <div class="d-flex mt-room " style="font-size: 10px;">
                    <i class="bi bi-star"></i>
                    <i class="bi bi-star"></i>
                    <i class="bi bi-star"></i>
                    <i class="bi bi-star"></i>
                    <i class="bi bi-star"></i>
                </div>

            </div>
            <div class="ms-md-3 mt-3 me-md-2">
                <p class="ms-1"><b>{{ detail.review }}</b></p>
                <p class="mt-room" style="font-size: 12px;"><b>Review</b></p>
            </div>
        </div>
        <div class="d-flex flex-wrap mt-5">
            <img src="/src/assets/img/host.avif" alt="host" class="mt-2 me-2" width="55px" height="55px">
            <div>
                <p></p><b>Host: Host Name</b>
                <p>Exemplary host, been hosting for 11 months</p>
            </div>
        </div>
        <hr class="w-100">
        <div>
            <div class="order-wrapper w-100">
                <div class="box-price">
                    <div>
                        <div class="d-flex flex-wrap">
                            <h3><u>Rp.{{ detail.price }}</u></h3>
                            <p class="ms-md-2 mt-2"> for {{ detail.time }}</p>
                        </div>
                        <div class="box-order">
                            <div class="d-flex flex-wrap justify-content-between">
                                <div>
                                    <p><b>Check-in</b></p>
                                    <p class="mt-room">Check-in date</p>
                                </div>
                                <div>
                                    <p><b>Check-out</b></p>
                                    <p class="mt-room">Check-out date</p>
                                </div>
                            </div>
                            <hr>
                            <p><b>Guest</b></p>
                            <p class="mt-room">{{ detail.guest }}</p>
                        </div>
                        <div class="text-center">
                            <div class="box-cancel-order mt-3">
                                <p class="p-2">Rp 0 today · Free cancellation before April 14th</p>
                            </div>
                            <button class="btn-order border-0 mt-3 ">Order</button>
                            <div class="mt-1">
                                <p>You have not been charged.</p>
                            </div>
                        </div>
                    </div>
                    <div class="d-flex flex-wrap justify-content-center">
                        <i class="bi bi-flag me-md-2"></i>
                        <p><u>Report this ad</u></p>
                    </div>
                </div>
            </div>
        </div>
        <div class="mt-fasility">
            <div class="d-flex flex-wrap">
                <i class="bi bi-fire fs-3"></i>
                <div class="ms-md-3">
                    <p><b>Outdoor entertainment</b></p>
                    <p class="mt-room">Fasility from hotel</p>
                </div>
            </div>
            <div class="d-flex flex-wrap mt-4">
                <i class="bi bi-door-open fs-3"></i>
                <div class="ms-3">
                    <p><b>Check-in independently</b></p>
                    <p class="mt-room">You can check-in with the help of building staff.</p>
                </div>
            </div>
            <div class="d-flex flex-wrap mt-4">
                <i class="bi bi-geo-alt fs-3"></i>
                <div class="ms-3">
                    <p><b>The location is second to none</b></p>
                    <p class="mt-room">In the past year, 100% of guests gave this location a 5-star rating.</p>
                </div>
            </div>
        </div>
        <hr class="w-100">
        <div class="box-languange-detail mt-4">
            <p>Some info is translated automatically. <b><u>show original language</u></b></p>
        </div>
        <div class=" container mt-5">
            <p class="desc-text">Discover your dream modern studio in the heart of Kuala Lumpur's vibrant Bukit Bintang!
                Perfect for
                couples, families, or business travelers, this stylish space offers stunning city views and comfortably
                accommodates 2-3 guests. Enjoy high-speed WiFi, Netflix, and access to the pool, fitness center, and
                free parking. Walk to Pavilion KL, The Exchange TRX, and Jalan Alor. The perfect city getaway awaits!
            </p>
            <p><b>Place.....</b></p>
            <button class="btn-show-more-detail border-0"><b>Show more</b></button>
        </div>
        <hr class="mt-5 w-100">
        <div>
            <h4>Your Room</h4>
            <div class="row mt-5">
                <div class="col-12 col-md-3">
                    <img src="/src/assets/img/room1 detail.avif" alt="room1">
                    <p class="mt-3"><b>Bedroom 1</b></p>
                    <p class="mt-room">1 bedroom king</p>
                </div>
                <div class="col-12 col-md-3 ms-5">
                    <img src="/src/assets/img/room2 detail.avif" alt="room2">
                    <p class="mt-3"><b>Bedroom 2</b></p>
                    <p class="mt-room">1 bedroom quen</p>
                </div>
            </div>
        </div>
        <hr class="w-100">
        <div class="mt-5">
            <h4>Facilities offered</h4>
            <div class="row mt-3">
                <div class="col-12 col-md-3">
                    <div class="d-flex flex-wrap">
                        <i class="bi bi-wifi"></i>
                        <p class="ms-md-3">Wifi</p>
                    </div>
                    <div class="d-flex flex-wrap">
                        <i class="bi bi-car-front"></i>
                        <p class="ms-md-3">Free street parking</p>
                    </div>
                    <div class="d-flex flex-wrap">
                        <i class="bi bi-tv"></i>
                        <p class="ms-md-3">TV</p>
                    </div>
                    <div class="d-flex flex-wrap">
                        <i class="bi bi-snow"></i>
                        <p class="ms-md-3">AC</p>
                    </div>
                    <div class="d-flex flex-wrap">
                        <i class="bi bi-basket"></i>
                        <p class="ms-md-3">Washing machine</p>
                    </div>
                </div>
                <div class="col-12 col-md-3 ms-md-5">
                    <div class="d-flex flex-wrap">
                        <i class="bi bi-display"></i>
                        <p class="ms-md-3">Dedicated work space</p>
                    </div>
                    <div class="d-flex flex-wrap">
                        <i class="bi bi-water"></i>
                        <p class="ms-md-3">Swimming Pool</p>
                    </div>
                    <div class="d-flex flex-wrap">
                        <i class="bi bi-arrow-up-down"></i>
                        <p class="ms-md-3">Lift</p>
                    </div>
                    <div class="d-flex flex-wrap">
                        <i class="bi bi-thermometer-high"></i>
                        <p class="ms-md-3">Sauna</p>
                    </div>
                    <div class="d-flex flex-wrap">
                        <i class="bi bi-bell-slash"></i>
                        <p class="ms-md-3"><s>Carbon monoxide alarm</s></p>
                    </div>
                </div>
            </div>
        </div>
        <hr class="w-100">
        <div>
            <h4>Select stay date</h4>
            <p>from date, till date</p>
            <div class="row">
                <div class="calendar col-12 col-md-3">

                    <!-- HEADER BULAN -->
                    <div class="calendar-header">
                        <span class="arrow">‹</span>
                        <h5>April 2026</h5>
                        <span class="arrow">›</span>
                    </div>

                    <!-- HARI -->
                    <div class="calendar-grid header">
                        <div v-for="day in days" :key="day">
                            {{ day }}
                        </div>
                    </div>

                    <!-- TANGGAL -->
                    <div class="calendar-grid">
                        <div v-for="(date, index) in dates" :key="index" class="date" :class="{
                            active: date === 24,
                            range: date === 25
                        }">
                            {{ date }}
                        </div>
                    </div>

                </div>
                <div class="col-12 col-md-3">

                    <!-- HEADER BULAN -->
                    <div class="calendar-header">
                        <span class="arrow">‹</span>
                        <h5>Mei 2026</h5>
                        <span class="arrow">›</span>
                    </div>

                    <!-- HARI -->
                    <div class="calendar-grid header">
                        <div v-for="day in days" :key="day">
                            {{ day }}
                        </div>
                    </div>

                    <!-- TANGGAL -->
                    <div class="calendar-grid">
                        <div v-for="(date, index) in dates" :key="index" class="date" :class="{
                            active: date === 24,
                            range: date === 25
                        }">
                            {{ date }}
                        </div>
                    </div>

                </div>
            </div>
            <div class="d-flex mt-5">
                <i class="bi bi-keyboard fs-3"></i>
                <p class="ms-date"><b><u>Leave the date blank</u></b></p>
            </div>
        </div>
        <hr>
        <div class="mt-5">
            <div class="d-flex flex-wrap justify-content-center">
                <i class="fa-solid fa-trophy mt-3 me-md-3 fs-1"></i>
                <div class=" mt-1">
                    <p class="fs-1"><b>Rate</b></p>
                </div>
                <i class="fa-solid fa-trophy mt-3 ms-md-3 fs-1"></i>
            </div>
            <div class="text-center">
                <h4>Quest Choice</h4>
                <p>This home is a guest favorite based on its ratings, reviews, and reliability.</p>
                <p style="font-size: 13px;"><u>How reviews work</u></p>
            </div>
        </div>
        <div class="d-flex flex-wrap justify-content-between mt-5 me-md-5">
            <div>
                <h5>Overall value</h5>
                <h6>Rate</h6>
                <div class="d-flex flex-wrap">
                    <div>
                        <p style="font-size: 13px;">5</p>
                        <p class="mt-room " style="font-size: 13px;">4</p>
                        <p class="mt-room" style="font-size: 13px;">3</p>
                        <p class="mt-room" style="font-size: 13px;">2</p>
                        <p class="mt-room" style="font-size: 13px;">1</p>
                    </div>
                    <div>
                        <i class="fa-solid fa-bars fs-1 mt-1"></i>
                    </div>
                </div>
            </div>
            <div>
                <h5>Cleanliness</h5>
                <h6>Rate</h6>
                <i class="bi bi-droplet fs-1"></i>
            </div>
            <div>
                <h5>Accuracy</h5>
                <h6>Rate</h6>
                <i class="bi bi-check-circle fs-1"></i>
            </div>
            <div>
                <h5>Check-in</h5>
                <h6>Rate</h6>
                <i class="bi bi-key fs-1"></i>
            </div>
            <div>
                <h5>Comunication</h5>
                <h6>Rate</h6>
                <i class="bi bi-chat fs-1"></i>
            </div>
            <div>
                <h5>Location</h5>
                <h6>Rate</h6>
                <i class="bi bi-geo-alt fs-1"></i>
            </div>
            <div>
                <h5>Economic Value</h5>
                <h6>Rate</h6>
                <i class="bi bi-pin fs-1"></i>
            </div>
        </div>
        <hr>
        <div class="d-flex flex-wrap mt-5">
            <div class="d-flex flex-wrap box-fasility">
                <i class="fa-solid fa-couch mt-1 ms-2"></i>
                <p class="ms-2">Comfort</p>
                <p class="ms-2">12</p>
            </div>
            <div class="d-flex flex-wrap box-fasility ms-2">
                <i class="fa-regular fa-image mt-1 ms-md-2"></i>
                <p class="ms-md-2">Decor</p>
                <p class="ms-md-2">26</p>
            </div>
            <div class="d-flex flex-wrap box-fasility ms-2">
                <i class="fa-solid fa-bucket mt-1 ms-md-2"></i>
                <p class="ms-md-2">Cleanliness</p>
                <p class="ms-md-2">26</p>
            </div>
            <div class="d-flex flex-wrap box-fasility ms-md-2">
                <i class="fa-solid fa-chair mt-1 ms-md-2"></i>
                <p class="ms-md-2">Indoor area</p>
                <p class="ms-md-2">22</p>
            </div>
            <div class="d-flex flex-wrap box-fasility ms-2">
                <i class="fa-solid fa-gift mt-1 ms-2"></i>
                <p class="ms-md-2">Fasility </p>
                <p class="ms-md-2">21</p>
            </div>
            <div class="d-flex flex-wrap box-fasility ms-2">
                <i class="bi bi-snow mt-1 ms-2"></i>
                <p class="ms-md-2">AC </p>
                <p class="ms-md-2">6</p>
            </div>
        </div>
        <hr class="mt-5">
        <div class="row ">
            <div class="col-12 col-md-5 mb">
                <div>
                    <div class="d-flex flex-wrap">
                        <img src="" alt="img">
                        <div class="ms-3">
                            <p>name</p>
                            <p class="mt-room">time join</p>
                        </div>
                    </div>
                    <div class="d-flex flex-wrap">
                        <div class="d-flex flex-wrap" style="font-size: 10px;">
                            <i class="bi bi-star"></i>
                            <i class="bi bi-star"></i>
                            <i class="bi bi-star"></i>
                            <i class="bi bi-star"></i>
                            <i class="bi bi-star"></i>
                        </div>
                        <p class="ms-md-3">time review</p>
                    </div>
                    <p>Semua terasa nyaman namun kasur kurang nyaman, badan seperti tersedot kedalam, terasa sakit
                        jikalau
                        harus tidur berhari2 di kasur tersebut, namun kami hanya menginap sat</p>
                    <p><u>Show more</u></p>
                </div>
                <div class="mt-5">
                    <div class="d-flex flex-wrap">
                        <img src="" alt="img">
                        <div class="ms-md-3">
                            <p>name</p>
                            <p class="mt-room">time join</p>
                        </div>
                    </div>
                    <div class="d-flex">
                        <div class="d-flex flex-wrap" style="font-size: 10px;">
                            <i class="bi bi-star"></i>
                            <i class="bi bi-star"></i>
                            <i class="bi bi-star"></i>
                            <i class="bi bi-star"></i>
                            <i class="bi bi-star"></i>
                        </div>
                        <p class="ms-3">time review</p>
                    </div>
                    <p>Semua terasa nyaman namun kasur kurang nyaman, badan seperti tersedot kedalam, terasa sakit
                        jikalau
                        harus tidur berhari2 di kasur tersebut, namun kami hanya menginap sat</p>
                    <p><u>Show more</u></p>
                </div>
                <div class="mt-5">
                    <div class="d-flex flex-wrap">
                        <img src="" alt="img">
                        <div class="ms-md-3">
                            <p>name</p>
                            <p class="mt-room">time join</p>
                        </div>
                    </div>
                    <div class="d-flex flex-wrap">
                        <div class="d-flex" style="font-size: 10px;">
                            <i class="bi bi-star"></i>
                            <i class="bi bi-star"></i>
                            <i class="bi bi-star"></i>
                            <i class="bi bi-star"></i>
                            <i class="bi bi-star"></i>
                        </div>
                        <p class="ms-md-3">time review</p>
                    </div>
                    <p>Semua terasa nyaman namun kasur kurang nyaman, badan seperti tersedot kedalam, terasa sakit
                        jikalau
                        harus tidur berhari2 di kasur tersebut, namun kami hanya menginap sat</p>
                    <p><u>Show more</u></p>
                </div>
            </div>
            <div class="col-12 col-md-5">
                <div>
                    <div class="d-flex flex-wrap">
                        <img src="" alt="img">
                        <div class="ms-md-3">
                            <p>name</p>
                            <p class="mt-room">time join</p>
                        </div>
                    </div>
                    <div class="d-flex flex-wrap">
                        <div class="d-flex flex-wrap" style="font-size: 10px;">
                            <i class="bi bi-star"></i>
                            <i class="bi bi-star"></i>
                            <i class="bi bi-star"></i>
                            <i class="bi bi-star"></i>
                            <i class="bi bi-star"></i>
                        </div>
                        <p class="ms-md-3">time review</p>
                    </div>
                    <p>Semua terasa nyaman namun kasur kurang nyaman, badan seperti tersedot kedalam, terasa sakit
                        jikalau
                        harus tidur berhari2 di kasur tersebut, namun kami hanya menginap sat</p>
                    <p><u>Show more</u></p>
                </div>
                <div class="mt-5">
                    <div class="d-flex flex-wrap">
                        <img src="" alt="img">
                        <div class="ms-md-3">
                            <p>name</p>
                            <p class="mt-room">time join</p>
                        </div>
                    </div>
                    <div class="d-flex flex-wrap">
                        <div class="d-flex flex-wrap" style="font-size: 10px;">
                            <i class="bi bi-star"></i>
                            <i class="bi bi-star"></i>
                            <i class="bi bi-star"></i>
                            <i class="bi bi-star"></i>
                            <i class="bi bi-star"></i>
                        </div>
                        <p class="ms-3">time review</p>
                    </div>
                    <p>Semua terasa nyaman namun kasur kurang nyaman, badan seperti tersedot kedalam, terasa sakit
                        jikalau
                        harus tidur berhari2 di kasur tersebut, namun kami hanya menginap sat</p>
                    <p><u>Show more</u></p>
                </div>
                <div class="mt-5">
                    <div class="d-flex flex-wrap">
                        <img src="" alt="img">
                        <div class="ms-md-3">
                            <p>name</p>
                            <p class="mt-room">time join</p>
                        </div>
                    </div>
                    <div class="d-flex flex-wrap">
                        <div class="d-flex" style="font-size: 10px;">
                            <i class="bi bi-star"></i>
                            <i class="bi bi-star"></i>
                            <i class="bi bi-star"></i>
                            <i class="bi bi-star"></i>
                            <i class="bi bi-star"></i>
                        </div>
                        <p class="ms-md-3">time review</p>
                    </div>
                    <p>Semua terasa nyaman namun kasur kurang nyaman, badan seperti tersedot kedalam, terasa sakit
                        jikalau
                        harus tidur berhari2 di kasur tersebut, namun kami hanya menginap sat</p>
                    <p><u>Show more</u></p>
                </div>
            </div>
        </div>
        <button class="btn-more-detail border-0 mt-5">Show more review</button>
        <hr>
        <div>
            <h4>Your Location</h4>
            <p>Address</p>
            <div>

            </div>
        </div>
        <div>
            <h5>Interesting things in the surrounding area</h5>
            <p>Located in the heart of Jakarta's Golden Triangle, Sudirman Park offers the perfect blend of comfort and
                urban convenience. You'll be staying in one of Central Jakarta's most strategic areas—just minutes from
                Sudirman, Thamrin, and Kuningan, the main business districts.</p>
            <p><u>Show more</u></p>
        </div>
        <hr>
        <div>
            <h4>Host</h4>
            <div class="container">
                <div class="row">
                    <div class="col-md-6">
                        <div>
                            <div class="box-host-detail">
                                <div class="d-flex flex-wrap">
                                    <div class="text-center p-4">
                                        <img :src="detail.img_host" alt="host" height="85px">
                                        <h4 class="mt-3">{{ detail.host_name }}</h4>
                                        <p class="mt-host-space">exemplary host</p>
                                    </div>
                                    <div class="ms-md-3 p-3 ">
                                        <div>
                                            <h4>{{ detail.review }}</h4>
                                            <p class="mt-host-space">Review</p>
                                        </div>
                                        <hr class="mt-host-space">
                                        <div class="mt-host-space">
                                            <h4>{{ detail.rate }}</h4>
                                            <p class="mt-host-space">Rate</p>
                                        </div>
                                        <hr class="mt-host-space">
                                        <div class="mt-host-space">
                                            <h4>Time Join</h4>
                                            <p class="mt-host-space">{{ detail.time_join }}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div class="d-flex flex-wrap mt-3">
                                <i class="fa-solid fa-briefcase"></i>
                                <p class="ms-md-3">My job: Banker</p>
                            </div>
                            <div class="d-flex flex-wrap">
                                <i class="fa-solid fa-music"></i>
                                <p class="ms-md-3">Favorite song in high school: Backstreet Boys</p>
                            </div>
                            <p>Hi, I'm a travel enthusiast who loves meeting new people and sharing my local knowledge.
                                I'm
                                relatively new to hosting on Airbnb but pride myself on providing a comfortable and
                                welcoming environment for my guests. When I'm not hosting, I enjoy hiking, cooking, and
                                exploring new cafes in the city. My goal is to make every guest feel at home and help
                                them
                                create unforgettable memories during their stay.</p>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <h5>Host Name is a Superhost</h5>
                        <p>HosTeladan adalah tuan rumah berpengalaman dan berperingkat tinggi yang berkomitmen memberi
                            tamu
                            pengalaman menginap yang memuaskan.</p>
                        <div>
                            <h5>Co-host</h5>
                            <div class="d-flex flex-wrap">
                                <div class="d-flex flex-wrap">
                                    <img src="" alt="Co-host">
                                    <p class="ms-md-3">Host name</p>
                                </div>
                                <div class="d-flex flex-wrap ms-md-5">
                                    <img src="" alt="Co-host">
                                    <p class="ms-md-3">Host name</p>
                                </div>
                            </div>
                        </div>
                        <div>
                            <h5>Host Details</h5>
                            <p>Response rate: 100%</p>
                            <p class="mt-room">Respond within one hour</p>
                        </div>
                        <button class="btn-host-message border-0">Send message to host</button>
                        <hr>
                        <p>Untuk membantu melindungi pembayaran Anda, pastikan Anda selalu menggunakan Airbnb untuk
                            mengirimkan uang
                            dan berkomunikasi dengan tuan rumah.</p>
                    </div>
                </div>
            </div>
        </div>
        <hr>
        <!-- <h5>Other accommodation nearby</h5>
        <RouterLink to="/detailHotel" class="router-style mt-5">
            <div class="d-flex">
                <div v-for="hotels in hotel" :key="hotels.id">
                    <div class="box-room p-2">
                        <img :src="hotels.img" alt="room1" width="195px" height="195px">
                        <p><b>{{ hotels.hotel_name }}</b></p>
                        <p class="mt-room fs-des-home">{{ hotels.price }}, {{ hotels.time }}</p>
                        <div class="d-flex">
                            <i class="bi bi-star-fill mt-room me-1 fs-des-home"></i>
                            <p class="mt-room fs-des-home">{{ hotels.rate }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </RouterLink> -->
        <hr>
        <div>
            <h5>Things to know</h5>
            <div class="row mt-5">
                <div class="col-md-4">
                    <i class="fa-regular fa-calendar"></i>
                    <p><b>Cancellation Policy</b></p>
                    <p>Pembatalan gratis selama 24 jam. Setelahnya, biaya reservasi tidak dapat dikembalikan.
                        Baca kebijakan lengkap tuan rumah ini untuk detail selengkapnya.</p>
                    <p><u>learn more</u></p>
                </div>
                <div class="col-md-4">
                    <i class="fa-solid fa-key"></i>
                    <p><b>House rules</b></p>
                    <p>Check-in after 2:00 PM
                        Check-out before 11:00 AM
                        Maximum 5 guests</p>
                    <p><u>learn more</u></p>
                </div>
                <div class="col-md-4">
                    <i class="bi bi-shield"></i>
                    <p><b>Safety & property</b></p>
                    <p>Alarm karbon monoksida
                        Alarm asap</p>
                    <p><u>learn more</u></p>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
import { useRoute } from 'vue-router'
import axios from 'axios'
import { ref, onMounted } from 'vue'

const route = useRoute()
const detail = ref(null)

const days = ['Min', 'Sn', 'Sl', 'R', 'Km', 'J', 'Sb']
// const hotel = ref([]);

// contoh tanggal (April mulai dari Rabu → kasih kosong di depan)
const dates = [
    '', '', '', // kosong (sebelum tanggal 1)
    1, 2, 3, 4, 5, 6, 7,
    8, 9, 10, 11, 12, 13, 14,
    15, 16, 17, 18, 19, 20, 21,
    22, 23, 24, 25, 26, 27, 28,
    29, 30
]
// onMounted(() => {
//     axios.get("http://127.0.0.1:8000/api/hotel")
//         .then(res => {
//             hotel.value = res.data;
//         });
// });

onMounted(async () => {
    const res = await axios.get(
        `${import.meta.env.VITE_API_URL}/detail_hotel/${route.params.id}`
    )
    detail.value = res.data
})
</script>
