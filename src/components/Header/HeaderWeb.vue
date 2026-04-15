<template>
    <nav class="navbar bg-white">
        <div class="container-fluid">

            <div class="d-flex align-items-center">
                <img src="@/assets/img/airbnb-logo.png" alt="logo" width="95" height="45">
                <RouterLink to="/" class="router-style">
                    <h5 class="space-home mb-0">Homes</h5>
                </RouterLink>
                <RouterLink to="/exp" class="router-style">
                    <h5 class="ms-5 mb-0">Exsperience</h5>
                </RouterLink>
                <RouterLink to="/service" class="router-style">
                    <h5 class="ms-5 mb-0">Service</h5>
                </RouterLink>
                <div class="d-flex">
                    <h5 class="space-host mb-0 mt-1 click" @click="openModalHost">Host</h5>
                    <div class="box-globe ms-3 mb-0 mt-1 click" @click="openModalLanguange">
                        <i class="bi bi-globe "></i>
                    </div>
                    <div class="box-list ms-3 mb-0 mt-1 click" @click="openModalList">
                        <i class="bi bi-list "></i>
                    </div>
                </div>
            </div>

        </div>

        <div class="d-flex space-location mt-5 box-search">
            <div class="">
                <h6>Locatin</h6>
                <input type="text" placeholder="find Destination" class="border-0">
            </div>
            <div class="ms-5 mb-0">
                <h6>Date</h6>
                <input type="int" placeholder="add Date" class="border-0">
            </div>
            <div class="ms-5 mb-0">
                <h6>Participant</h6>
                <input type="text" placeholder="add Guests" class="border-0">
            </div>
            <div class="ms-3 mt-1 mb-0 box-icon-search border-0">
                <i class="bi bi-search fs-5 color-icon-search"></i>
            </div>
        </div>
    </nav>
    <hr>
    <!-- ModalLanguange -->
    <div class="modal fade" id="modalLanguange" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
        aria-hidden="true">
        <div class="modal-dialog modal-lg" role="document">
            <div class="modal-content" style="    border-radius: 45px; width: 895px; padding: 30px;">
                <button class="btn-close" data-bs-dismiss="modal" style="font-size: 10px;"></button>
                <div class="modal-body">
                    <div class="d-flex">
                        <p>Language and Region</p>
                        <p class="ms-5">Currency</p>
                    </div>
                    <hr class="mt-1">
                    <div>
                        <h6>Translation</h6>
                        <p>Automatically translate descriptions</p>
                    </div>
                    <h3 class="mt-5">Suggested languages ​​and regions </h3>
                    <div class="d-flex mt-5">
                        <div>
                            <p><b>English</b></p>
                            <p>United States</p>
                        </div>
                        <div class="ms-5">
                            <p><b>English</b></p>
                            <p>United Kingdom</p>
                        </div>
                    </div>
                    <h3 class="mt-5">Select language and region</h3>
                    <div class="d-flex justify-content-between mt-5">
                        <div>
                            <p><b>Bahasa Indonesia</b></p>
                            <p class="mt-room">Indonesia</p>
                        </div>
                        <div>
                            <p><b>Azerbaycan Dili</b></p>
                            <p class="mt-room">Azerbaycan</p>
                        </div>
                        <div>
                            <p><b>Bosansky</b></p>
                            <p class="mt-room">Bosna i Hercegovina</p>
                        </div>
                        <div>
                            <p><b>Catala</b></p>
                            <p class="mt-room">Espanya</p>
                        </div>
                        <div>
                            <p><b>Cestina</b></p>
                            <p class="mt-room">Ceska Republika</p>
                        </div>
                    </div>
                    <div class="d-flex justify-content-between mt-4">
                        <div>
                            <p><b>Crnogorski </b></p>
                            <p class="mt-room">Crna gora</p>
                        </div>
                        <div>
                            <p><b>Dansk </b></p>
                            <p class="mt-room">Danmark</p>
                        </div>
                        <div>
                            <p><b>Deutsch</b></p>
                            <p class="mt-room">Deutschland</p>
                        </div>
                        <div>
                            <p><b>Deutsch</b></p>
                            <p class="mt-room">Osterreich</p>
                        </div>
                        <div>
                            <p><b>Deutsch</b></p>
                            <p class="mt-room">Schweiz </p>
                        </div>
                    </div>
                    <div class="d-flex justify-content-between mt-4">
                        <div>
                            <p><b>Deutsch </b></p>
                            <p class="mt-room">Luxemburg</p>
                        </div>
                        <div>
                            <p><b>Eesti </b></p>
                            <p class="mt-room">Eesti</p>
                        </div>
                        <div>
                            <p><b>English</b></p>
                            <p class="mt-room">Australia </p>
                        </div>
                        <div>
                            <p><b>English</b></p>
                            <p class="mt-room">Canada</p>
                        </div>
                        <div>
                            <p><b>English</b></p>
                            <p class="mt-room">Guyana</p>
                        </div>
                    </div>
                    <div class="d-flex justify-content-between mt-4">
                        <div>
                            <p><b>English </b></p>
                            <p class="mt-room">India</p>
                        </div>
                        <div>
                            <p><b>English </b></p>
                            <p class="mt-room">Ireland</p>
                        </div>
                        <div>
                            <p><b>English</b></p>
                            <p class="mt-room">new Zealand </p>
                        </div>
                        <div>
                            <p><b>English</b></p>
                            <p class="mt-room">Singapore</p>
                        </div>
                        <div>
                            <p><b>English</b></p>
                            <p class="mt-room">Arab</p>
                        </div>
                    </div>
                    <div class="d-flex justify-content-between mt-4">
                        <div>
                            <p><b>Espanol </b></p>
                            <p class="mt-room">Argentina</p>
                        </div>
                        <div>
                            <p><b>Espanol </b></p>
                            <p class="mt-room">Belice</p>
                        </div>
                        <div>
                            <p><b>Espanol</b></p>
                            <p class="mt-room">Bolivia </p>
                        </div>
                        <div>
                            <p><b>Espanol</b></p>
                            <p class="mt-room">Chile</p>
                        </div>
                        <div>
                            <p><b>Espanol</b></p>
                            <p class="mt-room">Colombia </p>
                        </div>
                    </div>
                    <div class="d-flex justify-content-between mt-4">
                        <div>
                            <p><b>Francais</b></p>
                            <p class="mt-room">Canada</p>
                        </div>
                        <div>
                            <p><b>Francais </b></p>
                            <p class="mt-room">France</p>
                        </div>
                        <div>
                            <p><b>Francais</b></p>
                            <p class="mt-room">Suisse</p>
                        </div>
                        <div>
                            <p><b>Francais</b></p>
                            <p class="mt-room">Luxemburg</p>
                        </div>
                        <div>
                            <p><b>Gaelge</b></p>
                            <p class="mt-room">Eire</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>
    <!-- ModalList -->
    <div class="modal fade" id="modalLine" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
        aria-hidden="true">
        <div class="modal-dialog modal-right" role="document">
            <div class="modal-content">
                <div class="modal-body">
                    <RouterLink to="/help" class="router-style">
                        <div class="d-flex click">
                            <i class="bi bi-question-circle"></i>
                            <p class="ms-2">Help Center</p>
                        </div>
                    </RouterLink>
                    <hr>
                    <div class="click" @click="openModalHost">
                        <p><b>Be A Host</b></p>
                        <p class="mt-room fs-des-home">You can start hosting easily and earn extra income.</p>
                    </div>
                    <hr>
                    <p class="click">Find a co-host</p>
                    <p class="click">Recommend host</p>
                    <hr>
                    <p class="click" @click="openModalLogin">Sign in or Register</p>
                </div>
            </div>
        </div>
    </div>
    <!-- ModalHost -->
    <div class="modal fade" id="modalHost" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
        aria-hidden="true">
        <div class="modal-dialog modal-lg" role="document">
            <div class="modal-content" style="width: 885px; padding: 30px; border-radius: 45px; margin-left: -50px;">
                <button class="btn-close" data-bs-dismiss="modal" style="font-size: 10px;"></button>
                <div class="modal-body">
                    <div>
                        <h3 class="text-center">what you offer?</h3>
                        <div class="d-flex justify-content-between mt-5">
                            <div class="text-center box-modal pt-5">
                                <i class="bi bi-house fs-icon-modal"></i>
                                <p style="margin-top: 70px;"><b>Lodging</b></p>
                            </div>
                            <div class="text-center box-modal pt-5">
                                <i class="bi bi-airplane fs-icon-modal"></i>
                                <p style="margin-top: 70px;"><b>Experiences</b></p>
                            </div>
                            <div class="text-center box-modal pt-5">
                                <i class="bi bi-bell fs-icon-modal "></i>
                                <p style="margin-top: 70px;"><b>Service</b></p>
                            </div>
                        </div>
                        <hr>
                        <button class="btn-modal">Next</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- ModalLoginOrRegister -->
    <div class="modal fade" id="modalLogin" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
        aria-hidden="true">
        <div class="modal-dialog modal-lg" role="document">
            <div class="modal-content" style="width: 545px; height: 445px; border-radius: 35px; margin-left:135px;">
                <button class="btn-close mt-4 ms-3" data-bs-dismiss="modal" style="font-size: 10px;"></button>
                <div class="modal-body">
                    <div class="text-center">
                        <img src="/src/assets/img/logoairbnb.png" alt="logo" width="50px" height="50px">
                        <h3 class="mt-2">Login or Register</h3>
                        <input class="input-size" type="text" placeholder="Telepon number or email">
                        <button class="btn-login mt-3">Continue</button>
                    </div>
                    <hr>
                    <p class="text-center">Or</p>
                    <div class="d-flex justify-content-center">
                        <i class="fa-brands fa-google fs-1 me-3"></i>
                        <i class="bi bi-apple fs-1" style="margin-top: -17px;"></i>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
import { onMounted } from 'vue'
import { Modal } from 'bootstrap'

let modalInstance = null
let modalInstanceLine = null
let modalHost = null
let modalLogin = null

onMounted(() => {
    modalInstance = new Modal(document.getElementById('modalLanguange'))
    modalInstanceLine = new Modal(document.getElementById('modalLine'))
    modalHost = new Modal(document.getElementById('modalHost'))
    modalLogin = new Modal(document.getElementById('modalLogin'))
})


const openModalLanguange = () => {
    modalInstance.show()
}

const openModalList = () => {
    modalInstanceLine.show()
}

const openModalHost = () => {
    modalHost.show()
    modalInstanceLine.hide()

    setTimeout(() => {
        modalHost.show()
    }, 200)
}

const openModalLogin = () => {
    modalLogin.show()

    modalInstanceLine.hide()

    setTimeout(() => {
        modalLogin.show()
    }, 200)
}
</script>